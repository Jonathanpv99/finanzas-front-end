
import { useForm } from 'react-hook-form';
import { Modal, Button } from 'antd';
import { useCard } from '../../../context/cardContext';
import { useEffect } from 'react';
import { toast } from "react-toastify";

const CardNewModal = ( { isVisible, onOk, onCancel } ) => {


    const{ createCard, resp } = useCard();

    const {handleSubmit, register, reset, formState:{
        errors
    }} = useForm();

    const onSubmit = handleSubmit( (data) => {
        const idU = localStorage.getItem('idU');
        const datos = data;
        datos.propietario = idU;
        createCard( datos );
    }); 

    useEffect( () => {
      if( resp === 201 ) {
        MessageSuccess();
        setTimeout(function() {
          location.reload();
          onCancel;
        }, 3500);
        
      } else if( resp !== null && resp !== 201 && resp !== undefined) {
        reset();
        MessageError();
      }
    },[resp]);


    const MessageError = () => {
      toast.error(`Algo salio mal`, {
      position: toast.POSITION.TOP_CENTER,
      });
    };

    const MessageSuccess = () => {
      toast.success(`Tarjeta Registrada con Exito`, {
      position: toast.POSITION.TOP_CENTER,
      });
    };

    return (
        <Modal
          title="Agrega una nueva tarjeta"
          open={ isVisible }
          onOk={onOk}
          onCancel={ onCancel }
          footer={[
            <Button key="cancel" className='bg-red-700 text-white' onClick={ onCancel }>
              Cancelar
            </Button>,
            <Button key="ok" className='bg-rose text-white' onClick={ onSubmit }>
              Agregar
            </Button>,
          ]}
        >
          <form className='p-3 bg-azul-m rounded-lg font-bold'>
            <p>Banco:</p>
            <input type="text" 
                  { ...register('compania', { required: true})}
                  className='w-80 px-4 py-2 rounded-md my-2 mt-3'
                  placeholder='Banco'
              />
              {
              errors.compania && (
              <p className='text-red-800 font-medium'>Banco es requerido</p>
              )}
              <p>Tipo de Tarjeta:</p>
              <input type="text" 
                  { ...register('tipo', { required: true})}
                  className='w-80 px-4 py-2 rounded-md my-2 mt-3'
                  placeholder='CREDITO'
              />
              {
              errors.tipo && (
              <p className='text-red-800 font-medium'>Tipo es requerdio</p>
              )}
              <p>Numero Tarjeta:</p>
              <input type="number" 
                  { ...register('numero', { required: true})}
                  className='w-80 px-4 py-2 rounded-md my-2 mt-3'
                  placeholder='0000000000000000'
              />
              {
              errors.numero && (
              <p className='text-red-800 font-medium'>Numero es requerido</p>
              )}
              <p>CVV:</p>
              <input type="number" 
                  { ...register('cvv', { required: true})}
                  className='w-80 px-4 py-2 rounded-md my-2 mt-3'
                  placeholder='000'
              />
              {
              errors.cvv && (
              <p className='text-red-800 font-medium'>CVV es requerido</p>
              )}
              <p>Fecha de Vencimiento:</p>
              <input type="text" 
                  { ...register('fechaVencimiento', { required: true})}
                  className='w-80 px-4 py-2 rounded-md my-2 mt-3'
                  placeholder='01/24'
              />
              {
              errors.fechaVencimiento && (
              <p className='text-red-800 font-medium'>Fecha es requerida</p>
              )}
              <p>Saldo Total:</p>
              <input type="number" 
                  { ...register('saldo', { required: true})}
                  className='w-80 px-4 py-2 rounded-md my-2 mt-3'
                  placeholder='100.00'
              />
              {
              errors.saldo && (
              <p className='text-red-800 font-medium'>Saldo es requerido</p>
              )}

          </form>
          
        </Modal>
    );
};

export default CardNewModal;