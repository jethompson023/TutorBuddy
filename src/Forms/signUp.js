import './signUp.css';
import { Link } from "react-router-dom";
import { FcGoogle} from 'react-icons/fc';

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
            <input type="password" name="password" placeholder="Password" className="text-box-input"></input>
            <input type="password" name='confirm-password' placeholder="Confirm Password" className="text-box-input"></input>
            <select className='role-box'>
              <option value="">What's your role?</option>
              <option value="paris">Student</option>
              <option value="Tutor">Tutor</option>
              <option value="Admin">Admin</option>
            </select>
            <br /><br />
            <Link to="/Home"><button type="submit" className="general-button">Sign Up</button></Link>
            
            <div className="account-already"><Link to="/SignIn"> <h1 className="link-password">Already Have An Account?</h1></Link></div>
            <hr/>
            <br />
            <Link to="" ><button className="general-button">Sign Up with <FcGoogle/></button></Link>
          </form>

          <footer className="footer-signUp">
            Created by Audrey, Jeremiah, Lorenzo, Nathan, and Patrick <br></br> Est. 2023
          </footer>

        </body>

    </div>
  );
}

export default SignUp;