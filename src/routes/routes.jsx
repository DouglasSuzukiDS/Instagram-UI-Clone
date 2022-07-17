import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from '../pages/Login/Login'

export default function RoutesApp() {
   return(
      <BrowserRouter>
         <Routes>
            <Route path='/' element={ <Login /> }></Route>
         </Routes>
      </BrowserRouter>
   )
}