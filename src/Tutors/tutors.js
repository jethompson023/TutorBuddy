import './tutors.css';
import { Link } from "react-router-dom";
import { BsFilter, BsStar, BsStarFill, BsFacebook, BsTwitter, BsLinkedin } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";
import tutorImage from "./download.jfif";
import Carousel from '@itseasy21/react-elastic-carousel';
import React, { useEffect, useState } from "react";
import { MultiSelect } from "react-multi-select-component";

// functionality for the filter dropdown options
function showFilterDropdown() {
  var displayAttr = document.getElementById("tutor-match-filter").style.display;

  // when the filter button is pushed, it shows the options and moves the tutor cards down
  //  if the options aren't already showing. Closes options and moves tutor cards back up
  //  if the options are showing
  if(displayAttr === "flex") {
    document.getElementById("tutor-match-filter").style.display = "none";
    document.getElementById("tutor-match-card").style.marginTop = "10px";
  } else {
    document.getElementById("tutor-match-filter").style.display = "flex";
    document.getElementById("tutor-match-card").style.marginTop = "90px";
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
  const [tutors, setTutorName, setTutorRating, setUserEmail] = useState([]);


  const getTutors = async () => {
    const tutorResponse = await fetch("https://onlinetutoring.thetechnician94.com/API/api.php/records/Tutors");
    const tutorData = await tutorResponse.json();

    // const ratingResponse = await fetch("https://onlinetutoring.thetechnician94.com/API/api.php/records/Ratings");
    // const tutorRating = await ratingResponse.json();

    // const userResponse = await fetch("https://onlinetutoring.thetechnician94.com/API/api.php/records/Users");
    // const userData = await userResponse.json();


    setTutorName(tutorData["records"]);

    // setTutorRating(tutorRating["records"]); //needs userID to get correct tutor rating

    // setUserEmail(userData["records"]); 
    
  }

  useEffect(() => {
    getTutors();
  }, [])



  //carousel: amount of tutor profile to show at once
  const breakPoints = [
    {width: 1, itemsToShow: 1},
    {width: 550, itemsToShow: 2},
    {width: 768, itemsToShow: 3},
    {width: 1200, itemsToShow: 4},
  ];

  //Course options for filter menu
  var courseOptions = [
    { label: "CS-102", value: "CS-102" },
    { label: "CS-211", value: "CS-211" },
    { label: "CS-471", value: "CS-471"},
    { label: "CE-210", value: "CE-210" },
    { label: "CE-320", value: "CE-320" },
    { label: "CE-452", value: "CE-4521"},
    { label: "MATH-101", value: "MATH-101" },
    { label: "MATH-102", value: "MATH-102" },
    { label: "MATH-203", value: "MATH-203" }
  ];

  const [selected, setSelected] = useState([]);

  //change default select value in course selection menu
  const customValueRenderer = (selected, _options) => {
    return selected.length
      ? selected.map(({ label }) => label + ", ")
      : "Select Course(s)";
  };

  return (
    <div id="tutor-container" className="tutor-container">
        <head>
          <title>Tutor-Page</title>
        </head>

        <header>
          <nav className="navbar">
            <h2 className='logo'>tutor<span>Buddy</span></h2>
            <u1>
            <Link to="/Home"><li className ="nav-button">Home</li></Link>
            <Link to="/Tutors"><li className ="nav-button">Tutors</li></Link>
            <Link to="/Sessions"><li className ="nav-button">Sessions</li></Link>
            <Link to="/Courses"><li className ="nav-button">Courses</li></Link>
            <Link to="/ChatRoom"><li className ="nav-button">ChatRoom</li></Link>
            <Link to="/SignIn"><button type="submit" className='signup-button'>Sign Out</button></Link>
            </u1>
          </nav>
        </header>

        <body className='tutor-body'>

          
          <div className="tutor-match">
            <div className="filter-tutor-header">
            <button onClick={showFilterDropdown} className='filter-tutor'><BsFilter/></button>
            <h1 className="find-tutor">Find your Tutor</h1>
            </div>
            
            <div id="tutor-match-filter" className='tutor-match-filter'>
              <form action="">

                <div className='filter-options'>
                  <MultiSelect
                    options={courseOptions}
                    value={selected}
                    onChange={setSelected}
                    labelledBy="select"
                    className='multiselect'
                    valueRenderer={customValueRenderer}
                  />

                  <select name="tutor-rating" id="tutor-rating" className="filter-box">
                    <option value="default-rating" className='default-option'>Any Rating</option>
                    <option value="rating-1">Less than 1 Star</option>
                    <option value="rating-2">1-2 Stars</option>
                    <option value="rating-3">2-3 Stars</option>
                    <option value="rating-4">3-4 Stars</option>
                    <option value="rating-5">4-5 Stars</option>
                  </select>                

                  <select name="tutor-experience" id="tutor-experience" className="filter-box">
                    <option value="default-experience" className='default-option'>Any Experience</option>
                    <option value="experience-less-than-1">Less than 1 Year</option>
                    <option value="experience-1-2">1-2 Years</option>
                    <option value="experience-2-3">2-3 Years</option>
                    <option value="experience-3-4">3-4 Years</option>
                    <option value="experience-more-than-4">More than 5 Years</option>
                  </select>

                  <select name="tutor-credentials" id="tutor-credentials" className="filter-box">
                    <option value="default-credentials" className='default-option'>Any Credentials</option>
                    <option value="credentials-certification">Basic Certifications</option>
                    <option value="credentials-advanced-certification">Advanced Certifications</option>
                    <option value="credentials-bachelors">Bachelor's Degree</option>
                    <option value="credentials-masters">Master's Degree</option>
                  </select>

                  <br></br>
                  

                  <input type="submit" value="Apply Filter" className='filter-submit'></input>
                  <input type="submit" value="Auto Match Me" className='filter-submit'></input>
                  </div>
              </form>
            </div>
            
              <section>
                <div className='tutor-card-container'>
                  <div className='tutor-content'>
                    <Carousel breakPoints={breakPoints} className='tutor-carousel'>
                      {/* {tutors && tutors.length > 0 && tutors.map((tutor, index) => ( */}
                        <div className='tutor-card'>
                          <div className='tutor-card-content'>
                            <div className='tutor-image'>
                              {/* <FontAwesomeIcon icon="fa-solid fa-user" /> */}
                              {/* <img src={<FaUserAlt/>} alt="Tutor Face"></img> */}
                              <i><FaUserAlt size={28} /></i>
                            </div>

                            {/* <div className='tutor-name-profession' key={tutor.ID}> */}
                              {/* <span className='tutor-name'>{tutor.Name}</span> */}
                            <div className='tutor-name-profession'>
                              <span className='tutor-name'>Tutor Name</span>
                              <span className='tutor-profession'>Tutor</span>
                            </div>

                            <div className='media-icons'>
                              <i><BsFacebook/></i>
                              <i><BsTwitter/></i>
                              <i><BsLinkedin/></i>
                            </div>

                            <div className='tutor-rating'>
                              <i><BsStarFill/></i>
                              <i><BsStarFill/></i>
                              <i><BsStarFill/></i>
                              <i><BsStar/></i>
                              <i><BsStar/></i>
                            </div>

                            <div className='card-button'>
                              <button className='about-tutor'>About</button>
                              <button className='contact-tutor'>Contact</button>
                            </div>
                          </div>
                        </div>
                      {/* ))} */}
                    </Carousel>
                  </div>
                </div>
              </section>
            

          </div>

          <div className="users-tutors">
            <form action="">
              <input type="search" name="user-tutor-search" id="user-tutor-search" 
                className="search-box" placeholder="Search for tutors..."></input>
            </form>
          </div>

        </body>
    </div>
  );
}

export default Tutor;