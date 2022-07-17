import Logo from '../../assets/Logos/InstaLogo.svg'
import Home from '../../assets/Icons/Home-fill.svg'
import Messenger from '../../assets/Icons/Messenger.svg'
import NewPosts from '../../assets/Icons/NewPosts.svg'
import FindPeople from '../../assets/Icons/FindPeople.svg'
import Like from '../../assets/Icons/Like.svg'
import User from '../../assets/Images/Law-JR.png'
import { Link } from 'react-router-dom'

export default function Header() {
   return (  
      <>
         <header className="flex container">
            <main className='flex sbt headerContainer'>
               <div className='mr-1'>
                  <img src={Logo} alt="Instagram Logo" />
               </div>

               <div className='mr-1'>
                  <input type="text" placeholder='Search' className='border'/>
               </div>

               <div className=''>
                  <Link to='/' className='ml-2'>
                     <img src={Home} alt="Home" />
                  </Link>

                  <Link to='/' className='ml-2'>
                     <img src={Messenger} alt="Mensagens no Direct" />
                  </Link>

                  <Link to='/' className='ml-2'>
                     <img src={NewPosts} alt="Novos Posts" />
                  </Link>

                  <Link to='/' className='ml-2'>
                     <img src={FindPeople} alt="Procurar" />
                  </Link>

                  <Link to='/' className='ml-2'>
                     <img src={Like} alt="Notificações" />
                  </Link>

                  <Link to='/' className='ml-2'>
                     <img src={User} alt="Configurações de Usuário" className='headerImg'/>
                  </Link>
               </div>
            </main>
         </header>
      </>
   )
}