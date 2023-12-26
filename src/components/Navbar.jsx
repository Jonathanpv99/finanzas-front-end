import { Link, useNavigate} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faArrowRightToBracket, faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '../context/authContext';
import { useEffect } from 'react';

const Nabvar = () => {

    const  { logout, isAutenticated} = useAuth();

    const navigate = useNavigate();

    const deleteToken = () => {
        logout();
    }

    return (
        <nav className="bg-azul-f text-azul-o my-3 py-5 px-10 rounded-lg flex justify-around items-center">
            <div>
                <Link to='/'>
                <div className='flex gap-x-4  justify-center items-center text-white'>
                    <FontAwesomeIcon icon={ faCreditCard } size='2x'/>
                    <h1 className='text-3xl font-bold'>Finanzas</h1>
                </div>
                
                </Link>
            </div>
            <div>
                <ul className='flex gap-x-20 items-center'>
                    {isAutenticated ? (
                        <>
                            <li className='bg-naranja rounded-lg p-2'>
                            <Link to='/cards' className='font-bold'> Tarjetas </Link>
                            </li>
                            <li className='bg-naranja rounded-lg p-2'>
                            <Link to='/transaction' className='font-bold'> Movimientos </Link>
                            </li>
                        </>
                    ): null }
                    <li className='bg-azul-v rounded-lg p-2'>
                        <Link to='/team' className='font-bold'> Equipo </Link>
                    </li>
                    { !isAutenticated? (
                        <>
                            <li className='bg-gray-400 rounded-lg p-2'>
                            <Link to='/login' className='font-bold'> 
                                <FontAwesomeIcon icon={ faArrowRightToBracket }/>
                                LogIn 
                            </Link>
                            </li>
                        </>
                    ): (
                        <>
                            <li onClick={ deleteToken } className='bg-gray-400 rounded-lg p-2 font-bold'>
                                <Link to='/login' className='font-bold'> 
                                    <FontAwesomeIcon icon={ faArrowRightToBracket }/>
                                    LogOut 
                                </Link>
                            </li>
                        </>
                    )}
                </ul>
            </div>
        </nav>

    )
}

export default Nabvar;