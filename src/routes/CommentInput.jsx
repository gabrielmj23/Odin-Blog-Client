import { useState } from 'react';
import { useParams } from 'react-router-dom';

function CommentInput() {
  const params = useParams();

  // Add states
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [errors, setErorrs] = useState([]);

  // Function to POST new comment to API
  const addComment = async () => {
    try {
      const url = `https://gabrielm-odin-blog-api.herokuapp.com/api/posts/${params.postId}/comments`;
      const body = {
        author: author,
        content: content
      }

      // Fetch API
      const response = await fetch(url, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
      });

      const data = await response.json();

      // Clear state if everything went correctly
      if (response.status === 200) {
        setAuthor('');
        setContent('');
        setErorrs([]);
        window.location.reload(false);
      }
      else {
        // Add errors to state
        setErorrs(data.errors);
      }
    } catch (err) {
      console.log('Error: ', err);
    }
  }

  // Submit handler
  const handleSubmit = (e) => {
    addComment();
    e.preventDefault();
  }

  return (
    <form className='form-control' onSubmit={e => {handleSubmit(e)}}>
      <div className='form-group mb-3'>
        <label htmlFor='author'>Name: </label><br/>
        <input 
          id='author' 
          type='text' 
          placeholder='Your name' 
          name='author'
          onChange={e => setAuthor(e.target.value)}
          value={author}
        />
      </div>
      <div className='form-group mb-3'>
        <label htmlFor='content'>Comment: </label><br/>
        <textarea 
          id='content' 
          type='text' 
          name='content'
          onChange={e => setContent(e.target.value)}
          value={content}
        ></textarea>
      </div>
      <button className='btn btn-primary' type='submit'>Submit</button>
      <ul>
        {errors.length > 0 && 
          errors.map(error => (
            <li className='text-danger'>{error.msg}</li>
          ))
        }
      </ul>
    </form>
  )
}

export default CommentInput;