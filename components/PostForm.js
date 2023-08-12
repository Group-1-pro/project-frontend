import React from 'react';
import { useAuth } from '@/contexts/auth';
import { useState } from "react";
import axios from 'axios';

export default function PostForm({ setShowForm }) {
    const { user, tokens } = useAuth();
    const [images, setImages] = useState([]);
    const [fileNames, setFileNames] = useState([]); // New state for file names
    const [uploading, setUploading] = useState(false);

    const handleImageChange = (e) => {
        if (e.target.files) {
            // Convert FileList to File[]
            const _files = Array.from(e.target.files);
            setImages(_files);

            // Update the file names state
            const _fileNames = _files.map(file => file.name);
            setFileNames(_fileNames);
        }
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
        console.log(formData);



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
    const handleClose = () => {
        setShowForm(false);
    };
    console.log("User:", user);






    return (

        <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center w-1/2 p-8 text-white rounded-lg text-orange-800rder-orange bg-amber-500'>
            <h1 className='flex justify-start w-full font-bold text-orange-900'> Creat a new form </h1>
            <div className='grid w-full grid-cols-1 gap-4 sm:grid-cols-2'>
                <div className='flex flex-col'>
                    <label className='text-sm font-bold text-orange-800 '>Title</label>
                    <input
                        
                        placeholder='Title'
                        type="text"
                        name="title"
                        className='text-orange-800 placeholder-orange-800 rounded-md bg-amber-200'
                       
                        required />
                </div>
                <div className='flex flex-col '>
                    <label className='text-sm font-bold text-orange-800'>Country</label>
                    <input
                        type="text"
                        placeholder='Country'
                        name="location"
                        className='text-orange-800 placeholder-orange-800 rounded-md bg-amber-200'
                        required
                    />
                </div>
            </div>
            <div className='grid w-full grid-cols-1 gap-4 sm:grid-cols-2'>
                <div className='flex flex-col'>
                    <label className='text-sm font-bold text-orange-800'>Email</label>
                    <input
                        type="email"
                        placeholder='Email'
                        name="email"
                        className='text-orange-800 placeholder-orange-800 rounded-md bg-amber-200'

                    />
                </div>
                <div className='flex flex-col '>
                    <label className='text-sm font-bold text-orange-800'>Phone</label>
                    <input
                        className='text-orange-800 placeholder-orange-800 rounded-md bg-amber-200'
                        type="tel"
                        id="phone"
                        name="phone"
                        placeholder='123-456-7890'
                    />
                </div>
            </div>
            <div className='grid w-full grid-cols-1 gap-4 sm:grid-cols-2'>
                <div className='flex flex-col '>
                    <label className='text-sm font-bold text-orange-800'>Start Date</label>
                    <input
                        type="date"
                        id="start_date"
                        name="start_date"
                        required
                        className='text-orange-800 placeholder-orange-800 rounded-md bg-amber-200'
                    />
                </div>
                <div className='flex flex-col '>
                    <label className='text-sm font-bold text-orange-800'>End Date</label>
                    <input
                        type="date"
                        id="end_date"
                        name="end_date"
                        required
                        className='text-orange-800 placeholder-orange-800 rounded-md bg-amber-200'
                        />
                   
                </div>
            </div>
            <div className='flex flex-col w-full gap-4'>
                <label className='text-sm font-bold text-orange-800'>Description</label>
                <textarea
                    name="description"
                    required
                    className='text-orange-800 placeholder-orange-800 rounded-md bg-amber-200'
                    />
                    
            </div>

            <div className="w-full">
                <label className="block text-sm font-bold text-orange-800 ">
                    Image
                </label>
                <div className="flex items-center justify-center w-full h-40 px-6 pt-5 pb-6 mt-1 border-2 border-red-900 border-dashed rounded-md h">
                    <div className="w-full text-center">
                        <svg className="w-20 h-20 mx-auto text-red-300 " stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <div className="flex items-center">
                            <label htmlFor="images" className="relative mx-3 font-medium bg-white rounded-md cursor-pointer text-amber-900 h-7 w-30 hover:text-red-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-black">
                                <span className="font-bold">Upload a file</span>
                                <input
                                    id="images"
                                    type="file"
                                    name="uploaded_images"
                                    accept="image/*"
                                    multiple
                                    onChange={handleImageChange}
                                    className="sr-only"
                                />
                            </label>
                            <div className="px-2 py-1 text-lg text-w">
                                {fileNames.length === 1 ? (
                                    <div>{fileNames[0]}</div>
                                ) : (
                                    <div>{fileNames.length} files selected</div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-end w-full gap-4 m-3'>
                <button className="px-3 py-2 text-white bg-orange-500 rounded-md" > Create Post </button>
                <button className="px-3 py-2 text-white rounded-md bg-slate-500" onClick={handleClose} > Close</button>
            </div>
        </form>



    );
}