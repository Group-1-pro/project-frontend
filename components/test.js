import { useEffect, useState } from 'react';
import Link from 'next/link';




const Posts = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wanderhands/post/`);
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

                        <div key={post.id} className="w-full max-w-sm lg:max-w-full lg:flex">

                            <div className="flex-none h-48 overflow-hidden text-center bg-cover rounded-t lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l" style={{ backgroundImage: `url(http://127.0.0.1:8000${post.images[0].image})` }}
                                title="posts">
                            </div>

                            <div className="flex flex-col justify-between p-4 leading-normal bg-white border-b border-l border-r border-gray-400 rounded-b lg:border-l-0 lg:border-t lg:border-gray-400 lg:rounded-b-none lg:rounded-r">

                                <div className="mb-8">
                                    <p className="flex items-center text-sm text-gray-600">
                                        <svg className="w-3 h-3 mr-2 text-gray-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                                        </svg>
                                        Members only
                                    </p>
                                    <div className="mb-2 text-xl font-bold text-gray-900">{post.title}</div>
                                    <p className="text-base text-gray-700">{post.location}</p>
                                    <p className="text-base text-gray-700">{post.description}</p>
                                </div>

                                <div className="flex items-center">
                                    <img className="w-10 h-10 mr-4 rounded-full" src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="Avatar of Jonathan Reinink" />
                                    <div className="text-sm">
                                        <p className="text-gray-600">Starting At: {post.start_date}</p>
                                        <p className="text-gray-600">Ending At: {post.end_date}</p>
                                        <p className="leading-none text-gray-900">Posted by: {post.author_name}</p>
                                        <Link href={`/post/${post.id}`} className="nav-link">View more</Link>
                                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                                            Add to favourits
                                        </button>
                                    </div>
                                </div>

                            </div>

                        </div>
                    ))}
                </div>
            ))}

            {/* {groupedData.map((group, index) => (
                <div key={index} className="flex justify-between mb-8">
                    {group.map((post) => (


                        <div key={post.id} className="postCard">

                            <div className="postCircle"></div>

                            <div className="postContent">

                                <h2 className='postTitle'>{post.title}</h2>
                                <h3 className='postLocation'>{post.location}</h3>
                                <p className='postParagraph'>{post.description}</p>
                                <p className='postParagraph'>Posted by: {post.author}</p>
                                <p className='postParagraph'>Starting At: {post.start_date}</p>
                                <p className='postParagraph'>Ending At: {post.end_date}</p>
                                <a className='postBtn' href="">View more</a>
                                

                            </div>

                            <img className='postImg' title="posts" src="https://www.pepsi.com/en-us/uploads/images/can-pzs.png" alt="" />

                        </div>

                    ))}
                </div>

            ))} */}


        </div>
    );
};


export default Posts;