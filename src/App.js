import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import Landingpage from './Pages/Landingpage'
import Watchhistory from './Pages/Watchhistory'
import Header from './Components/Header'
import Footer from './Components/Footer'

function App() {
  return (
    <div>
    <Header/>
    <Routes>
      <Route path='/' element={<Landingpage/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/watch-history' element={ <Watchhistory/>}/>
    </Routes>
    <Footer/>
    </div>
  )
}

export default App