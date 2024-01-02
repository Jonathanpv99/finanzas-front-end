
import { useForm } from 'react-hook-form';

import { Modal } from 'antd';

const CardNewModal = ( { isVisible, onOk, onCancel } ) => {

    const {handleSubmit, register, formState:{
        errors
    }} = useForm();

    const onSubmit = handleSubmit( (data) => {
        console.log( data );
    }); 

    return (
        <Modal
          title="Agrega una nueva tarjeta"
          open={ isVisible }
          onOk={onOk}
          onCancel={ onCancel }
        >
          <form onSubmit={ onSubmit } className='bg-azul-m'>
          <input type="text" 
                { ...register('banco', { required: true})}
                className='w-80 px-4 py-2 rounded-md my-2 mt-3'
                placeholder='Banco'
            />
            {
            errors.banco && (
            <p className='text-red-800 font-medium'>Banco es requerido</p>
            )}
            <input type="text" 
                { ...register('tipo', { required: true})}
                className='w-80 px-4 py-2 rounded-md my-2 mt-3'
                placeholder='CREDITO'
            />
            {
            errors.tipo && (
            <p className='text-red-800 font-medium'>Tipo es requerdio</p>
            )}
            <input type="number" 
                { ...register('numero', { required: true})}
                className='w-80 px-4 py-2 rounded-md my-2 mt-3'
                placeholder='0000000000000000'
            />
            {
            errors.numero && (
            <p className='text-red-800 font-medium'>Numero es requerido</p>
            )}
            <input type="number" 
                { ...register('cvv', { required: true})}
                className='w-80 px-4 py-2 rounded-md my-2 mt-3'
                placeholder='000'
            />
            {
            errors.cvv && (
            <p className='text-red-800 font-medium'>CVV es requerido</p>
            )}
            <input type="text" 
                { ...register('fecha', { required: true})}
                className='w-80 px-4 py-2 rounded-md my-2 mt-3'
                placeholder='01/24'
            />
            {
            errors.fecha && (
            <p className='text-red-800 font-medium'>Fecha es requerida</p>
            )}
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