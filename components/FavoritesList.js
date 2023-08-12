import { useEffect, useState } from 'react';
import { useAuth } from '../contexts/auth';
import LoginForm from '@/components/LoginForm';

export default function FavoritesList() {
    const { tokens, login, user } = useAuth();
    const [fav_posts, favSetPosts] = useState([]);
    const baseUrl = 'http://127.0.0.1:8000/';

    const fetchFavPostsData = async () => {
        try {
            const response = await fetch(baseUrl + `wanderhands/favorites/user/${user.id}`, {
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

    const handleShare = (url) => {
        if (navigator.share) {
            // If the navigator.share() API is supported
            navigator.share({
                url: url,
            }).catch((error) => {
                console.error('Error sharing:', error);
            });
        } else {
            // Fallback: Display the URL for manual copying
            alert('Copy the following URL:\n' + url);
        }
    };

    const handleDeletePost = async (postId) => {
        try {
            const response = await fetch(baseUrl + `wanderhands/favorites/${postId}/`, {
                method: 'DELETE',
                headers: {
                    Authorization: `Bearer ${tokens?.access}`,
                },
            });

            if (response.ok) {
                // Remove the deleted post from the state
                favSetPosts(fav_posts.filter(post => post.post.id !== postId));
            } else {
                console.error('Failed to delete post:', response.status);
            }
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };


    console.log(user)
    return (
        <div>
            {user ? (
                <div className="flex flex-wrap">
                    {fav_posts.map((post) => (

                        <div key={post.id} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
                            <div className="bg-white rounded-lg shadow-md p-6">
                                <img className="postImg" src={`http://127.0.0.1:8000${post.post.images[0].image}`} width="100%" alt="" />
                                <div className="postInfo">

                                    <h3 className='postHs'>{post.post.title}</h3>

                                    <h3 className='postHs'>{post.post.location}</h3>

                                    <div className="postIcon" >
                                        <div className="iconA" onClick={() => handleDeletePost(post.post.id)}>
                                        </div>
                                        <div className="iconB" onClick={() => handleContactPost(post.post.id)}></div>
                                        <div className="iconC" onClick={() => handleShare(`http://127.0.0.1:8000/post/${post.post.id}`)}></div>
                                    </div>


                                    <p className='postParagraph'>{post.post.description}</p>
                                    <p className='postParagraph'>Posted by: {post.post.author_name}</p>
                                    <p className='postParagraph'>Starting At: {post.post.start_date}</p>
                                    <p className='postParagraph'>Ending At: {post.post.end_date}</p>

                                    <a className='postBtn' href={`/post/${post.post.id}`}>View more</a>

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