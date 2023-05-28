import './HomePage.css';
import {Link} from "react-router-dom";


function Home() {
 return (
   <div className="Home">
     <body>
      
       {/* <main className="App-header">
         <h1>Welcome to Tutor Buddy</h1>
         <h3>So you can find a buddy so homework isn't funny</h3>
       </main> */}


       <nav className="navbar">
         <h2 className='logo'>tutor<span>Buddy</span></h2>
         <u1>
           <Link to="/"><li className ="nav-button">Home</li></Link>
           <Link to="/Tutors"><li className ="nav-button">Tutors</li></Link>
           <Link to="/Sessions"><li className ="nav-button">Sessions</li></Link>
           <Link to="/Courses"><li className ="nav-button">Courses</li></Link>
           <Link to="/Forms"><button type="submit">Sign Up</button></Link>
         </u1>
        
       </nav>


       <div id="tutor-carousel">
         <div className='slide-container'>
           <div className='slide-content'>
               <div className='card-wrapper'>
                   <div className='card'>
                       <div className='image-content'>
                           <span className='overlay'></span>
                           <div className='card-image'>
                               <img src="src/Tutor/profile-img/profile1.jpg" alt="" className='card-img'></img>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
         </div>
       </div>
      
      
     </body>
   </div>
 );
}


export default Home;