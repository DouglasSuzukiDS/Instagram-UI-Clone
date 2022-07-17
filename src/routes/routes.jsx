import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Direct from '../pages/Direct/Direct'
import Login from '../pages/Login/Login'

export default function RoutesApp() {
   return(
      <BrowserRouter>
         <Routes>
            <Route path='/' element={ <Home /> }/>
            <Route path='/direct' element={ <Direct /> } />
            <Route path='/login' element={ <Login /> } />
         </Routes>
      </BrowserRouter>
   )
}