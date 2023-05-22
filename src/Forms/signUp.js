import './signUp.css';
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="container">
        <head>
          <title>Sign Up</title>
        </head>
        
        <body className="signUp-body">
          <div className="logo-group">
            <h2 className='logo-name'>tutor<span className='logo-buddy'>Buddy</span> <br /> </h2>
            <h6 className="logo-subtitle">Contact a tutor buddy for them to be a better teacher.</h6>
          </div>

          {/* <form action="signUp.php"method="post"> */}
          <form className="signUp-form" action="">  
            <input type="text" name="email" placeholder="Email" className="text-box-input"></input> 
            <br /><br />
            <input type="password" name="password" placeholder="Password" className="text-box-input"></input>
            <br /><br />
            <input type="checkbox" name="remember-me"></input>
            <label> Remember Me </label>
            <br /><br />
            <Link to="/Home"><button type="submit" className="general-button">Sign Up</button></Link>
            
            <div className="password-box"><Link to=""> <h1 className="link-password">Forgot Password?</h1></Link></div>
            <hr/>
            <br />
            <Link to="" ><button className="general-button">Sign Up with Google</button></Link>
          </form>

          <footer className="footer-signUp">
            Created by Audrey, Jeremiah, Lorenzo, Nathan, and Patrick <br></br> Est. 2023
          </footer>

        </body>

    </div>
  );
}

export default SignUp;