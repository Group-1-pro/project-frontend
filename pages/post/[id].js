import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const PostDetail = () => {
    const router = useRouter();
    const { id } = router.query;

    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (id) {
            const fetchData = async () => {
                try {
                    const response = await fetch(`http://127.0.0.1:8000/wanderhands/post/${id}`);
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
        }
    }, [id]);

    if (loading) {
        return <div>Loading posts...</div>;
    }

    if (!data) {
        return <div>No posts available</div>;
    }

    return (
        <div className="postDetailDiv">
            <div className="postDetailImageDiv">
                <img className="postDetailImage" src={`http://127.0.0.1:8000${data.images[0].image}`} />
            </div>
            <div className="postDetailImageDiv">
                <img className="postDetailImage" src={`http://127.0.0.1:8000${data.images[1].image}`} />
            </div>
            <div className="postDetailImageDiv">
                <img className="postDetailImage" src={`http://127.0.0.1:8000${data.images[2].image}`} />
            </div>
            <div className="postDetailTitleDiv">
                <h1 className="postDetailTitle">{data.title}</h1>
            </div>
            <div className="postDetailContentDiv">
                <p className="postDetailContent">{data.description}</p>
            </div>
            <div className="postDetailDateDiv">
                <p className="postDetailDate">{data.start_data}</p>
            </div>
            <div className="postDetailLocationDiv">
                <p className="postDetailLocation">{data.location}</p>
            </div>
            <div className="postDetailUserDiv">
                <p className="postDetailUser">{data.author}</p>
            </div>
            <div className="postDetailButtonDiv">
                <button className="postDetailButton">Edit</button>
                <button className="postDetailButton">Delete</button>
            </div>
        </div>
           
    )
  }
  export default PostDetail