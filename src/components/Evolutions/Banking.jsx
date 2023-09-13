import React, { useState, useEffect } from 'react';

function Banking() {
  const [blogs, setBlogs] = useState([]);
  const [authorName, setAuthorName] = useState('kuwarp'); // State to store the author name
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch blogs by author name when the component mounts
    async function fetchBlogsByAuthor() {
      try {
        const response = await fetch(`https://blog.kubekode.org?author=${authorName}`); // Replace with your actual API endpoint
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setBlogs(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    }

    fetchBlogsByAuthor();
  }, [authorName]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
    </>
    // <div>
    //   <h2>Blogs by Author: {authorName}</h2>
    //   <ul>
    //     {blogs.map((blog) => (
    //       <li key={blog.title}>{blog.title}</li>
    //     ))}
    //   </ul>
    // </div>
  );
}

export default Banking;
