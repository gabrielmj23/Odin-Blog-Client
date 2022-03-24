import { useEffect, useState } from 'react';

function ListGroup() {
  const [data, setData] = useState('');
  const [status, setStatus] = useState('');

  useEffect(() => {
    // Fetch posts from API
    const url = 'https://gabrielm-odin-blog-api.herokuapp.com/api/posts';

    const fetchPosts = async () => {
      try {
        const response = await fetch(url, {
          method: 'GET',
          mode: 'cors'
        });
        const data = await response.json();
        console.log(data);
        setData(data);
        setStatus(response.status);
      } catch (err) {
        console.log('Error: ', err);
      }
    }

    fetchPosts();
  }, [])

  // No posts are found
  if (status === 404) {
    return (
      <div className='list-group-item'>
        <p className='fw-bold text-danger'>{ data.message }</p>
      </div>
    );
  } else {
    // Return list of posts
    return (
      <dl className='list-group mt-5 text-start'>
        {
          data.posts.map((post) => (
            <div className='list-group-item text-start' key={post._id}>
              <dt><h5 className='fw-bold'>{post.title}</h5></dt>
              <dd>{post.description} - by <strong>{post.author}</strong></dd>
            </div>
          ))
        }
      </dl>
    );
  }
}

function PostsList() {
  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-2'></div>

       <div className='col-8 text-center'>
          <h3>Welcome to Odin Blog</h3>
          <h5>Check out our posts</h5>
          <ListGroup />
        </div>

        <div className='col-2'></div>
      </div>
    </div>
  )
}

export default PostsList;