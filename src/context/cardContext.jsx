import { createContext, useContext, useEffect, useState} from 'react';
import { createCardRequest, getCardsRequest, getCardRequest, updateCardRequest, deletCardRequest } from '../api/card.js';

const CardContext = createContext();

export const useCard = () => {
    const context = useContext( CardContext );
    if(!context) {
        throw new Error(" useCard must he used whith an CardProvider")
    }

    return context;
}

export const CardProvider = ( { children } ) => {

    const [ cards, SetCards ] = useState( [] );

    const [ card, SetCard ] = useState( null );

    const [ resp, SetResp ] = useState( null );

    const getCards = async ( id ) => {
        try {
            const res = await getCardsRequest( id );
            SetCards( res.data);
            console.log( res.data)
        } catch (error) {
            console.log( error.message );
        }
    }

    const getCard = async ( id ) => {
        try {
            const res = await getCardRequest( id );
            console.log( res );
        } catch (error) {
            console.log( error.message );
        }
    }

    const createCard = async ( card ) => {
        try {
            const res = await createCardRequest( card );
            SetResp( res.status );
        } catch (error) {
            SetResp( error.response.status );
            setTimeout(function() {
                SetResp( null );
            }, 4000);

        }
    }

    const updateCard = async ( id, card) => {
        try {
            const res = await updateCardRequest( id, card);
            console.log( res );
        } catch (error) {
            console.log( error.message );
        }
    }

    const deleteCard = async ( id ) => {

        try {
            const res = await deletCardRequest( id );
            console.log( res );
        } catch (error) {
            console.log( error.message );
        }

    }

    return(
        <CardContext.Provider value={{
            deleteCard,
            updateCard,
            createCard,
            getCard,
            getCards,
            cards,
            resp,
        }}>
            { children }
        </CardContext.Provider>
    )

}