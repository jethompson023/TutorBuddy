import './signUp.css';
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div class="container">
        <head>
          <title>Sign Up</title>
        </head>
        
        <body>
          <div class="title">
            <h2 class='logo'>tutor<span>Buddy</span> <br /> </h2>
            <h6>Contact a tutor buddy for them to be a better teacher.</h6>
          </div>

          {/* <form action="signUp.php"method="post"> */}
          <form action="">  
            <input type="text" name="email" placeholder="Email" class="text-box-input"></input> 
            <br /><br />
            <input type="password" name="password" placeholder="Password" class="text-box-input"></input>
            <br /><br />
            <input type="checkbox" name="remember-me"></input>
            <label> Remember Me </label>
            <br /><br />
            <Link to="/home" className="link-home"><button type="submit">Sign Up</button></Link>
            {/* <Link to="./Home/home">Sign Up</Link> */}
            <a href="signUp.js">Forgot Password?</a>
            <br /><br />
            <hr/>
            <br />
            <button type="button" class="google-signin">Sign Up with Google</button>
          </form>

          <footer>
            Created by Audrey, Jeremiah, Lorenzo, Nathan, and Patrick <br></br> Est. 2023
          </footer>

        </body>

    </div>
  );
}

export default SignUp;