import './tutors.css';
import { Link } from "react-router-dom";
import tutorImage from "./download.jfif";

function showFilterDropdown() {
  var displayAttr = document.getElementById("tutor-match-filter").style.display;

  if(displayAttr == "block") {
    document.getElementById("tutor-match-filter").style.display = "none";
    document.getElementById("tutor-match-card").style.marginTop = "10px";
  } else {
    document.getElementById("tutor-match-filter").style.display = "block";
    document.getElementById("tutor-match-card").style.marginTop = "90px";
    // document.getElementById("tutor-container").style.height = "100vh";
  }
}

// function filterTutor() {
//   var input, filter, a, i, div;
//   input = document.getElementById("myInput");
//   filter = input.value.toUpperCase();
//   div = document.getElementById("myDropdown");
//   a = div.getElementsByTagName("a");
//   for (i = 0; i < a.length; i++) {
//     var txtValue = a[i].textContent || a[i].innerText;
//     if (txtValue.toUpperCase().indexOf(filter) > -1) {
//       a[i].style.display = "";
//     } else {
//       a[i].style.display = "none";
//     }
//   }
// }

function Tutor() {
  return (
    <div id="tutor-container" className="tutor-container">
        <head>
          <title>Tutor-Page</title>
        </head>

        <header>
          <nav className="navbar">
            <h2 className='logo'>tutor<span>Buddy</span></h2>
            <u1>
            <Link to="/"><li className ="nav-button">Home</li></Link>
            <Link to="/Tutors"><li className ="nav-button">Tutors</li></Link>
            <Link to="/Sessions"><li className ="nav-button">Sessions</li></Link>
            <Link to="/Courses"><li className ="nav-button">Courses</li></Link>
            <Link to="/Forms"><button type="submit">Sign Out</button></Link>
            </u1>
          </nav>
        </header>

        <body className='tutor-body'>
          <div className="tutor-match">
            <button onClick={showFilterDropdown} className='filter-tutor'>Filter</button>
            <div id="tutor-match-filter" className='tutor-match-filter'>
              <form action="">
                <select name="filter-courses" id="filter-courses">
                  <option value="default-course">-- Courses --</option>
                  <option value="course-cs471">CS-471</option>
                  <option value="course-cs231">CS-231</option>
                  <option value="course-math203">MATH-203</option>
                  <option value="course-cs211">CS-211</option>
                </select>

                <select name="tutor-rating" id="tutor-rating">
                  <option value="default-rating">-- Rating --</option>
                  <option value="rating-1">1 Star</option>
                  <option value="rating-2">2 Stars</option>
                  <option value="rating-3">3 Stars</option>
                  <option value="rating-4">4 Stars</option>
                  <option value="rating-5">5 Stars</option>
                </select>

                <br></br>

                <select name="tutor-experience" id="tutor-experience">
                  <option value="default-experience">-- Experience --</option>
                  <option value="experience-less-than-1">Less than 1 Year</option>
                  <option value="experience-1-2">1-2 Years</option>
                  <option value="experience-2-3">2-3 Years</option>
                  <option value="experience-3-4">3-4 Years</option>
                  <option value="experience-more-than-4">More than 5 Years</option>
                </select>

                <select name="tutor-credentials" id="tutor-credentials">
                  <option value="default-credentials">-- Credentials --</option>
                  <option value="credentials-certification">Basic Certifications</option>
                  <option value="credentials-advanced-certification">Advanced Certifications</option>
                  <option value="credentials-bachelors">Bachelor's Degree</option>
                  <option value="credentials-masters">Master's Degree</option>
                </select>

                <br></br>

                <input type="submit" value="Filter"></input>
                <input type="submit" value="Auto Match Me"></input>
              </form>
            </div>

            <div id="tutor-match-card" className='tutor-match-card'>

              <div className='tutor-img-container'>
                <img src={tutorImage} alt="Tutor" className='tutor-image'/>
                
                <div className='tutor-card-bio'>
                  <div className='tutor-card-name'> Name </div>
                  Rating 
                  <br></br> Experience
                  <br></br> Courses Tutoring
                </div>
              </div>

              {/* <div className='tutor-card-ratings'> 
                <div className='Rating'>
                  
                </div>
              </div> */}

              <div className='tutor-button-containers'>
                <button className='tutor-card-reject'>Reject</button>
                <button className='tutor-card-accept'>Match</button>
              </div>
                
            </div>

          </div>

          <div className="users-tutors">
            <form action="">
              <input type="search" name="user-tutor-search" id="user-tutor-search" placeholder="Search for tutors..."></input>
            </form>
          </div>

        </body>
    </div>
  );
}

export default Tutor;