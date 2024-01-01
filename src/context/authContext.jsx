
import { createContext, useContext, useEffect, useState} from 'react';
import { LoginRequest, checkCSRFToken } from '../api/auth.js';
import Cookie from 'js-cookie';

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext( AuthContext );
    if(!context) {
        throw new Error(" useAuth must he used whith an AuthProvider")
    }

    return context;
}

export const AuthProvider = ( { children } ) => {

    const [ loading, SetLoading ] = useState( true );
    const [ errors, SetErrors ] = useState( false );
    const [ isAutenticated, SetIsAutenticated ] = useState( false );
    const [ user, SetUser ] = useState( null );

    useEffect( () => {
        if( errors === true ){
            const timer = setTimeout( () => {
                SetErrors(false);
            }, 6000)
            return () => clearTimeout(timer);
        }
    }, [errors]);

    useEffect( () => {
        checkLogin();
        checkCSRFToken();
    }, []);


    const checkLogin = async () => {
        const cookies = Cookie.get();

        if( !cookies.logintoken ){
            SetLoading( false );
            SetIsAutenticated( false );
        }else{
            SetIsAutenticated( true );
        }
    }

    const getId = () => {
        const usr = `${user.nombre} ${ user.apellido}`;
        localStorage.setItem('user', usr);
        const id = user.idUsuario;
        localStorage.setItem('idU', id);
    }

    const login = async ( data ) => {
        try {
            const res = await LoginRequest( data.rfc );
            SetLoading( false );
            SetUser( res.data.usuario );
            SetIsAutenticated( true );
        } catch (error) {
            SetLoading( false );
            console.log( error.message );
            SetErrors( true )
            SetIsAutenticated( false );
        }
    }

    const logout = () => {
        SetIsAutenticated( false );
        SetUser( {} );
        SetErrors( false );
        SetLoading( false );
        Cookie.remove('logintoken');
        localStorage.removeItem('idU');
        localStorage.removeItem('user');
    }

    return (
        <AuthContext.Provider value={{
            loading,
            errors,
            isAutenticated,
            user,
            login,
            logout,
            checkLogin,
            getId,
        }}>
            { children }
        </AuthContext.Provider>
    )
}