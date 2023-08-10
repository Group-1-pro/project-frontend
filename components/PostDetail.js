const PostDetail = (props) => {
  return (
    <div className="postDetailDiv">
        <div className="postDetailImageDiv">
            <img className="postDetailImage" src={`http://
            ${props.post.image}`} alt="post image" />
        </div>
        <div className="postDetailTitleDiv">
            <h1 className="postDetailTitle">{props.post.title}</h1>
        </div>
        <div className="postDetailContentDiv">
            <p className="postDetailContent">{props.post.description}</p>
        </div>
        <div className="postDetailDateDiv">
            <p className="postDetailDate">{props.post.start_data}</p>
        </div>
        <div className="postDetailLocationDiv">
            <p className="postDetailLocation">{props.post.location}</p>
        </div>
        <div className="postDetailUserDiv">
            <p className="postDetailUser">{props.post.author}</p>
        </div>
        <div className="postDetailButtonDiv">
            <button className="postDetailButton">Edit</button>
            <button className="postDetailButton">Delete</button>
        </div>
    </div>
            
  )
}
export default PostDetail