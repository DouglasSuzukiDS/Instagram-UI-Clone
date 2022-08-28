import UserImg from '../../assets/Images/Luffy.png'
import SuggestionUser from '../SuggestionUser/SuggestionUser'
import KaidoImg from '../../assets/Images/Kaido.png'
import RogerImg from '../../assets/Images/Roger.png'
import LawImg from '../../assets/Images/Law.png'
import BarbaBrancaImg from '../../assets/Images/BarbaBranca.png'
import KiddImg from '../../assets/Images/Kidd.png'

import Footer3 from '../../components/Footer3/Footer3'
export default function UserProfile(props) {
   return (
      <>
         <div className='flex'>
            <img src={props.userImage} alt="Imagem de Usuário" className='userImage mr-2' />

            <div className='userName flex column mr-2'>
               <b className=''>{props.userName}</b>
               <p className=''>{props.userName}</p>
            </div>

            <div className='action'>Switch</div>
         </div>

         <div className="suggestionsForYou mt-3">
            <div className="suggestions f colunm sbt
            ">
               <div>Suggestions For You</div>
               <div>See all</div>
            </div>
         </div>

         <div className="suggestiionsUsers">

            <SuggestionUser
               suggestionUserImg={BarbaBrancaImg}
               suggestionUserName='BarbaBranca'
            />

            <SuggestionUser
               suggestionUserImg={KaidoImg}
               suggestionUserName='Kaido'
            />

            <SuggestionUser
               suggestionUserImg={KiddImg}
               suggestionUserName='Kidd'
            />

            <SuggestionUser
               suggestionUserImg={LawImg}
               suggestionUserName='Law'
            />

            <SuggestionUser
               suggestionUserImg={RogerImg}
               suggestionUserName='Roger'
            />

            <Footer3 />

         </div>
      </>
   )
}