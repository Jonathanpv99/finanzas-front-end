import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard, faArrowRightToBracket, faArrowUpFromBracket, faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons';

const Nabvar = () => {


    return (
        <nav className="bg-azul-f text-azul-o my-3 py-5 px-10 rounded-lg flex justify-around items-center">
            <div>
                <Link to='/'>
                <div className='flex gap-x-4  justify-center items-center text-white'>
                    <FontAwesomeIcon icon={ faCreditCard } size='2x'/>
                    <h1 className='text-3xl font-bold'>Finanzas</h1>
                </div>
                
                </Link>
            </div>
            <div>
                <ul className='flex gap-x-20 items-center'>
                <li className='bg-naranja rounded-lg p-2'>
                    <Link to='/cards' className='font-bold'> Cards </Link>
                    </li>
                    <li className='bg-naranja rounded-lg p-2'>
                    <Link to='/transaction' className='font-bold'> Tranzacción </Link>
                    </li>
                    <li className='bg-azul-v rounded-lg p-2'>
                        <Link to='/team' className='font-bold'> Team </Link>
                    </li>
                    <li className='bg-gray-400 rounded-lg p-2'>
                        <FontAwesomeIcon icon={ faArrowRightToBracket }/>
                        <Link to='/login' className='font-bold'> LogIn </Link>
                    </li>
                    <li className='bg-gray-400 rounded-lg p-2'>
                        <FontAwesomeIcon icon={ faArrowRightFromBracket }/>
                        <Link to='/' className='font-bold'> LogOut </Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default Nabvar;