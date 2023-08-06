import React from 'react';

const PostForm = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Add your form submission logic here
    };

    return (
        <form onSubmit={handleSubmit} className="max-w-lg px-8 py-6 mx-auto bg-white rounded shadow-md">
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
                    <label htmlFor="startDate" className="block mb-2 font-bold text-gray-700">
                        Start Date:
                    </label>
                    <input
                        type="date"
                        id="startDate"
                        name="startDate"
                        required
                        className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
                    />
                </div>
                <div>
                    <label htmlFor="endDate" className="block mb-2 font-bold text-gray-700">
                        End Date:
                    </label>
                    <input
                        type="date"
                        id="endDate"
                        name="endDate"
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
                    htmlFor="image"
                    type="file"
                    id="image"
                    name="image"
                    accept="image/*"
                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
                    multiple // Add the 'multiple' attribute to enable multiple file selection
                />
            </div>
            <div className="flex items-end justify-end">
                <button type="submit" className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline">
                    Create Post
                </button>
            </div>
        </form>
    );
};

export default PostForm;
