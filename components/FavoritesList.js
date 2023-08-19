import React, { useEffect, useState, useRef } from 'react';
import { useAuth } from '../contexts/auth';
import LoginForm from '@/components/LoginForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faAddressCard, faShare, faLocationDot } from '@fortawesome/free-solid-svg-icons';

export default function FavoritesList() {
    const { tokens, login, user } = useAuth();
    const [fav_posts, favSetPosts] = useState([]);
    const cardContainerRef = useRef(null);
    const baseUrl = `${process.env.NEXT_PUBLIC_API_URL}/`;

    const fetchFavPostsData = async () => {
        try {
            const response = await fetch(baseUrl + `wanderhands/favorites/user/${user.id}`, {
                headers: {
                    Authorization: `Bearer ${tokens?.access}`,
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
        const selected = fav_posts.find((post) => post.id === postId);
        setSelectedPost(selected);
    };

    const handleCloseContact = () => {
        setSelectedPost(null);
    };

    const handleShare = (url) => {
        if (navigator.share) {
            navigator.share({
                url: url,
            }).catch((error) => {
                console.error('Error sharing:', error);
            });
        } else {
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
                favSetPosts(fav_posts.filter((post) => post.id !== postId));
            } else {
                console.error('Failed to delete post:', response.status);
            }
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    const scrollLeft = () => {
        if (cardContainerRef.current) {
            cardContainerRef.current.scrollBy({
                left: -300,
                behavior: 'smooth',
            });
        }
    };

    const scrollRight = () => {
        if (cardContainerRef.current) {
            cardContainerRef.current.scrollBy({
                left: 300,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div>
            {user ? (
                <div>
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginTop: '10px',
                        }}
                    >
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <button
                                onClick={scrollLeft}
                                style={{
                                    padding: '5px 10px',
                                    marginRight: '10px',
                                    fontSize: '30px',
                                }}
                            >
                                &lt;
                            </button>
                            <button
                                onClick={scrollRight}
                                style={{
                                    padding: '5px 10px',
                                    marginLeft: '10px',
                                    fontSize: '30px',
                                }}
                            >
                                &gt;
                            </button>
                        </div>

                    </div>
                    <div
                        ref={cardContainerRef}
                        style={{
                            display: 'flex',
                            overflowX: 'hidden',
                            gap: '10px',
                            padding: '10px 0',
                        }}
                    >
                        {fav_posts.map((post) => (
                            <div
                                key={post.id}
                                className="post-card"
                                style={{
                                    minWidth: '300px',
                                    maxWidth: '300px',
                                    margin: '0',
                                    borderRadius: '10px',
                                    boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.1)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    position: 'relative',
                                }}
                            >
                                <div className="post-img">
                                    <img
                                        src={`http://127.0.0.1:8000${post.post.images[0].image}`}
                                        style={{ width: '100%', height: '200px', objectFit: 'cover' }}
                                        alt=""
                                    />
                                </div>
                                <div className="post-info">
                                    <h3> {post.post.title}</h3>
                                    <div className="post-location">
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <FontAwesomeIcon icon={faLocationDot} style={{ color: "#520000", fontSize: '18px', marginRight: '10px' }} />
                                            <h2 style={{ margin: '0', fontSize: '22px', color: '#5CA0D3' }}>{post.post.location}</h2>
                                        </div>
                                    </div>

                                    <p className="postParagraph">
                                        {post.post.description.length > 150
                                            ? post.post.description.slice(0, 150) + '...'
                                            : post.post.description}
                                    </p>
                                    {post.post.description.length > 150 && (
                                        <a className="postBtn" href={`/post/${post.post.id}`}>
                                            View more
                                        </a>
                                    )}
                                    <div className="post-icons">
                                        <div className="icon-container">
                                            <FontAwesomeIcon
                                                icon={faHeart}
                                                className="text-red-500 hover:cursor-pointer"
                                                style={{ color: "#520000", fontSize: '30px', marginBottom: '10px' }}
                                                onClick={() => handleDeletePost(post.id)}
                                            />
                                        </div>
                                        <div className="icon-container">
                                            <FontAwesomeIcon
                                                icon={faAddressCard}
                                                style={{ color: "#520000", fontSize: '30px', marginBottom: '10px' }}
                                                onClick={() => handleContactPost(post.id)}
                                                className="text-blue-500 hover:cursor-pointer"
                                            />
                                        </div>
                                        <div className="icon-container">
                                            <FontAwesomeIcon
                                                icon={faShare}
                                                style={{ color: "#520000", fontSize: '30px', marginBottom: '10px' }}
                                                onClick={() =>
                                                    handleShare(
                                                        `${process.env.NEXT_PUBLIC_API_URL}/post/${post.id}`
                                                    )
                                                }
                                                className="text-green-500 hover:cursor-pointer"
                                            />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                    {selectedPost && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                            <div className="max-w-md p-6 bg-white rounded-lg shadow-lg">
                                <h2 className="mb-2 text-xl font-semibold">
                                    Contact Information for "{selectedPost.post.title}"
                                </h2>
                                <p className="text-gray-700">Email: {selectedPost.post.email}</p>
                                <p className="text-gray-700">Phone: {selectedPost.post.phone}</p>
                                <button
                                    onClick={handleCloseContact}
                                    className="px-4 py-2 mt-4 text-white bg-gray-600 rounded-md"
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
