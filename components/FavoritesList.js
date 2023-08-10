import { useEffect, useState } from 'react';
import { useAuth } from '../contexts/auth';
import LoginForm from '../components/LoginForm';

export default function FavoritesList() {
  const { tokens, login, user } = useAuth();
  const [fav_posts, favSetPosts] = useState([]);
  const baseUrl = 'http://127.0.0.1:8000/';

  const fetchFavPostsData = async () => {
    try {
      const response = await fetch(baseUrl + `wanderhands/favorites`, {
        headers: {
          Authorization: `Bearer ${tokens?.access}`, // Use the access token from the context
        },
      });
      if (response.ok) {
        const data = await response.json();
        favSetPosts(data);
      } else {
        console.error('Failed to fetch favorite posts data:', response.status);
      }
    } catch (error) {
      console.error('Error fetching favorite posts data:', error);
    }
  };

  useEffect(() => {
    fetchFavPostsData();
  }, []);

  const [selectedPost, setSelectedPost] = useState(null);

  const handleContactPost = (postId) => {
    const selected = fav_posts.find((post) => post.post.id === postId);
    setSelectedPost(selected);
  };

  const handleCloseContact = () => {
    setSelectedPost(null);
  };

  return (
    <div>
      {user ? (
        <div className="flex flex-wrap">
          {fav_posts.map((post) => (
            <div key={post.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
              <div className="bg-white rounded-lg shadow-md p-6">
                <img
                  src={
                    post.post.images.length > 0
                      ? post.post.images[0].image
                      : '/default-placeholder.png'
                  }
                  alt={`Post ${post.id}`}
                  className="w-full h-32 object-cover mb-4 rounded-lg"
                />
                <h2 className="text-lg font-semibold mb-2">{post.post.title}</h2>
                <p className="text-gray-600">{post.post.description}</p>

                <div className="mt-4 flex justify-between">
                  <button
                    onClick={() => handleContactPost(post.post.id)}
                    className="px-4 py-2 bg-blue-500 text-white rounded-md"
                  >
                    Contact
                  </button>
                </div>
              </div>
            </div>
          ))}
          {selectedPost && (
            <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-black">
              <div className="bg-white rounded-lg shadow-lg p-6 max-w-md">
                <h2 className="text-xl font-semibold mb-2">
                  Contact Information for "{selectedPost.post.title}"
                </h2>
                <p className="text-gray-700">Email: {selectedPost.post.email}</p>
                <p className="text-gray-700">Phone: {selectedPost.post.phone}</p>
                {/* Add more contact information here if needed */}
                <button
                  onClick={handleCloseContact}
                  className="mt-4 px-4 py-2 bg-gray-600 text-white rounded-md"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <LoginForm onLogin={login} />
      )}
    </div>
  );
}
