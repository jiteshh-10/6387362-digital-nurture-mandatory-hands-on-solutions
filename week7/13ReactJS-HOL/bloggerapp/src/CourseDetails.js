import React from 'react';

const courses = [
  { id: 'c1', name: "React Fundamentals", duration: "3 Weeks" },
  { id: 'c2', name: "Advanced React Patterns", duration: "4 Weeks" }
];

function CourseDetails() {
  return (
    <div className="card">
      <h2>Course Details</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            🎓 <strong>{course.name}</strong> ({course.duration})
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CourseDetails;
