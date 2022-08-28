import More from '../../assets/Icons/More.svg'
import LikeFill from '../../assets/Icons/Like-Fill.svg'
import Comment from '../../assets/Icons/Comment.svg'
import SharePosts from '../../assets/Icons/SharePosts.svg'
import Save from '../../assets/Icons/Save.svg'
import Emoji from '../../assets/Icons/Emoji.svg'


export default function UserActivity(props) {
   return (
      <>
         <div className="userActivity pt-1 mb-2">
            {/* User Info */}
            <div className="userActivityInfo px-2 f aic">
               <img
                  src={props.userActivityImg}
                  alt={props.userActivityName}
               />
               
               <div className='flex sbt w-100'>
                  <p className="ml-2"> {props.userActivityName}  </p>
                  <img src={ More } alt="More Icon" />
               </div>
            </div>

            {/* Post Img */}
            <div className="userActivityPost px-2 mt-1">
               <img
                  src={props.userActivityImg}
                  alt={props.userActivityName}
               />
            </div>

            {/* Actions */}
            <div className="userActivityActions px-3 f sbt px-2 py-1" >

               <div className="userActivityAction f">
                  <img src={ LikeFill } alt="Like Icon" />
                  <img src={ Comment } alt="Comment Icon" className='ml-2'/>
                  <img src={ SharePosts } alt="SharePosts Icon" className='ml-2'/>
               </div>

               <div className="userActivityAction">
                  <img src={ Save } alt="Save Icon" />
               </div>

            </div>

            {/* Likes */}
            <div className="userActivityInfos px-1 mx-1">
               <p>
                  <b>
                     { props.userActivityLikes }
                  </b>
               </p>

               <p>
                  <b className='mr-1'>
                     { props.userActivityName }
                  </b>
                  { props.userActivityDescImg } <span>... more</span>
               </p>

               <p>
                  <span>
                     View all { props.userActivityDescComments } comments
                  </span>
               </p>

               <p>
                  <span className='userActivityDescData'>
                     { props.userActivityDescData }
                  </span>
               </p>


            </div>

            {/* Add comment */}
            <div className="userActivityComments px-2 f sbt mt-2">
               <div className="userActivityComment f aic py-2 w-100">
                  <img src={ Emoji } alt="Select emotion" className='mr-2' /> 

                  <input type="text" placeholder='Add a comment ...'/>
               </div>

               <div className="userActivityComment f aic">
                  <span className='action'>Post</span>
               </div>
            </div>
         </div>
      </>
   )
}