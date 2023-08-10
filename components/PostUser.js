import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PostForm from './PostForm';
import { useAuth } from '@/contexts/auth';


const PostUser = () => {

  const { tokens, login, user } = useAuth()
  const [posts, setPosts] = useState([]);
  const router = useRouter();
  const [editPostId, setEditPostId] = useState(null);
  const baseUrl = 'http://127.0.0.1:8000/';

  const fetchPostsData = async () => {
    try {
      const response = await fetch(baseUrl + 'wanderhands/post', {
        headers: {
          Authorization: `Bearer ${tokens?.access}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setPosts(data);
      } else {
        console.error('Failed to fetch posts data:', response.status);
      }
    } catch (error) {
      console.error('Error fetching posts data:', error);
    }
  };


  useEffect(() => {
    fetchPostsData();
  }, []);


  const handleDeletePost = async (id) => {
    try {
      const response = await fetch(baseUrl + `wanderhands/post/user/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
        },
      });

      if (response.ok) {
        setPosts((prevPosts) => prevPosts.filter((post) => post.id !== id));
        console.log(`Deleted post with ID ${id}`);
      } else {
        console.error('Failed to delete post:', response.status);
      }
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  
  const handleEditPost = (postId) => {
    setEditPostId(postId);
  };


  return (
    <div>
      {user ? (
        <div className="flex flex-wrap">
          {posts.map((post) => (
           <div key={post.id} className="postCard">

           <div className="postImgBox">
               {/* `url(http://127.0.0.1:8000${post.images[0].image})` */}
               <img className="postImg" src={`http://127.0.0.1:8000${post.images[0].image}`} width="100%" alt="" />
           </div>

           <div className="postInfo">

               <h3 className='postHs'>{post.title}</h3>

               <h3 className='postHs'>{post.location}</h3>

               <div className="postIcon">
                   <div className="iconA"></div>
                   <div className="iconB"></div>
                   <div className="iconC"></div>
               </div>

               <p className='postParagraph'>{post.description}</p>
               <p className='postParagraph'>Posted by: {post.author_name}</p>
               <p className='postParagraph'>Starting At: {post.start_date}</p>
               <p className='postParagraph'>Ending At: {post.end_date}</p>

               <a className='postBtn' href={`/post/${post.id}`}>View more</a>

                <div className="mt-4 flex justify-between">
                  <button
                    onClick={() => handleDeletePost(post.id)}
                    className="px-4 py-2 bg-red-500 text-white rounded-md">
                    Delete
                  </button>
                  <button
                    onClick={() => handleEditPost(post.id)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md">
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
          {editPostId !== null && (
            <div className="fixed top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50 flex items-center justify-center">
              <PostForm
                post={posts.find((post) => post.id === editPostId)}
                onClose={() => setEditPostId(null)}
              />
            </div>
          )}
        </div>
      ) : (<LoginForm onLogin={login} />)}
    </div>
  );

};


export default PostUser;
