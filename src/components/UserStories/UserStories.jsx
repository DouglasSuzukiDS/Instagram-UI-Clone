export default function UserStories(props) {
   return(
      <>
         <div className="userStories mr-2 flex column">
            <img src={ props.userStoriesImg } alt={`Foto de ${ props.userStoriesName }`}/>
            <p>{props.userStoriesName}</p>
         </div> 
      </>
   )
}