import Card from "./components/Card";
import { useCard } from "../../context/cardContext";
import { useAuth } from "../../context/authContext";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import CardModal from "./components/CardModal";
import CardNewModal from "./components/CardNewModal";

const CardPage = () => {

    const [ name, SetName ] = useState("");

    const [modalAdd, SetModalAdd] = useState( false );

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

    //manejo de los modales

    const showModalAdd = () => {
        SetModalAdd( true );
      };
    
      const OkAdd = () => {
        SetModalAdd( false );
      };
    
      const CancelAdd = () => {
        SetModalAdd( false );
      };

    return (
        <div className="g m-8">
            <div className=" mb-5 flex justify-end">
                <button onClick={ showModalAdd } className='bg-rose rounded-lg p-2'> 
                    Agregar <FontAwesomeIcon icon={ faPlusCircle }/>
                </button>
            </div>
            <div className="bg-azul-f grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 p-4 rounded-lg">
            { cards.map ( ( card ) => 
                    <Card 
                        key={ card.idTarjeta } 
                        number={ card.numero } 
                        date={ card.fechaVencimiento } 
                        name={ name } 
                        bank={ card.compania }
                        saldo={ card.saldo }
                        id={ card.idTarjeta }
                    />
                )}
            </div>
            <CardNewModal
                isVisible={modalAdd}
                onOk={OkAdd}
                onCancel={CancelAdd}
            />

        </div>
    )
}

export default CardPage;