import { useForm,} from 'react-hook-form';
import { LoginRequest } from '../../api/auth.js';
const HomePage = () => {

    const {handleSubmit, register, formState:{
        errors
    }} = useForm();

    const onSubmit = handleSubmit( (data) => {
        console.log( data );
        signin( data );
    }); 

    const signin = async ( data ) => {
        try {
            const res = await LoginRequest( data.rfc );
            console.log( res );
        } catch (error) {
            console.log( error.data);
        }
    }

    return (
        <div className='flex items-center justify-center bg-azul-o h-[calc(100vh-150px)]'>
            <div className='bg-azul-m m-10 p-5 rounded-lg'>

                <h1 className='text-2xl font-bold mt-5'>Login:</h1>
                
                <form onSubmit={ onSubmit } className='text-black'>
                    <input type="text" 
                        { ...register('rfc', { required: true})}
                        className='w-80 px-4 py-2 rounded-md my-2 mt-3'
                        placeholder='RFC'
                    />
                    {
                    errors.rfc && (
                        <p className='text-red-800 font-medium'>RFC is required</p>
                    )
                    }
                    <div className='flex justify-end'>
                        <button type='submit' className='bg-gray-400 px-4 py-1 rounded-md mt-2 text-azul-o'>Accept</button>
                    </div>
                </form>
                
            </div>
        </div>
    )
}

export default HomePage;