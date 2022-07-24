import Header from "../../components/Header/Header";
import SharePosts from '../../assets/Icons/SharePosts.svg'
import UserArrow from '../../assets/Icons/UserArrow.svg' 
import NewMessage from '../../assets/Icons/NewMessages.svg' 
import { Link } from "react-router-dom";
import UserConversation from "../../components/UserConversation/UserConversation"
import Law from '../../assets/Images/Law.png'
import Kaido from '../../assets/Images/Kaido.png'
import Roger from '../../assets/Images/Roger.png'

export default function Home() {
   return(
      <>
         <Header />
         
         <main className="containerHome my-3 flex sbt">
            <section className="sectionPeople border">
               <div className="userHome flex sbt py-2 px-4">
                  <div className="f">
                     <span className="userNameMsg">MonkeyDLuffy <img src={UserArrow} alt="Seta para Baixo" className="arrowUser ml-1" fill='#000'/></span>
                  </div>
                  <div>
                     <span>
                        <img src={NewMessage} alt="Nova Mensagem" />
                     </span>
                  </div>
               </div>

               <div className="userMsgs">
                  <div className="useMsg">
                     <UserConversation img={Law} alt='Imagem do usuário Law' name='Law' msg='Mugiwaraaa'/>
                     <UserConversation img={Kaido} alt='Imagem do usuário Kaido' name='Kaido' msg='Boro Breath'/>
                     <UserConversation img={Roger} alt='Imagem do usuário Roger' name='Roger' msg='Kamusari'/>
                  </div>
                  <div className="useMsg"></div>
                  <div className="useMsg"></div>
               </div>
            </section>

            <section className="sectionMsg flex border">
               <div className="noMsg flex column">
                  <span className="flex">
                     <img src={ SharePosts } alt="Posts" className="sharePosts"/>
                  </span>

                  <h3 className="mt-2">Your Messages</h3>

                  <p className="mt-1">Send private photos and messages to a friend or group.</p>

                  <Link to="/" className="sendMessage mt-3">
                     Send Message
                  </Link>
               </div>
            </section>
         </main>
      </>
   )
}