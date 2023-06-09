import './ChatRoom.css';
import { PrettyChatWindow } from "react-chat-engine-pretty";
import {Link} from "react-router-dom";


function ChatRoom() {
 return (
   <div className="Home">

     <header>
      <nav className="navbar">
         <h2 className='logo'>tutor<span>Buddy</span></h2>
         <u1>
           <Link to="Home"><li className ="nav-button">Home</li></Link>
           <Link to="/Tutors"><li className ="nav-button">Tutors</li></Link>
           <Link to="/Sessions"><li className ="nav-button">Sessions</li></Link>
           <Link to="/Courses"><li className ="nav-button">Courses</li></Link>
           <Link to="/ChatRoom"><li className ="nav-button">ChatRoom</li></Link>
           <Link to="/SignIn"><button type="submit" className="signup-button">Sign Out</button></Link>
         </u1>
        
       </nav>
     </header>
     <div style={{height: "100vh"}}>
        <PrettyChatWindow>
            projectId="fdb0c3b8-825e-48ec-9163-30f22ecbb399"
            style={{height: "100%"}}
        </PrettyChatWindow>
     </div>
     
    
   </div>
 );
}


export default ChatRoom;