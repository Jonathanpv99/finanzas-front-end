
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import LoginPage from './pages/loginPage/LoginPage';
import RegisterPage from './pages/registerPage/RegisterPage';
import TeamPage from './pages/team/TeamPage';
import TransactionPage from './pages/transactionPage/TransactionPage'
import Nabvar from './components/Navbar';
import CardPage from './pages/cardPage/CardPage';
import ProtectedRoute from './ProtectedRoute';
import { AuthProvider } from './context/authContext';
import { CardProvider } from './context/cardContext';
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  return (
    <>
    <AuthProvider>
      <CardProvider>

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
                <Route element={ <ProtectedRoute/>}>
                  <Route path='/transaction' element={ <TransactionPage/> }/>
                  <Route path='/cards' element={ <CardPage/> }/>
                </Route>
            </Routes>
            <ToastContainer />
          </main>
        </BrowserRouter>

      </CardProvider>
   </AuthProvider> 
    </>
   
  )
}

export default App
