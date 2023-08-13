import React, { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/auth';
import EditForm from '@/components/EditForm';
import {
  Typography,
  Avatar,
  Button,
} from "@material-tailwind/react";

const PostUser = () => {
  const { tokens, login, user } = useAuth();
  const [posts, setPosts] = useState([]);
  const [showEditForm, setShowEditForm] = useState(false);
  const [editedPost, setEditedPost] = useState(null);
  const baseUrl = 'http://127.0.0.1:8000/';

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
    // ... your existing delete post logic
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
    // ... your existing edit form save logic
  };

  return (
    <div>
      {user ? (
               <section id="timeline">
               <div className="demo-card-wrapper">
                 {posts.map((post, index) => (
                   <div key={post.id} className="mb-4">
                     <div className="border-b pb-4">
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
                     </div>
                     <div className="mt-2">
                       <hr className="border-gray-300" />
                       <div className="flex items-center space-x-4 mt-2">
                         <Button
                           onClick={() => handleDeletePost(post.id)}
                           color="red"
                           size="sm"
                           ripple="dark"
                           className="bg-red-500 hover:bg-red-600"
                         >
                           <i className="material-icons text-white">delete</i>
                         </Button>
                         <Button
                           onClick={() => handleEditPost(post)}
                           color="blue"
                           size="sm"
                           ripple="dark"
                           className="bg-blue-500 hover:bg-blue-600"
                         >
                           <i className="material-icons text-white">edit</i>
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
