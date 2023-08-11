import React from 'react';
import { useAuth } from '@/contexts/auth';
import { useState } from "react";
import axios from 'axios';

export default function PostForm({ setShowForm }) {
    const { user, tokens } = useAuth();
    const [images, setImages] = useState([]);
    const [uploading, setUploading] = useState(false);

    const handleImageChange = (e) => {
        // // Get the selected files from the input element
        // const files = event.target.files;

        // // Convert the FileList to an array
        // const filesArray = Array.from(files);

        // // Update the state with the selected files
        // setUploadedImages(filesArray);
        // console.log(filesArray)


        if (e.target.files) {
            //convert FileList to File[]
            const _files = Array.from(e.target.files);
            setImages(_files);
        };
    };
    const handleClose = () => {
        setShowForm(false);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        images.forEach((image, i) => {
            formData.append("uploaded_images", image);
        });
        formData.append("title", event.target.title.value);
        formData.append("location", event.target.location.value);
        formData.append("start_date", event.target.start_date.value);
        formData.append("end_date", event.target.end_date.value);
        formData.append("description", event.target.description.value);
        formData.append("phone", event.target.phone.value);
        formData.append("email", event.target.email.value);
        formData.append("author_id", user.id);
        formData.append("author_name", user.username);



        setUploading(true);
        const config = {
            headers: {
                Authorization: `Bearer ${tokens.access}`,
            },
        };
        const data = await axios.post("http://127.0.0.1:8000/wanderhands/post/", formData, config)
        console.log(data);
        setUploading(false);

        setShowForm(false);

    };
    console.log("User:", user);






    return (
        <form onSubmit={handleSubmit}
            className="max-w-lg px-8 py-6 mx-auto bg-white rounded shadow-md" encType="multipart/form-data">
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                    <label htmlFor="title" className="block mb-2 font-bold text-gray-700">
                        Title:
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        required
                        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div>
                    <label htmlFor="location" className="block mb-2 font-bold text-gray-700">
                        Location:
                    </label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        required
                        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
                    />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                    <label htmlFor="email" className="block mb-2 font-bold text-gray-700">
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"

                        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div>
                    <label htmlFor="phone" className="block mb-2 font-bold text-gray-700">
                        Phone:
                    </label>
                    <input
                        type="tel"
                        id="phone"
                        name="phone"

                        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
                    />
                </div>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                    <label htmlFor="start_date" className="block mb-2 font-bold text-gray-700">
                        Start Date:
                    </label>
                    <input
                        type="date"
                        id="start_date"
                        name="start_date"
                        required
                        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div>
                    <label htmlFor="end_date" className="block mb-2 font-bold text-gray-700">
                        End Date:
                    </label>
                    <input
                        type="date"
                        id="end_date"
                        name="end_date"
                        required
                        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
                    />
                </div>
            </div>
            <div className="mb-4">
                <label htmlFor="description" className="block mb-2 font-bold text-gray-700">
                    Description:
                </label>
                <textarea
                    id="description"
                    name="description"
                    required
                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
                ></textarea>
            </div>
            <div className="mb-4">
                <label className="block mb-2 font-bold text-gray-700">
                    Images:
                </label>
                <input

                    htmlFor="images"
                    type="file"
                    id="images"
                    name="image"
                    accept="image/*"
                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
                    multiple
                    onChange={handleImageChange}
                />
            </div>
            <div className="flex items-end justify-end">
                <button type="submit" className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline">
                    Create Post
                </button>
                <button type="button" onClick={handleClose} className="px-4 py-2 font-bold text-gray-700 bg-gray-300 rounded hover:bg-gray-400 focus:outline-none focus:shadow-outline">
                    Close
                </button>

            </div>
        </form>
    );
}