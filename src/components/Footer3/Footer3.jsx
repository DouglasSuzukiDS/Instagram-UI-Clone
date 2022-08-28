import { Link } from 'react-router-dom'
import ArrowDown from '../../assets/Icons/ArrowDown.svg' 

export default function Footer3() {
   return (
      <>
         <footer className='footer flex column sbt wrap mt-4'>
            <div className='flex wrap links'>
               <div><Link to='/'>About</Link></div>
               <div><Link to='/'>Press</Link></div>
               <div><Link to='/'>API</Link></div>
               <div><Link to='/'>Jobs</Link></div>
               <div><Link to='/'>Privacy</Link></div>
               <div><Link to='/'>Terms</Link></div>
               <div><Link to='/'>Locations</Link></div>
               <div><Link to='/'>Top</Link></div>
               <div><Link to='/'>Accounts</Link></div>
               <div><Link to='/'>Hashtags</Link></div>
               <div><Link to='/'>Language</Link></div>
            </div>
         </footer>
      </>
   )
}