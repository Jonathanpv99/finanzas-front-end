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

    //modal de agregar 
    const [modalAdd, SetModalAdd] = useState( false );

    //modal de transferencias
    const [cardModal, SetCardModal] = useState( false );

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
        //* Modal add card  */
    const showModalAdd = () => {
        SetModalAdd( true );
      };
    
      const OkAdd = () => {
        SetModalAdd( false );
      };
    
      const CancelAdd = () => {
        SetModalAdd( false );
      };

      //* Modal card transaction  */

      const showModalTrans = () => {
        SetCardModal( true );
      };
    
      const OkTrans = () => {
        SetCardModal( false );
      };
    
      const CancelTrans = () => {
        SetCardModal( false );
      };

    return (
        <div className="g m-10">
            <div className=" mb-5 flex justify-end">
                <button onClick={ showModalAdd } className='bg-[#FA508E] rounded-lg p-2'> 
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
            <CardNewModal
                isVisible={modalAdd}
                onOk={OkAdd}
                onCancel={CancelAdd}
            />

            <CardModal
                isVisible={cardModal}
                onOk={OkTrans}
                onCancel={CancelTrans}
            />
        </div>
    )
}

export default CardPage;