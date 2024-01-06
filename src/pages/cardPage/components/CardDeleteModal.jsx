
import { Modal, Button } from 'antd';
import { useEffect, useState } from 'react';
import { toast } from "react-toastify";
import { useCard } from '../../../context/cardContext';

const CardDeleteModal = ( { isVisible, onOk, onCancel, numero, banco } ) => {

    

    const eliminar = () => {

    }

    return (
        <Modal
          title="Eliminar tarjeta"
          open={ isVisible }
          onOk={onOk}
          onCancel={ onCancel }
          footer={[
            <Button key="cancel" className='bg-red-700 text-white' onClick={ onCancel }>
              Cancelar
            </Button>,
            <Button key="ok" className='bg-rose text-white' onClick={ eliminar() }>
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