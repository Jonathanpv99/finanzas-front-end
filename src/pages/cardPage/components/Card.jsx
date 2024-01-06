
import { useEffect, useState } from "react";
import CardModal from "./CardModal";
import CardEditModal from "./CardEditModal";
import CardDeleteModal from "./CardDeleteModal";

const Card = ( { bank, number, name, date, saldo, id }) => {

    const [cardModal, SetCardModal] = useState( false );

    const [editModal, SetEditModal] = useState( false );

    const [deleteModal, SetDeleteModal] = useState( false );

    //Modal de transacciones
          const showModalTrans = () => {
            SetCardModal( true );
          };
        
          const OkTrans = () => {
            SetCardModal( false );
          };
        
          const CancelTrans = () => {
            SetCardModal( false );
          };
    //Modal de eliminar 
          const showModalEdit = () => {
            SetEditModal( true );
          };
        
          const OkEdit = () => {
            SetEditModal( false );
          };
        
          const CancelEdit = () => {
            SetEditModal( false );
          };
     //Modal de eliminar 
          const showModalDelete = () => {
            SetDeleteModal( true );
          };
        
          const OkDelete = () => {
            SetDeleteModal( false );
          };
        
          const CancelDelete = () => {
            SetDeleteModal( false );
          };

    return (
        <div className="flex flex-col gap-2 rounded-lg">
            <div className="card-bg rounded-md flex flex-col gap-3 border border-azul-f">
                <div className="flex justify-between mx-2">
                    <div className="flex flex-col gap-5 justify-start  mt-16 ml-5">
                        <p className="text-xs">{ bank }</p>
                        <img src={ '../../../../chip.jpg' } className="w-14 " alt="chip" />
                    </div>
                    <div className="flex justify-end mt-5">
                        <img src={ '../../../../visa.png'  } className="w-14 h-10" alt="visa" />
                    </div>
                </div>
                <div className="text-2xl font-bold mt-2 mx-2 text-center">
                    <h1>{ number }</h1>
                </div>
                <div className="flex justify-between pb-2">
                    <div className="flex flex-col ml-5">
                        <p className="text-xs">Name:</p>
                        <p>{ name }</p>
                    </div>
                    <div className="flex flex-col mr-4">
                        <p className="text-xs">Valid until:</p>
                        <p className="ml-2">{ date }</p>
                    </div>

                </div>
            </div>
            <div className="flex justify-around gap-2">
                <button onClick={ showModalTrans } className='bg-rose rounded-lg p-2'> acciones</button>
                <button onClick={ showModalEdit } className='bg-azul-o rounded-lg p-2'> editar</button>
                <button onClick={ showModalDelete } className='bg-red-900 rounded-lg p-2 text-white'> eliminar</button>
            </div>
            <CardModal
                isVisible={cardModal}
                onOk={OkTrans}
                onCancel={CancelTrans}
                numero={ number }
                banco={ bank }
                saldo={ saldo }
            />
            <CardEditModal
                isVisible={editModal}
                onOk={OkEdit}
                onCancel={CancelEdit}
                id={ id }
            />
            <CardDeleteModal
                isVisible={deleteModal}
                onOk={OkDelete}
                onCancel={CancelDelete}
                numero={ number }
                banco={ bank }
            />

        </div>

        
    )
}

export default Card;