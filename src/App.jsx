
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import LoginPage from './pages/loginPage/LoginPage';
import RegisterPage from './pages/registerPage/RegisterPage';
import TeamPage from './pages/team/TeamPage';
import TransactionPage from './pages/transactionPage/TransactionPage'
import Nabvar from './components/Navbar';

function App() {

  return (
    <>
    <BrowserRouter>
    <main className='container mx-auto px-8 py-4'>
      <Nabvar/>
      <Routes>
        { /*Public Routes */}
          <Route path='/' element={ <HomePage/> }/>
          <Route path='*' element={ <HomePage/> }/>
          <Route path='/login' element={ <LoginPage/> }/>
          <Route path='/register' element={ <RegisterPage/> }/>
          <Route path='/team' element={ <TeamPage/> }/>
          { /*Private Routes*/ }
          <Route path='/transaction' element={ <TransactionPage/> }/>
          
        </Routes>
    </main>
    
   </BrowserRouter>
    </>
   
  )
}

export default App
