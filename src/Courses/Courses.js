import './courses.css';
import { Link } from "react-router-dom";
import Carousel from '@itseasy21/react-elastic-carousel';
import React, { useEffect, useState } from "react";
import { MultiSelect } from "react-multi-select-component";

// functionality for the filter dropdown options
function showFilterDropdown() {
  var displayAttr = document.getElementById("course-match-filter").style.display;

  // when the filter button is pushed, it shows the options and moves the course cards down
  //  if the options aren't already showing. Closes options and moves course cards back up
  //  if the options are showing
  if (displayAttr === "flex") {
    document.getElementById("course-match-filter").style.display = "none";
    document.getElementById("course-match-card").style.marginTop = "10px";
  } else {
    document.getElementById("course-match-filter").style.display = "flex";
    document.getElementById("course-match-card").style.marginTop = "90px";
  }
}


function Course() {
  //carousel: amount of course profile to show at once
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 },
  ];


  const [courses, setCourses] = useState([]);


  const getCourses = async () => {
    const response = await fetch("https://onlinetutoring.thetechnician94.com/API/api.php/records/Classes");
    const jsonData = await response.json();
    setCourses(jsonData["records"]);
  }

  useEffect(() => {
    getCourses();
  }, [])

  return (
    <div id="course-container" className="course-container">
      <head>
        <title>Course-Page</title>
      </head>

      <header>
        <nav className="navbar">
          <h2 className='logo'>Tutor<span>Buddy</span></h2>
          <u1>
            <Link to="/"><li className="nav-button">Home</li></Link>
            <Link to="/Tutors"><li className="nav-button">Tutors</li></Link>
            <Link to="/Sessions"><li className="nav-button">Sessions</li></Link>
            <Link to="/Courses"><li className="nav-button">Courses</li></Link>
            <Link to="/ChatRoom"><li className="nav-button">ChatRoom</li></Link>
            <Link to="/Forms"><button type="submit" className='signup-button'>Sign Out</button></Link>
          </u1>
        </nav>
      </header>

      <body className='course-body'>


        <div className="course-match">

          <section>

            <div className='course-card-container'>
              <div className='course-content'>
                <Carousel breakPoints={breakPoints} className='course-carousel'>
                  {courses && courses.length > 0 && courses.map((course, index) => (
                    <div className='course-card'>
                      <div className='course-card-content'>
                        <div className='course-name-university' key={course.ID}>
                          <span className='course-name'>{course.ClassName}</span><br/>
                          <span className='course-university'>{course.University}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </section>
        </div>
        <div className="users-courses">
          <form action="">
            <input type="search" name="user-course-search" id="user-course-search"
              className="search-box" placeholder="Search for courses..."></input>
          </form>
        </div>

      </body>
    </div>
  );
}

export default Course;