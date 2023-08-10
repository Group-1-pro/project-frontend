import { useEffect, useState } from 'react';


const Posts = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

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

    // Group the data into sets of three posts
    const groupedData = [];
    for (let i = 0; i < data.length; i += 3) {
        groupedData.push(data.slice(i, i + 3));
    }


    return (

        <div className='postMainDiv'>

            {groupedData.map((group, index) => (
                <div key={index} className="flex justify-between mb-8">
                    {group.map((post) => (


                        <div key={post.id} className="postCard">

                            <div className="postImgBox">
                                {/* `url(http://127.0.0.1:8000${post.images[0].image})` */}
                                <img className="postImg" src={`http://127.0.0.1:8000${post.images[0].image}`} width="100%" alt="" />
                            </div>

                            <div className="postInfo">

                                <h3 className='postHs'>{post.title}</h3>

                                <h3 className='postHs'>{post.location}</h3>

                                <div className="postIcon">
                                    <div className="iconA"></div>
                                    <div className="iconB"></div>
                                    <div className="iconC"></div>
                                </div>

                                <p className='postParagraph'>{post.description}</p>
                                <p className='postParagraph'>Posted by: {post.author_name}</p>
                                <p className='postParagraph'>Starting At: {post.start_date}</p>
                                <p className='postParagraph'>Ending At: {post.end_date}</p>

                                <a className='postBtn' href={`/post/${post.id}`}>View more</a>

                            </div>

                        </div>

                    ))}
                </div>

            ))}

        </div>
    );
};


export default Posts;
