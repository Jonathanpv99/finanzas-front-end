import Card from "./components/Card";
import { useCard } from "../../context/cardContext";
import { useAuth } from "../../context/authContext";
import { useEffect, useState } from "react";

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
        <div className="grid grid-cols-4 gap-5 m-10">
                { cards.map ( ( card ) => 
                    <Card 
                        key={ card.idTarjeta } 
                        number={ card.numero } 
                        date={ card.fechaVencimiento } 
                        name={ name } 
                        company={ card.compania }
                    />
                )}
        </div>
    )
}

export default CardPage;