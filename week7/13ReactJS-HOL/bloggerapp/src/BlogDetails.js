import React from 'react';

const blogs = [
  { id: 'b1', title: "React vs Vue", date: "2025-07-01" },
  { id: 'b2', title: "JSX Tips", date: "2025-07-15" }
];

function BlogDetails() {
  return (
    <div className="card">
      <h2>Blog Details</h2>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            📝 <em>{blog.title}</em> — {blog.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BlogDetails;
