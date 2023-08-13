import React, { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/auth';
import EditForm from '@/components/EditForm';
import { Typography, Avatar, Button } from "@material-tailwind/react";
import { useRouter } from 'next/router';

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


  const handleViewDetails = (postId) => {
    router.push(`/post/${postId}`);
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
      const response = await fetch(baseUrl + `wanderhands/post/user/${updatedPost.id}/`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${tokens?.access}`,
        },
        body: JSON.stringify(updatedPost),
      });

      if (response.ok) {
        // Update the post in the state with the updated data
        const updatedPosts = posts.map((post) =>
          post.id === updatedPost.id ? updatedPost : post
        );
        setPosts(updatedPosts);

        // Close the edit form
        setShowEditForm(false);
        setEditedPost(null);
      } else {
        console.error('Failed to update post:', response.status);
      }
    } catch (error) {
      console.error('Error updating post:', error);
    }
  };

  return (
    <div>
      {user ? (
        <section id="timeline">
          <div className="demo-card-wrapper">
            {posts.map((post, index) => (
              <div key={post.id} className="mb-4 p-4 border-b">
                <div className="flex items-start space-x-4">
                  <Avatar
                    size="sm"
                    src={`http://127.0.0.1:8000${post.images[0].image}`}
                    alt="user"
                    withBorder
                  />
                  <div>
                    <Typography variant="h5" color="blue-gray">
                      {post.title}
                    </Typography>
                    <Typography color="gray" className="text-gray-600">
                      {post.description}
                    </Typography>
                  </div>
                </div>
                
                <div className="mt-2">
                  <hr className="border-gray-300" />
                  <div className="flex items-center mt-2 space-x-4">
                    {/* Edit Button */}
                    <Button
                      onClick={() => handleEditPost(post)}
                      color="blue"
                      size="sm"
                      ripple="dark"
                      className="bg-blue-500 hover:bg-blue-600"
                    >
                      Edit
                    </Button>
                    {/* Delete Button */}
                    <Button
                      onClick={() => handleDeletePost(post.id)}
                      color="red"
                      size="sm"
                      ripple="dark"
                      className="bg-red-500 hover:bg-red-600"
                    >
                      Delete
                    </Button>
                    <Button
                      onClick={() => handleViewDetails(post.id)}
                      color="green"
                      size="sm"
                      ripple="dark"
                      className="bg-green-500 hover:bg-green-600"
                    >
                      View More
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : (
        <LoginForm onLogin={login} />
      )}

      {showEditForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <EditForm
            post={editedPost}
            onCancel={handleEditFormCancel}
            onSave={handleEditFormSave}
            setShowEditForm={setShowEditForm}
          />
        </div>
      )}
    </div>
  );
};

export default PostUser;