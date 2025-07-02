
import { Toaster } from 'react-hot-toast'
import './App.css'
import LandingPage from './Pages/LandingPage'
import { Route, Routes,  } from 'react-router-dom'
import {ToastContainer} from 'react-toastify'
import VerifyOtp from './Pages/auth/VerifyOtp'
import Signup from './Pages/auth/Signup'
import Signin from './Pages/auth/Signin'

function App() {

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />

        <Routes>
            <Route path='/' element={<LandingPage/>} />
            <Route path='/signup' element={<Signup/>}/>
            <Route path="/verify-email/:token" element={<VerifyOtp />} />
            <Route path='/login' element={<Signin/>}/>

            
        </Routes>
    

    </>
  )
}

export default App
