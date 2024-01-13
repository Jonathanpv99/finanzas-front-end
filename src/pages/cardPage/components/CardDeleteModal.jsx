
import { Modal, Button } from 'antd';
import { useEffect, useState } from 'react';
import { toast } from "react-toastify";
import { useCard } from '../../../context/cardContext';

const CardDeleteModal = ( { isVisible, onCancel, numero, banco, id } ) => {

    const { deleteCard, respD } = useCard();

    const eliminar = () => {
      deleteCard( id );
    }

    const MessageError = () => {
      toast.error(`Algo salio mal`, {
      position: toast.POSITION.TOP_CENTER,
      });
    };

    const MessageSuccess = () => {
      toast.success(`Tarjeta Eliminada con Exito`, {
      position: toast.POSITION.TOP_CENTER,
      });
    };

    useEffect( () => {
      if( respD === 200) {
        MessageSuccess();
        setTimeout(function() {
          location.reload();
          onCancel;
        }, 3000);
      } else if( respD !== null && respD !== 200 && respD !== undefined) {
        MessageError();
      }
    },[respD])

    return (
        <Modal
          title="Eliminar tarjeta"
          open={ isVisible }
          onCancel={ onCancel }
          footer={[
            <Button key="cancel" className='bg-red-700 text-white' onClick={ onCancel }>
              Cancelar
            </Button>,
            <Button key="ok" className='bg-rose text-white' onClick={ eliminar }>
              Eliminar
            </Button>,
          ]}
        >
            <div className='p-3 bg-red-900 rounded-lg  flex flex-col gap-2'>
                <p className='font-bold text-white'> { banco } </p>
                <p className='font-bold text-white'> { numero } </p>
            </div>

        </Modal>
    )
}

export default CardDeleteModal;