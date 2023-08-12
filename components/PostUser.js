import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useAuth } from '@/contexts/auth';
import EditForm from '@/components/EditForm';

const PostUser = () => {
  const { tokens, login, user } = useAuth();
  const [posts, setPosts] = useState([]);
  const router = useRouter();
  const [editPostId, setEditPostId] = useState(null);
  const baseUrl = 'http://127.0.0.1:8000/';

  const [showEditForm, setShowEditForm] = useState(false);
  const [editedPost, setEditedPost] = useState(null);

  const fetchPostsData = async () => {
    try {
      const response = await fetch(baseUrl + `wanderhands/post/user/${user.id}`, {
        headers: {
          Authorization: `Bearer ${tokens?.access}`,
        },
      });
      if (response.ok) {
        const data = await response.json();
        setPosts(data);
        console.log(data);
      } else {
        console.error('Failed to fetch posts data:', response.status);
      }
    } catch (error) {
      console.error('Error fetching posts data:', error);
    }
  };

  useEffect(() => {
    fetchPostsData();
  }, []); // Fetch posts data only once on component mount

  const handleDeletePost = async (postId) => {
    try {
      const response = await fetch(baseUrl + `wanderhands/post/user/${postId}/`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${tokens?.access}`,
        },
      });

      if (response.ok) {
        // Update state to remove the deleted post
        setPosts(prevPosts => prevPosts.filter(post => post.id !== postId));
        console.log(`Deleted post with ID ${postId}`);
      } else {
        console.error('Failed to delete post:', response.status);
      }
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };
  const handleEditPost = (post) => {
    setShowEditForm(true);
    setEditedPost(post);
  };

  const handleEditFormCancel = () => {
    setShowEditForm(false);
    setEditedPost(null);
  };

  const handleEditFormSave = async (updatedPost) => {
    try {
      const updatedPosts = posts.map((post) =>
        post.id === updatedPost.id ? updatedPost : post
      );
      setPosts(updatedPosts);

      // Close the edit form
      setShowEditForm(false);
      setEditedPost(null);
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  return (
    <div>
      {user ? (
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div key={post.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="postImgBox">
                  <img
                    className="postImg"
                    src={`http://127.0.0.1:8000${post.images[0].image}`}
                    width="100%"
                    alt=""
                  />
                </div>
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
                    onClick={() => handleEditPost(post)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md"
                  >
                    Edit
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <LoginForm onLogin={login} />
      )}

      {showEditForm && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <EditForm
            post={editedPost}
            onCancel={handleEditFormCancel}
            onSave={handleEditFormSave}
          />
        </div>
      )}
    </div>
  );

};

export default PostUser;
