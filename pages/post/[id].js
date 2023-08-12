import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhoneVolume, faEnvelope, faUser } from '@fortawesome/free-solid-svg-icons';


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
        <>
            <Navbar />
            <div className="">
                <div className="inline-block mr-4 mt-6">
                    <img
                        src={`http://127.0.0.1:8000${data.images[0].image}`}
                        className="h-auto max-w-md ml-6 rounded-lg hover:shadow-xl transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                        alt=""
                    />
                </div>
                <div className="inline-block mr-4 mt-6">
                    <img
                        src={`http://127.0.0.1:8000${data.images[1].image}`}
                        className="h-auto max-w-sm rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                        alt=""
                    />
                </div>
                <div className="inline-block mt-6">
                    <img
                        src={`http://127.0.0.1:8000${data.images[2].image}`}
                        className="h-auto max-w-md rounded-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                        alt=""
                    />
                </div>
            </div>

            <section className="my-8">
                <div className="container mx-auto flex flex-col items-center pb-6 mb-4 md:p-10 md:px-12">
                    <h1 className="text-4xl font-semibold leadi text-center">{data.title}</h1>
                </div>
                <div className="container mx-auto grid grid-cols-1 gap-8 lg:gap-20 md:px-10 md:pb-10 lg:grid-cols-2">
                    <div className="flex flex-col items-center mx-12 lg:mx-0">
                        <div className="relative text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute top-0 left-0 w-8 h-8 dark:text-gray-700">
                                <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                            </svg>
                            <p className="px-6 py-1 text-lg italic">{data.description}</p>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute bottom-0 right-0 w-8 h-8 dark:text-gray-700">
                                <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                            </svg>
                        </div>
                        <span className="w-12 h-1 my-2 rounded-lg dark:bg-violet-400"></span>
                        <p>{data.author_name}</p>
                    </div>
                    <div className="flex flex-wrap">
                        <div className="mb-10 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
                            <h2 className="mb-6 text-3xl font-bold">Contact us</h2>
                            <p className="mb-2 text-neutral-500 dark:text-neutral-300">
                            <FontAwesomeIcon icon={faLocationDot} /> {data.location}
                            </p>
                            <p className="mb-2 text-neutral-500 dark:text-neutral-300">
                            <FontAwesomeIcon icon={faPhoneVolume} /> {data.phone}
                            </p>
                            <p className="mb-2 text-neutral-500 dark:text-neutral-300">
                            <FontAwesomeIcon icon={faEnvelope} />  {data.email}
                            </p>
                            <p class="mb-2 text-neutral-500 dark:text-neutral-300">
                            <FontAwesomeIcon icon={faUser} />  {data.author_name}
                            </p>
                        </div>
                    </div>
                    </div>
            </section>

            <Footer />
        </>
    )

};
export default PostDetail