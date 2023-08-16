import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faAddressCard, faShareNodes } from '@fortawesome/free-solid-svg-icons';
import { useAuth } from '@/contexts/auth';
import LoginForm from './LoginForm';
import SearchBar from './SearchBar';


const Posts = () => {
    const { user, tokens, login } = useAuth();
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedPost, setSelectedPost] = useState(null);
    const [favPost, setFavPost] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:8000/wanderhands/post/');
                const data = await response.json();
                setData(data);
                setLoading(false);
                console.log(data);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };
    useEffect(() => {
        
        fetchData();
    }, [data]);
    useEffect(() => {
        const getFavData = async () => {
            try {
                if (!user) {
                    return;
                }
                const response = await fetch(`http://127.0.0.1:8000/wanderhands/favorites/user/${user.id}/`);
                const favData = await response.json();
                setFavPost(favData);
                setLoading(false);
                console.log(favData);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        };
        getFavData();
    }, [user]);
    if (loading) {
        return <div>Loading posts...</div>;
    }
    if (!data || !Array.isArray(data)) {
        return <div>No posts available</div>;
    }
    const handleContactPost = (postId) => {
        const selected = data.find((post) => post.id === postId);
        setSelectedPost(selected);
    };
    const handleCloseContact = () => {
        setSelectedPost(null);
    };
    const handleShare = (event, url) => {
        event.preventDefault();
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
    const filteredData = data.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
    let post_data = [];
    if (filteredData.length > 0) {
        post_data = filteredData;
    }
    else if ((searchQuery.length > 0) && (filteredData.length === 0)) {
        post_data = [];
    }
    else if (searchQuery === '') {
        post_data = data;
    }
    const groupedData = [];
    for (let i = 0; i < post_data.length; i += 4) {
        groupedData.push(post_data.slice(i, i + 4));
    }
    const handleAddToFavorites = async (postId) => {
        try {
            const response = await fetch(`http://127.0.0.1:8000/wanderhands/favorites/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${tokens?.access}`,
                },
                body: JSON.stringify({
                    post: postId,
                    user: user.id,
                }),
            });
            if (response.ok) {
                setFavPost([...favPost, { id: postId }]);
            } else {
                alert('You have already added this post to favorites!');
            }
        } catch (error) {
            console.error('Error adding post to favorites:', error);
        }
    };
    const isPostInFavorites = (postId) => {
        return favPost?.some((post) => post.id === postId);
    };

    return (

        <div className='postMainDiv'>
            <SearchBar onSearch={setSearchQuery} />
            {groupedData.map((group, index) => (
                <div key={index} className="postDiv" id='posts'>
                    {group.map((post) => (
                        <div key={post.id} className="postCard">
                            <div className="postImgBox">
                                <img className="postImg" src={`http://127.0.0.1:8000${post.images[0].image}`} width="100%" alt="" />
                            </div>
                            <div className="postInfo">
                                <h6 className='postHTitle'>{post.title}</h6>
                                <h6 className='postHLocation'>{post.location}</h6>
                                <div className="postIcon">
                                    {tokens?.access ? (
                                        isPostInFavorites(post.id) ? (
                                            <FontAwesomeIcon
                                                icon={faHeart}
                                                style={{ color: "#FF0000" }}
                                                className="hover:cursor-pointer"
                                            />
                                        ) : (
                                            <FontAwesomeIcon
                                                icon={faHeart}
                                                onClick={() => handleAddToFavorites(post.id)}
                                                className="hover:cursor-pointer"
                                            />
                                        )
                                    ) : (
                                        <FontAwesomeIcon
                                            icon={faHeart}
                                            onClick={() => handleAddToFavorites(post.id)}
                                            className="hover:cursor-pointer"
                                        />
                                    )}
                                    <FontAwesomeIcon
                                        icon={faAddressCard}
                                        onClick={() => handleContactPost(post.id)}
                                        className="hover:cursor-pointer"
                                    />
                                    <FontAwesomeIcon
                                        icon={faShareNodes}
                                        onClick={(event) => handleShare(event, `http://127.0.0.1:8000/post/${post.id}`)}
                                        className="hover:cursor-pointer"
                                    />
                                </div>
                                <p className='postDescription'>
                                    {post.description.split('\n').slice(0, 3).join('\n')}
                                </p>
                                <p className='postParagraph'>Posted by: {post.author_name}</p>
                                <p className='postParagraph'>Starting At: {post.start_date}</p>
                                <p className='postParagraph'>Ending At: {post.end_date}</p>
                                <a className='postBtn' href={`/post/${post.id}`}>View more</a>
                            </div>
                        </div>
                    ))}

                    {selectedPost && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                            <div className="max-w-md p-6 bg-white rounded-lg shadow-lg backdrop-filter backdrop-blur-lg">
                                <h2 className="mb-2 text-xl font-semibold">
                                    Contact Information for "{selectedPost.title}"
                                </h2>
                                <p className="text-gray-700">Email: {selectedPost.email}</p>
                                <p className="text-gray-700">Phone: {selectedPost.phone}</p>
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
            ))}
        </div>
    );
};

export default Posts;