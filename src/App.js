import './App.css';
// import profile1 from "src/assets/profile-img/profile1.jpg";

function App() {
  return (
    <div className="App">
      <body>
        
        {/* <main className="App-header">
          <h1>Welcome to Tutor Buddy</h1>
          <h3>So you can find a buddy so homework isn't funny</h3>
        </main> */}

        <nav className="navbar">
          <h2 className='logo'>tutor<span>Buddy</span></h2>
          <u1>
            <li><a href="./App.js">Home</a></li>
            <li><a href="src/Tutor/tutor.js">Tutors</a></li>
            <li><a href="#">Sessions</a></li>
            <li><a href="#">Courses</a></li>
          </u1>
          <button type="button">Sign Up</button>
        </nav>

        <div className='calendar'>
          

        </div>
        
        {/* <div className='slide-container'>
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
        </div> */}
      </body>
    </div>
  );
}

export default App;
