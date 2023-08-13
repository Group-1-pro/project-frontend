import React, { useEffect, useState } from 'react';
import { Avatar, Typography, Button } from "@material-ui/core";
import { useAuth } from '@/contexts/auth';
import EditForm from '@/components/EditForm';
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
  }, []);

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
        const updatedPosts = posts.map((post) =>
          post.id === updatedPost.id ? updatedPost : post
        );
        setPosts(updatedPosts);

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
          {posts.map((post) => (
            <div key={post.id} className="mb-4 p-4 border-b">
              <div className="flex items-start space-x-4">
                <Avatar
                  alt="user"
                  src={`http://127.0.0.1:8000${post.images[0].image}`}
                  style={{ width: '200px', height: '200px' }} 
                />
                <div>
                  <Typography variant="h5" color="textPrimary">
                    {post.title}
                  </Typography>
                  <Typography color="textSecondary" className="text-gray-600">
                    {post.description}
                  </Typography>
                </div>
              </div>

              <div className="mt-2">
                <div className="flex items-center justify-center mt-2 space-x-4">
                  <Button
                    onClick={() => handleEditPost(post)}
                    color="primary"
                    size="small"
                    variant="contained"
                  >
                    Edit
                  </Button>
                  <Button
                    onClick={() => handleViewDetails(post.id)}
                    color="success"
                    size="small"
                    variant="contained"
                  >
                    View More
                  </Button>
                  <Button
                    onClick={() => handleDeletePost(post.id)}
                    color="secondary"
                    size="small"
                    variant="contained"
                  >
                    Delete
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
