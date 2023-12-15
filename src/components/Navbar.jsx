import { Link } from 'react-router-dom'
const Nabvar = () => {


    return (
        <nav className="bg-azul text-azul my-3 py-5 px-10 rounded-lg flex justify-between">
            <div>
                <Link to='/'>
                <div className='flex gap-x-4 items-center text-white'>
                    <h1 className='text-2xl font-bold'>Finanzas</h1>
                </div>
                
                </Link>
                
            </div>
            <div>
                <ul className='flex gap-x-20 items-center'>
                    <li className='bg-verde-b rounded-lg p-2'>
                    <Link to='/transaction' className='font-bold'> Tranzacción </Link>
                    </li>
                    <li className='bg-cyan-600 rounded-lg p-2'>
                        <Link to='/team' className='font-bold'> Team </Link>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default Nabvar;