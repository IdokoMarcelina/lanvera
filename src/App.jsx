
import { Toaster } from 'react-hot-toast'
import './App.css'
import LandingPage from './Pages/LandingPage'

function App() {

  return (
    <>
       <Toaster position="top-right" reverseOrder={false} />
      <LandingPage/>
    </>
  )
}

export default App
