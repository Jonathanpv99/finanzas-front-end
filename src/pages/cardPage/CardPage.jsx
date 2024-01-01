import Card from "./components/Card";
import { useCard } from "../../context/cardContext";
import { useAuth } from "../../context/authContext";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

const CardPage = () => {

    const [ name, SetName ] = useState("");

    const { getCards, cards } = useCard();
    const { user, getId } = useAuth();

    useEffect( () => {
       if ( user !== null ) getId();
    }, [user]);


    useEffect( () => {
       const idU = localStorage.getItem('idU');
       const nameU = localStorage.getItem('user');
       SetName(nameU);
       getCards(idU);
    },[])

    return (
        <div className="g m-10">
            <div className=" mb-5 flex justify-end">
                <button className='bg-[#FA508E] rounded-lg p-2'> 
                    Agregar <FontAwesomeIcon icon={ faPlusCircle }/>
                </button>
            </div>
            <div className="bg-azul-f grid grid-cols-4 gap-5 p-4 rounded-lg">
            { cards.map ( ( card ) => 
                    <Card 
                        key={ card.idTarjeta } 
                        number={ card.numero } 
                        date={ card.fechaVencimiento } 
                        name={ name } 
                        bank={ card.compania }
                    />
                )}
            </div>
        </div>
    )
}

export default CardPage;