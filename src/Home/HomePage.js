import './HomePage.css';
import {Link} from "react-router-dom";


function Home() {
 return (
   <div className="Home">

     <header>
      <nav className="navbar">
         <h2 className='logo'>tutor<span>Buddy</span></h2>
         <u1>
           <Link to="/"><li className ="nav-button">Home</li></Link>
           <Link to="/Tutors"><li className ="nav-button">Tutors</li></Link>
           <Link to="/Sessions"><li className ="nav-button">Sessions</li></Link>
           <Link to="/Courses"><li className ="nav-button">Courses</li></Link>
           <Link to="/Forms"><button type="submit" className="signup-button">Sign Up</button></Link>
         </u1>
        
       </nav>
     </header>
     
     <body className='home-slider'>
        <div className='container'>
          <section className='slider-section'>
            <h1 className='slider-h1'>Welcome to Tutor Buddy</h1>
            {/* <h2 className='slider-h2'>Best in class tutoring</h2> */}
          </section>
          <section className='slider-section'>
            <h1 className='slider-h1'>Real student Tutors</h1>
          </section>
          <section className='slider-section'>
            <h1 className='slider-h1'> Get started today</h1>
          </section>
          <section className='slider-footer'>
            <Link to="/Forms"><button type="submit" className='slider-button'>Sign Up</button></Link>
          </section>
        </div>  
     </body>
   </div>
 );
}


export default Home;