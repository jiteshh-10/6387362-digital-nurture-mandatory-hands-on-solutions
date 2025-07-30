import React, { useState } from 'react';
import './App.css';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
  const [showBooks, setShowBooks] = useState(true);
  const [showBlogs, setShowBlogs] = useState(true);
  const [showCourses, setShowCourses] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const toggleLogin = () => setIsLoggedIn(prev => !prev);

  let page;
  if (isLoggedIn) {
    page = (
      <>
        {showBooks && <BookDetails />}
        {showBlogs ? <BlogDetails /> : null}
        {showCourses && <CourseDetails />}
      </>
    );
  } else {
    page = <p className="notice">Please log in to view content.</p>;
  }

  return (
    <div className="container">
      <h1>📚 Blogger App Dashboard</h1>
      <button onClick={toggleLogin}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
      {page}
    </div>
  );
}

export default App;
