import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/auth';

export default function FavoritesList(){
    const auth = useAuth();
    const [fav_posts, favSetPosts] = useState([]);
    const baseUrl = 'http://127.0.0.1:8000/';
  
    const fetchFavPostsData = async () => {
        try {
          const response = await fetch(baseUrl + 'wanderhands/favorites', {
            headers: {
              Authorization: `Bearer ${auth.tokens.access}`, // Use the access token from the context
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


    return (
            <div className="flex flex-wrap">
              {fav_posts.map((post) => (
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
                        onClick={() => handleContactPost(post.id)}
                        className="px-4 py-2 bg-blue-500 text-white rounded-md"
                      >
                        Contact
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
    )
    }