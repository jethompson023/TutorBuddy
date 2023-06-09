import './signIn.css';
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

function SignIn() {
  return (
    <div className="container">
        <head>
          <title>Sign In</title>
        </head>
        
        <body className="signUp-body">
          <div className="logo-group">
            <h2 className='logo-name'>tutor<span className='logo-buddy'>Buddy</span> <br /> </h2>
            <h6 className="logo-subtitle">Contact a tutor buddy for them to be a better teacher.</h6>
          </div>

          {/* <form action="signUp.php"method="post"> */}
          <form className="signUp-form" action="">  
            <input type="text" name="email" placeholder="Email" className="text-box-input"></input> 
            <input type="password" name="password" placeholder="Password" className="text-box-input"></input>
            <input type="checkbox" name="remember-me"></input>
            <label> Remember Me </label>
            <br /><br />
            <Link to="/Home"><button type="submit" className="general-button">Sign In</button></Link>

            <div className="signin-bottom-buttons-group">
              <Link to=""><button className='signin-bottom-buttons'>Forgot Password?</button></Link>
              <Link to="/Forms"><button className='signin-bottom-buttons'>Need Account?</button></Link>
            </div>
            
            <hr/>
            <br />
            <Link to="" ><button className="general-button">Sign In with <FcGoogle/></button></Link>
          </form>

          <footer className="footer-signUp">
            Created by Audrey, Jeremiah, Lorenzo, Nathan, and Patrick <br></br> Est. 2023
          </footer>

        </body>

    </div>
  );
}

export default SignIn;