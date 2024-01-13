
import { useForm } from 'react-hook-form';
import { Modal, Button } from 'antd';
import { useEffect, useState } from 'react';
import { toast } from "react-toastify";
import { useCard } from '../../../context/cardContext';

const CardEditModal = ( { isVisible, onCancel, id } ) => {

    const [ tarjeta , setTarjeta ] = useState( null );

    const{ getCard,  updateCard, card, respU } = useCard();

    const {handleSubmit, register, reset, formState:{
        errors
    }} = useForm();

    const onSubmit = handleSubmit( (data) => {
        const idU = localStorage.getItem('idU');
        const datos = data;
        datos.propietario = idU;
        updateCard( id, datos );
    }); 

    useEffect( () => {
        if( isVisible === true ) getCard( id );

    },[isVisible]);

    useEffect( () => {
        
        if( card !== null ){
            setTarjeta( card );
        }
    },[card]);

    useEffect( () => {

      if( respU === 200) {
        MessageSuccess();
        setTimeout(function() {
          location.reload();
          onCancel;
        }, 3000);
      } else if( respU !== null && respU !== 200 && respU !== undefined) {
        reset();
        MessageError();
      }
    },[respU]);


    const MessageError = () => {
      toast.error(`Algo salio mal`, {
      position: toast.POSITION.TOP_CENTER,
      });
    };

    const MessageSuccess = () => {
      toast.success(`Tarjeta Actualizada con Exito`, {
      position: toast.POSITION.TOP_CENTER,
      });
    };

    return (
        <Modal
          title="Editar tarjeta"
          open={ isVisible }
          onCancel={ onCancel }
          footer={[
            <Button key="cancel" className='bg-red-700 text-white' onClick={ onCancel }>
              Cancelar
            </Button>,
            <Button key="ok" className='bg-rose text-white' onClick={ onSubmit }>
              Actualizar
            </Button>,
          ]}
        >
          <form className='p-3 bg-azul-m rounded-lg font-bold'>
          {tarjeta ? (
            <>
              <p>Banco:</p>
              <input type="text" 
                    { ...register('compania', { required: true})}
                    className='w-80 px-4 py-2 rounded-md my-2 mt-3'
                    defaultValue={ tarjeta.compania }
                />
                {
                errors.compania && (
                <p className='text-red-800 font-medium'>Banco es requerido</p>
                )}
                <p>Tipo de Tarjeta:</p>
                <input type="text" 
                    { ...register('tipo', { required: true})}
                    className='w-80 px-4 py-2 rounded-md my-2 mt-3'
                    defaultValue={ tarjeta.tipo }
                />
                {
                errors.tipo && (
                <p className='text-red-800 font-medium'>Tipo es requerdio</p>
                )}
                <p>Numero Tarjeta:</p>
                <input type="number" 
                    { ...register('numero', { required: true})}
                    className='w-80 px-4 py-2 rounded-md my-2 mt-3'
                    defaultValue={ tarjeta.numero }
                />
                {
                errors.numero && (
                <p className='text-red-800 font-medium'>Numero es requerido</p>
                )}
                <p>CVV:</p>
                <input type="number" 
                    { ...register('cvv', { required: true})}
                    className='w-80 px-4 py-2 rounded-md my-2 mt-3'
                    defaultValue={ tarjeta.cvv }
                />
                {
                errors.cvv && (
                <p className='text-red-800 font-medium'>CVV es requerido</p>
                )}
                <p>Fecha de Vencimiento:</p>
                <input type="text" 
                    { ...register('fechaVencimiento', { required: true})}
                    className='w-80 px-4 py-2 rounded-md my-2 mt-3'
                    defaultValue={ tarjeta.fechaVencimiento }
                />
                {
                errors.fechaVencimiento && (
                <p className='text-red-800 font-medium'>Fecha es requerida</p>
                )}
                <p>Saldo Total:</p>
                <input type="number" 
                    { ...register('saldo', { required: true})}
                    className='w-80 px-4 py-2 rounded-md my-2 mt-3'
                    defaultValue={ tarjeta.saldo }
                />
                {
                errors.saldo && (
                <p className='text-red-800 font-medium'>Saldo es requerido</p>
                )}
                </>
          ) : (
            <p>Cargando datos...</p>
          )}
          </form>
          
        </Modal>
    );
};

export default CardEditModal;