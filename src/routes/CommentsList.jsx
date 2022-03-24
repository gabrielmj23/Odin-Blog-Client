import CommentInput from "./CommentInput";

function CommentsList(props) {
  return (
    <div className='bg-light rounded p-3'>
      <h5 className='fw-bold'>Comments</h5>
      <hr></hr>
      <p><strong>Add a comment</strong></p>
      <CommentInput />
      <hr></hr>
      <dl className='list-group'>
        {
          props.comments.length ?
            // Show comments from post
            props.comments.map((comment) => (
              <div className='list-group-item' key={comment._id}>
                <dt><h6 className='fw-bold'>{comment.author}</h6></dt>
                <dd>
                  <p>{comment.content}</p>
                  <p className='text-muted'>Posted on {
                    new Date(comment.timestamp).toLocaleDateString('en-us', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })
                  }</p>
                </dd>
              </div>
          )) : (
            <p>There are no comments.</p>
          )
        }
      </dl>
    </div>
  );
}

export default CommentsList;