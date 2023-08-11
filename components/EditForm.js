import React, { useState } from 'react';

const EditForm = ({ post, onCancel, onSave }) => {
    const [editedData, setEditedData] = useState({
        title: post.title,
        location: post.location,
        email: post.email,
        phone: post.phone,
        start_date: post.start_date,
        end_date: post.end_date,
        description: post.description,
        images: [],
    });



    const baseUrl = 'http://127.0.0.1:8000/';

    const handleImageChange = (e) => {
        const newImages = Array.from(e.target.files);
        setEditedData({ ...editedData, images: newImages });
    };

    const handleSave = async () => {
        try {
            const formData = new FormData();
            for (const key in editedData) {
                if (key === 'images') {
                    editedData.images.forEach((image) => {
                        formData.append('uploaded_images', image);
                    });
                } else {
                    formData.append(key, editedData[key]);
                }
            }

            const response = await fetch(baseUrl + `wanderhands/post/${post.id}/`, {
                method: 'PUT',
                body: formData,
            });

            if (response.ok) {
                const updatedPost = await response.json();
                onSave(updatedPost); // Update the edited post in the parent component
            } else {
                console.error('Failed to update post:', response.status);
            }
        } catch (error) {
            console.error('Error updating post:', error);
        }
    };




    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-2">Edit Post</h2>
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
                        value={editedData.title}
                        onChange={(e) => setEditedData({ ...editedData, title: e.target.value })}
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
                        value={editedData.location}
                        onChange={(e) => setEditedData({ ...editedData, location: e.target.value })}
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
                        value={editedData.email}
                        onChange={(e) => setEditedData({ ...editedData, email: e.target.value })}
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
                        value={editedData.phone}
                        onChange={(e) => setEditedData({ ...editedData, phone: e.target.value })}
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
                        value={editedData.start_date}
                        onChange={(e) => setEditedData({ ...editedData, start_date: e.target.value })}
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
                        value={editedData.end_date}
                        onChange={(e) => setEditedData({ ...editedData, end_date: e.target.value })}
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
                    value={editedData.description}
                    onChange={(e) => setEditedData({ ...editedData, description: e.target.value })}
                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4">
                <label className="block mb-2 font-bold text-gray-700">
                    Images:
                </label>
                <input
                    type="file"
                    id="images"
                    name="image"
                    accept="image/*"
                    className="w-full px-3 py-2 leading-tight text-gray-700 border rounded appearance-none focus:outline-none focus:shadow-outline"
                    multiple
                    onChange={handleImageChange}
                />
            </div>
            {/* Display preview of edited images */}
            <div className="flex">
                {post.images.map((image, index) => (
                    <img
                        key={index}
                        className="postImg"
                        // src={`http://127.0.0.1:8000${image.image}`}
                        width="100%"
                        alt=""
                    />
                ))}

               
            </div>
            <div className="mt-4 flex justify-between">
                <button onClick={onCancel} className="px-4 py-2 bg-red-500 text-white rounded-md">
                    Close
                </button>
                <button onClick={handleSave} className="px-4 py-2 bg-blue-500 text-white rounded-md">
                    Save
                </button>
            </div>
        </div>
    );
};

export default EditForm;
