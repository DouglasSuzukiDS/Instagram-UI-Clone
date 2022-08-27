import UserImg from '../../assets/Images/Luffy.png'

export default function UserProfile(props) {
   return(
      <>
         <div className='flex border2'>
            <img src={ props.userImage } alt="Imagem de Usuário" className='userImage mr-2'/>

            <div className='userName flex column border mr-2'>
               <b className=''>{ props.userName }</b>
               <p className=''>{ props.userName }</p>
            </div>

            <div className='action'>Switch</div>
         </div>

         <div className="suggestionsForYou  border2 mt-3 mb-2">
            <div className="suggestions f colunm sbt
            ">
               <div>Suggestions For You</div>
               <div>See all</div>
            </div>
         </div>


      </>
   )
}