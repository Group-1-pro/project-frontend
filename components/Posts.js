import React, { useEffect, useState } from 'react';


const Posts = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedPost, setSelectedPost] = useState(null);

    useEffect(() => {
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
        fetchData();
    }, []);

    if (loading) {
        return <div>Loading posts...</div>;
    }

    if (!data || !Array.isArray(data)) {
        return <div>No posts available</div>;
    }

    const groupedData = [];
    for (let i = 0; i < data.length; i += 4) {
        groupedData.push(data.slice(i, i + 4));
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


    return (

        <div className='postMainDiv'>
            {groupedData.map((group, index) => (


                <div key={index} className="postDiv">
                    {group.map((post) => (


                        <div key={post.id} className="postCard">
                            <div className="postImgBox">
                                <img className="postImg" src={`http://127.0.0.1:8000${post.images[0].image}`} width="100%" alt="" />
                            </div>
                            <div className="postInfo">
                                <h6 className='postHTitle'>{post.title}</h6>
                                <h6 className='postHLocation'>{post.location}</h6>
                                <div className="postIcon">
                                    <div className="iconA"></div>
                                    <div className="iconB" onClick={() => handleContactPost(post.id)}></div>
                                    <div className="iconC" onClick={(event) => handleShare(event, `http://127.0.0.1:8000/post/${post.id}`)}></div>
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
                        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
                            <div className="bg-white rounded-lg shadow-lg p-6 max-w-md backdrop-filter backdrop-blur-lg">
                                <h2 className="text-xl font-semibold mb-2">
                                    Contact Information for "{selectedPost.title}"
                                </h2>
                                <p className="text-gray-700">Email: {selectedPost.email}</p>
                                <p className="text-gray-700">Phone: {selectedPost.phone}</p>
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
            ))}
        </div>
    );
};

export default Posts;
