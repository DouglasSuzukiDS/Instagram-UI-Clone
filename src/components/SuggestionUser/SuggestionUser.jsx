import FollowButton from '../FollowButton/FollowButton'

export default function SuggestionUser(props) {
   return (
      <>
         <div className="suggestionUser f sbt aic mt-2">
            <div className='flex'>
               <img src={props.suggestionUserImg} alt={props.suggestionUserName} />

               <div className="suggestionUserDesc ml-1 ">
                  <p>{props.suggestionUserName}</p>
                  <p className='suggestionUserDescInfo flex sbt'>
                     <span> Followed by {props.suggestionUserName} +2 more </span>

                  </p>
               </div>
            </div>

            <span> <FollowButton /> </span>
         </div>
      </>
   )
}