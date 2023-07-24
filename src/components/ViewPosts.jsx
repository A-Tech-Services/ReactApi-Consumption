import "./ViewPostsStyle.css";

import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

const ViewPosts = () => {
    const [posts, setPosts] = useState([]);

    // fetching data on load.
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
        .then(response => response.json())
        .then(data => {
        console.log(data);
        setPosts(data);
        }).catch(err => console.log(err.message));
    }, []);

  return (
    <div>
      <div className='card-heading'>
        <h1 className='card-heading'>Data Consumed From A Dummy Server.</h1>
        <p>Click <Link to="/create">HERE</Link> to create a post.</p>
      </div>
      
      
      <div className='App'>
        {posts.map((post) => {
          return(
            <div className='post-card' key={post.id}>
              <h1 className='post-title'>{post.title}</h1>
              <p className='post-body'>{post.body}</p>

              {/* post buttons */}
              <div className="buttons">
               <div className="btn">Update</div>
               <div className="btn">Delete</div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default ViewPosts