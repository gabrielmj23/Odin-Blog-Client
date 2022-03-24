import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ListGroup(props) {
  // Data is fetching
  if (props.data.length < 1) {
    return <p className='text-primary'>Loading...</p>
  }

  // No posts are found
  if (props.status === 404) {
    return (
      <div className='list-group-item'>
        <p className='fw-bold text-danger'>{ props.data.message }</p>
      </div>
    );
  } else {
    // Return list of posts
    return (
      <dl className='list-group mt-5 text-start'>
        {
          props.data.posts.map((post) => (
            <div className='list-group-item' key={post._id}>
              <dt>
                <Link to={`/posts/${post._id}`}>
                  <h5 className='fw-bold'>{post.title}</h5>
                </Link>
              </dt>
              <dd>{post.description} - by <strong>{post.author}</strong></dd>
            </div>
          ))
        }
      </dl>
    );
  }
}

function PostsList() {
  const [status, setStatus] = useState('');
  const [data, setData] = useState('');

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

        // Update component state
        setStatus(response.status);
        setData(data);
      } catch (err) {
        console.log('Error: ', err);
      }
    }

    fetchPosts();
  }, []);

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-2'></div>

       <div className='col-8 text-center'>
          <h3>Welcome to Odin Blog</h3>
          <h5>Check out our posts</h5>
          <ListGroup status={status} data={data} />
        </div>

        <div className='col-2'></div>
      </div>
    </div>
  )
}

export default PostsList;