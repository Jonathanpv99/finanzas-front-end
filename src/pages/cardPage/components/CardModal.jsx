
import { useForm } from 'react-hook-form';

import { Modal, Button } from 'antd';

const CardModal = ( { isVisible, onOk, onCancel, banco, saldo, numero } ) => {

    const {handleSubmit, register, formState:{
        errors
    }} = useForm();

    const onSubmit = handleSubmit( (data) => {
        console.log( data );
    }); 

    return (
        <Modal
          title="Realiza una transaccción"
          open={ isVisible }
          onOk={onOk}
          onCancel={onCancel}
          footer={[
            <Button key="cancel" className='bg-red-700 text-white' onClick={ onCancel }>
              Cancelar
            </Button>,
            <Button key="ok" className='bg-rose text-white'>
              Agregar
            </Button>,
          ]}
        >
          <form onSubmit={ onSubmit } className='p-3 bg-azul-m rounded-lg font-bold'>
            <p>Banco:</p>
            <input type="text" 
                    { ...register('banco', { required: true})}
                    className='w-80 px-4 py-2 rounded-md my-2 mt-3'
                    value={ banco }
                    disabled
                />
                <p>Numero:</p>
                <input type="number" 
                    { ...register('numero', { required: true})}
                    className='w-80 px-4 py-2 rounded-md my-2 mt-3'
                    value={ numero }
                    disabled
                />

                <p>Saldo: $</p>
                <input type="number" 
                    { ...register('saldo', { required: true})}
                    className='w-80 px-4 py-2 rounded-md my-2 mt-3'
                    value={ saldo }
                    disabled
                />
                
          </form>
        </Modal>
    );
};

export default CardModal;