import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Direct from '../pages/Direct/Direct'
import Register from '../pages/Register/Register'
import Login from '../pages/Login/Login'
import Error from '../pages/Error/Error'

export default function RoutesApp() {
   return(
      <BrowserRouter>
         <Routes>
            <Route path='/' element={ <Home /> }/>
            <Route path='/direct' element={ <Direct /> } />
            <Route path='/login' element={ <Login /> } />
            <Route path='/register' element={ <Register /> } />
            <Route path='*' element={ <Error /> } />
         </Routes>
      </BrowserRouter>
   )
}