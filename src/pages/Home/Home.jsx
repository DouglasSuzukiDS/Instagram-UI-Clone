import Header from "../../components/Header/Header";

import HomeFill from '../../assets/Icons/Home-fill.svg'
import Messenger from '../../assets/Icons/Messenger.svg'
import NewPosts from '../../assets/Icons/NewPosts.svg'
import FindPeople from '../../assets/Icons/FindPeople.svg'
import Like from '../../assets/Icons/Like.svg'
import UserImg from '../../assets/Images/Luffy.png'
import BarbaBrancaImg from '../../assets/Images/BarbaBranca.png'
import KaidoImg from '../../assets/Images/Kaido.png'
import KiddImg from '../../assets/Images/Kidd.png'
import LawImg from '../../assets/Images/Law.png'
import RogerImg from '../../assets/Images/Roger.png'

import UserProfile from '../../components/UserProfile/UserProfile'
import UserActivity from "../../components/UserActivity/UserActivity";
import Alert from "../../components/Alert/Alert";
import UserStories from "../../components/UserStories/UserStories";

export default function Home() {
   return (
      <>
         <Header homeIcon={HomeFill}
            messenger={Messenger} newPosts={NewPosts}
            findPeople={FindPeople} like={Like} user={UserImg}
         />

         <div className="containerHome">

            <main className="mainHome f sbt mt-3">
               <section className="activitiesFriendsHome mr-2">
                  {/* Stories */}
                  <div className="statusFriendsHome py-1 px-2 mb-2">
                     <div className="f">
                        <UserStories userStoriesImg={ BarbaBrancaImg } userStoriesName='Barba Branca'/>
                        <UserStories userStoriesImg={ KaidoImg } userStoriesName='Kaido'/>
                        <UserStories userStoriesImg={ KiddImg } userStoriesName='Kidd'/>
                        <UserStories userStoriesImg={ LawImg } userStoriesName='Law'/>
                        <UserStories userStoriesImg={ RogerImg } userStoriesName='Roger'/>
  
                     </div>
                  </div>
                  
                  {/* Posts */}
                  <UserActivity
                     userActivityImg={KaidoImg}
                     userActivityName='Kaido'
                     userActivityPost={KaidoImg}
                     userActivityDescImg = 'Boro Breath'
                     userActivityDescComments = '100'
                     userActivityDescData = '2 Hours Ago'
                     userActivityLikes='1.266 Likes'
                     className='userActivity py-1 px-2'
                  />

                  <UserActivity
                     userActivityImg={KiddImg}
                     userActivityName='Kidd'
                     userActivityPost={KiddImg}
                     userActivityDescImg = 'Punk Vise'
                     userActivityDescComments = '43'
                     userActivityDescData = '1 Hour Ago'
                     userActivityLikes='1.016 Likes'
                     className='userActivity py-1 px-2'
                  />

               </section>
               
               {/* Suggestions */}
               <aside className="userSuggestions">
                  <UserProfile userImage={UserImg} userName='Monkey D Luffy' />
                  <Alert msgAlert=' INSTAGRAM UI CLONE ' />
               </aside>
            </main>
         </div>
      </>
   )
}