import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PostForm from './PostForm';
import { useAuth } from '@/contexts/auth';


const PostUser = () => {

  const auth = useAuth();
  const [posts, setPosts] = useState([]);
  const router = useRouter();
  const [editPostId, setEditPostId] = useState(null);
  const baseUrl = 'http://127.0.0.1:8000/';

  const fetchPostsData = async () => {
    try {
      const response = await fetch(baseUrl + 'wanderhands/post', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
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
      const response = await fetch(baseUrl + `wanderhands/post/${id}`, {
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
    <div className="flex flex-wrap">
      {posts.map((post) => (
        <div key={post.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
          <div className="bg-white rounded-lg shadow-md p-6">
            <img
              src={post.image}
              alt={`Post ${post.id}`}
              className="w-full h-32 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-lg font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600">{post.description}</p>

            <div className="mt-4 flex justify-between">
              <button
                onClick={() => handleDeletePost(post.id)}
                className="px-4 py-2 bg-red-500 text-white rounded-md"
              >
                Delete
              </button>
              <button
                onClick={() => handleEditPost(post.id)}
                className="px-4 py-2 bg-blue-500 text-white rounded-md"
              >
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
  );
};


export default PostUser;
