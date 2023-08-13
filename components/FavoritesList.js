import React, { useEffect, useState, useRef } from 'react';
import { useAuth } from '../contexts/auth';
import LoginForm from '@/components/LoginForm';

export default function FavoritesList() {
    const { tokens, login, user } = useAuth();
    const [fav_posts, favSetPosts] = useState([]);
    const cardContainerRef = useRef(null);
    const baseUrl = 'http://127.0.0.1:8000/';

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
                                <div
                                    className="postImg"
                                    style={{
                                        width: '100%',
                                        height: '200px',
                                        overflow: 'hidden',
                                        borderRadius: '10px 10px 0 0',
                                    }}
                                >
                                    <img
                                        src={`http://127.0.0.1:8000${post.post.images[0].image}`}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                        alt=""
                                    />
                                </div>
                                <div className="postInfo" style={{ padding: '10px' }}>
                                    <h3
                                        className="postHs"
                                        style={{
                                            maxHeight: '3.6em',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                        }}
                                    >
                                        {post.post.title}
                                    </h3>
                                    <h3 className="postHs">{post.post.location}</h3>
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
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                        }}
                                    >
                                        <div className=".postIcon">
                                            <div
                                                className="iconA"
                                                onClick={() => handleDeletePost(post.id)}
                                            >
                                                <img
                                                    src="https://cdn-icons-png.flaticon.com/512/151/151910.png"
                                                    alt="Delete"
                                                    style={{ width: '20px', height: '20px' }}
                                                />
                                            </div>
                                            <div
                                                className="iconB"
                                                onClick={() => handleContactPost(post.post.id)}
                                            >
                                                <img
                                                    src="https://cdn-icons-png.flaticon.com/512/711/711155.png"
                                                    alt="Contact"
                                                    style={{ width: '20px', height: '20px' }}
                                                />
                                            </div>
                                            <div
                                                className="iconC"
                                                onClick={() =>
                                                    handleShare(
                                                        `http://127.0.0.1:8000/post/${post.post.id}`
                                                    )
                                                }
                                            >
                                                <img
                                                    src="https://cdn-icons-png.flaticon.com/512/929/929610.png"
                                                    alt="Share"
                                                    style={{ width: '20px', height: '20px' }}
                                                />
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {selectedPost && (
                        <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50 bg-black">
                            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md">
                                <h2 className="text-xl font-semibold mb-2">
                                    Contact Information for "{selectedPost.post.title}"
                                </h2>
                                <p className="text-gray-700">Email: {selectedPost.post.email}</p>
                                <p className="text-gray-700">Phone: {selectedPost.post.phone}</p>
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
