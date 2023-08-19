import React, { useEffect, useState } from 'react';
import { Avatar, Typography, Button } from "@material-ui/core";
import { useAuth } from '@/contexts/auth';
import EditForm from '@/components/EditForm';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faEye, faTrash } from '@fortawesome/free-solid-svg-icons';

const PostUser = () => {
  const { tokens, login, user } = useAuth();
  const [posts, setPosts] = useState([]);
  const router = useRouter();
  const [editPostId, setEditPostId] = useState(null);
  const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/`;

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
    <div className="py-24" style={{ paddingTop: '0rem', paddingBottom: '0rem' }}>
      {user ? (
        <section id="timeline">
          <div className="demo-card-wrapper">
            {posts.map((post) => (
              <div
                key={post.id}
                className="flex items-start p-4 mb-4 space-x-4 border-b"
              >
                {/* <img
                  alt="user"
                  src={`${post.images[0].image}`}
                  style={{ width: '300px', height: '300px', objectFit: 'cover' }}
                /> */}
                <div className="flex-grow ">
                  <Typography
                    variant="h4"
                    color="textPrimary"
                    style={{ fontSize: '1.5rem', fontWeight: '800', margin: 'revert' }}
                  >
                    {post.title}
                  </Typography>
                  <Typography
                    color="black"
                    className="text-black-600"

                  >
                    {post.description}
                  </Typography>
                </div>
                <div className="flex flex-col items-center mt-2 space-y-2 pt-inherit">
                  <Button
                    onClick={() => handleEditPost(post)}
                    color="primary" // Change color to "primary" (blue color)
                    size="small"
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                    }}
                  >
                    <FontAwesomeIcon icon={faEdit} style={{ fontSize: '1.5rem', color: 'navy' }} />
                  </Button>
                  <Button
                    onClick={() => handleViewDetails(post.id)}
                    color="default"
                    size="small"
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                    }}
                  >
                    <FontAwesomeIcon icon={faEye} style={{ fontSize: '1.5rem' }} />
                  </Button>
                  <Button
                    onClick={() => handleDeletePost(post.id)}
                    color="secondary"
                    size="small"
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      color: 'red',
                    }}
                  >
                    <FontAwesomeIcon icon={faTrash} style={{ fontSize: '1.5rem', color: 'darkred' }} />
                  </Button>
                </div>


              </div>
            ))}
          </div>
        </section>
      ) : (
        <LoginForm onLogin={login} />
      )}

      {showEditForm && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        >
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