import React, { useState } from 'react';

const EditForm = ({ post, onCancel, onSave }) => {
    const [fileNames, setFileNames] = useState([])
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

            const response = await fetch(`http://127.0.0.1:8000/wanderhands/post/${post.id}/`, {
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
        <form onSubmit={handleSave} className='flex flex-col items-center justify-center w-1/2 p-8  bg-white rounded-lg text-orange-600 border-orange'>
            <h1 className='flex justify-start w-full font-bold text-[#7E1717]'> Edit Form </h1>
            <div className='grid w-full grid-cols-1 gap-4 sm:grid-cols-2'>
                <div className='flex flex-col order'>
                    <label className='text-sm font-bold text-[#7E1717]'>Title</label>
                    
                        <input
                        type="text"
                        id="title"
                        name="title"
                        required
                        value={editedData.title}
                        onChange={(e) => setEditedData({ ...editedData, title: e.target.value })}
                        className='w-full p-1 px-3 text-gray-500 bg-white border-gray-300 rounded-md outline-none'
                    />
                </div>
                <div className='flex flex-col'>
                    <label className='text-sm font-bold text-[#7E1717]'>Country</label>
                    
                    <input
                        type="text"
                        id="location"
                        name="location"
                        list="country-list"
                        placeholder='Country'
                        required
                        value={editedData.location}
                        onChange={(e) => setEditedData({ ...editedData, location: e.target.value })}
                        className='w-full p-1 px-3 text-gray-500 border-gray-300 rounded-md outline-none appearance-none'
                    />
                    <datalist id="country-list">
                        <option>select-country</option>
                        <option>Afghanistan</option>
                        <option>Aland-Islands</option>
                        <option>Albania</option>
                        <option>Algeria</option>
                        <option>American Samoa</option>
                        <option>Andorra</option>
                        <option>Angola</option>
                        <option>Anguilla</option>
                        <option>Antarctica</option>
                        <option>Antigua-and-Barbuda</option>
                        <option>Argentina</option>
                        <option>Armenia</option>
                        <option>Aruba</option>
                        <option>Australia</option>
                        <option>Austria</option>
                        <option>Azerbaijan</option>
                        <option>Bahamas</option>
                        <option>Bahrain</option>
                        <option>Bangladesh</option>
                        <option>Barbados</option>
                        <option>Belarus</option>
                        <option>Belgium</option>
                        <option>Belize</option>
                        <option>Benin</option>
                        <option>Bermuda</option>
                        <option>Bhutan</option>
                        <option>Bolivia</option>

                        <option>Bosnia-and-Herzegovina</option>
                        <option>Botswana</option>
                        <option>Bouvet-Island</option>
                        <option>Brazil</option>
                        <option>British-Indian-Ocean-Territory</option>
                        <option>Brunei-Darussalam</option>
                        <option>Bulgaria</option>
                        <option>Burkina-Faso</option>
                        <option>Burundi</option>
                        <option>Cambodia</option>
                        <option>Cameroon</option>
                        <option>Canada</option>
                        <option>Cape-Verde</option>
                        <option>Cayman-Islands</option>
                        <option>Central-African-Republic</option>
                        <option>Chad</option>
                        <option>Chile</option>
                        <option>China</option>
                        <option>Christmas-Island</option>

                        <option>Colombia</option>
                        <option>Comoros</option>
                        <option>Congo</option>
                        <option>Congo, Democratic-Republic-of-the-Congo</option>
                        <option>Cook-Islands</option>
                        <option>Costa-Rica</option>
                        <option>Croatia</option>
                        <option>Cuba</option>
                        <option>Curacao</option>
                        <option>Cyprus</option>
                        <option>Czech-Republic</option>
                        <option>Denmark</option>
                        <option>Djibouti</option>
                        <option>Dominica</option>
                        <option>Dominican Republic</option>
                        <option>Ecuador</option>
                        <option>Egypt</option>
                        <option>El-Salvador</option>
                        <option>Equatorial-Guinea</option>
                        <option>Eritrea</option>
                        <option>Estonia</option>
                        <option>Ethiopia</option>

                        <option>Faroe-Islands</option>
                        <option>Fiji</option>
                        <option>Finland</option>
                        <option>France</option>
                        <option>French-Guiana</option>
                        <option>French-Polynesia</option>
                        <option>French-Southern-Territories</option>
                        <option>Gabon</option>
                        <option>Gambia</option>
                        <option>Georgia</option>
                        <option>Germany</option>
                        <option>Ghana</option>
                        <option>Gibraltar</option>
                        <option>Greece</option>
                        <option>Greenland</option>
                        <option>Grenada</option>
                        <option>Guadeloupe</option>
                        <option>Guam</option>
                        <option>Guatemala</option>
                        <option>Guernsey</option>
                        <option>Guinea</option>
                        <option>Guinea-Bissau</option>
                        <option>Guyana</option>
                        <option>Haiti</option>


                        <option>Honduras</option>
                        <option>Hong-Kong</option>
                        <option>Hungary</option>
                        <option>Iceland</option>
                        <option>India</option>
                        <option>Indonesia</option>
                        <option>Iran</option>
                        <option>Iraq</option>
                        <option>Ireland</option>


                        <option>Italy</option>
                        <option>Jamaica</option>
                        <option>Japan</option>
                        <option>Jersey</option>
                        <option>Jordan</option>
                        <option>Kazakhstan</option>
                        <option>Kenya</option>
                        <option>Kiribati</option>
                        <option>Korea</option>

                        <option>Kosovo</option>
                        <option>Kuwait</option>
                        <option>Kyrgyzstan</option>

                        <option>Latvia</option>
                        <option>Lebanon</option>
                        <option>Lesotho</option>
                        <option>Liberia</option>

                        <option>Liechtenstein</option>
                        <option>Lithuania</option>
                        <option>Luxembourg</option>
                        <option>Macao</option>

                        <option>Madagascar</option>
                        <option>Malawi</option>
                        <option>Malaysia</option>
                        <option>Maldives</option>
                        <option>Mali</option>
                        <option>Malta</option>
                        <option>Marshall-Islands</option>
                        <option>Martinique</option>
                        <option>Mauritania</option>
                        <option>Mauritius</option>
                        <option>Mayotte</option>
                        <option>Mexico</option>
                        <option>Micronesia</option>
                        <option>Moldova</option>
                        <option>Monaco</option>
                        <option>Mongolia</option>
                        <option>Montenegro</option>
                        <option>Montserrat</option>
                        <option>Morocco</option>
                        <option>Mozambique</option>
                        <option>Myanmar</option>
                        <option>Namibia</option>
                        <option>Nauru</option>
                        <option>Nepal</option>
                        <option>Netherlands</option>
                        <option>New-Caledonia</option>
                        <option>New-Zealand</option>
                        <option>Nicaragua</option>
                        <option>Niger</option>
                        <option>Nigeria</option>
                        <option>Niue</option>
                        <option>Norfolk-Island</option>
                        <option>Northern-Mariana-Islands</option>
                        <option>Norway</option>
                        <option>Oman</option>
                        <option>Pakistan</option>
                        <option>Palau</option>
                        <option>Palestinian</option>
                        <option>Panama</option>
                        <option>Papua New Guinea</option>
                        <option>Paraguay</option>
                        <option>Peru</option>
                        <option>Philippines</option>
                        <option>Pitcairn</option>
                        <option>Poland</option>
                        <option>Portugal</option>
                        <option>Puerto-Rico</option>
                        <option>Qatar</option>
                        <option>Reunion</option>
                        <option>Romania</option>
                        <option>Russian-Federation</option>
                        <option>Rwanda</option>
                        <option>Saint-Barthelemy</option>
                        <option>Saint-Helena</option>
                        <option>Saint-Kitts and Nevis</option>
                        <option>Saint-Lucia</option>
                        <option>Saint-Martin</option>
                        <option>Saint-Pierre and Miquelon</option>
                        <option>Saint-Vincent and the Grenadines</option>
                        <option>Samoa</option>
                        <option>San-Marino</option>
                        <option>Sao-Tome and Principe</option>
                        <option>Saudi-Arabia</option>
                        <option>Senegal</option>
                        <option>Serbia</option>
                        <option>Serbia-and-Montenegro</option>
                        <option>Seychelles</option>
                        <option>Sierra-Leone</option>
                        <option>Singapore</option>
                        <option>Sint-Maarten</option>
                        <option>Slovakia</option>
                        <option>Slovenia</option>
                        <option>Solomon-Islands</option>
                        <option>Somalia</option>
                        <option>South-Africa</option>

                        <option>South-Sudan</option>
                        <option>Spain</option>
                        <option>Sri-Lanka</option>
                        <option>Sudan</option>
                        <option>Suriname</option>

                        <option>Swaziland</option>
                        <option>Sweden</option>
                        <option>Switzerland</option>

                        <option>Taiwan</option>
                        <option>Tajikistan</option>
                        <option>Tanzania</option>
                        <option>Thailand</option>
                        <option>Timor-Leste</option>
                        <option>Togo</option>
                        <option>Tokelau</option>
                        <option>Tonga</option>
                        <option>Trinidad-and-Tobago</option>
                        <option>Tunisia</option>
                        <option>Turkey</option>
                        <option>Turkmenistan</option>

                        <option>Tuvalu</option>
                        <option>Uganda</option>
                        <option>Ukraine</option>
                        <option>United-Arab-Emirates</option>
                        <option>United-Kingdom</option>
                        <option>United-States</option>

                        <option>Uruguay</option>
                        <option>Uzbekistan</option>
                        <option>Vanuatu</option>
                        <option>Venezuela</option>
                        <option>Viet Nam</option>
                        <option>British-Virgin-Islands</option>

                        <option>Wallis-and-Futuna</option>
                        <option>Western-Sahara</option>
                        <option>Yemen</option>
                        <option>Zambia</option>
                        <option>Zimbabwe</option>
                    </datalist>
                </div>
            </div>
            <div className='grid w-full grid-cols-1 gap-4 sm:grid-cols-2'>
                <div className='flex flex-col'>
                    <label className='text-sm font-bold text-[#7E1717]'>Email</label>
                   
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={editedData.email}
                        onChange={(e) => setEditedData({ ...editedData, email: e.target.value })}
                        className='w-full p-1 px-3 text-gray-500 border-gray-300 rounded-md outline-none appearance-none'
                    />
                </div>
                <div className='flex flex-col '>
                    <label className='text-sm font-bold text-[#7E1717]'>Phone</label>
                  
                    <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={editedData.phone}
                        onChange={(e) => setEditedData({ ...editedData, phone: e.target.value })}
                        className='w-full p-1 px-3 text-gray-500 border-gray-300 rounded-md outline-none appearance-none'
                    />
                </div>
            </div>
            <div className='grid w-full grid-cols-1 gap-4 sm:grid-cols-2'>
                <div className='flex flex-col '>
                    <label className='text-sm font-bold text-[#7E1717]'>Start Date</label>
                   
                    <input
                        type="date"
                        id="start_date"
                        name="start_date"
                        required
                        value={editedData.start_date}
                        onChange={(e) => setEditedData({ ...editedData, start_date: e.target.value })}
                        className='w-full p-1 px-3 text-gray-500 border-gray-300 rounded-md outline-none appearance-none'
                    />
                </div>
                <div className='flex flex-col '>
                    <label className='text-sm font-bold text-[#7E1717]'>End Date</label>
                    
                    <input
                        type="date"
                        id="end_date"
                        name="end_date"
                        required
                        value={editedData.end_date}
                        onChange={(e) => setEditedData({ ...editedData, end_date: e.target.value })}
                        className='w-full p-1 px-3 text-gray-500 border-gray-300 rounded-md outline-none appearance-none'
                    />

                </div>
            </div>
            <div className='flex flex-col w-full gap-4'>
                <label className='text-sm font-bold text-[#7E1717]'>Description</label>
                
                <textarea
                    id="description"
                    name="description"
                    required
                    value={editedData.description}
                    onChange={(e) => setEditedData({ ...editedData, description: e.target.value })}
                    className='w-full h-20 text-gray-500 border-gray-300 rounded-md outline-none appearance-none'
                />

            </div>

            <div className="w-full">
                <label className="block text-sm font-bold text-[#7E1717] ">
                    Image
                </label>
                <div className="flex items-center justify-center w-full h-40 px-6 pt-5 pb-6 mt-1 border-2 border-red-900 border-dashed rounded-md h">
                    <div className="w-full text-center">
                        <svg className="w-20 h-20 mx-auto text-red-300 " stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <div className="flex items-center">
                            <label htmlFor="images" className="flex flex-col justify-center w-40 h-8 bg-[#7E1717] rounded text-slate-200 hover:text-orange-600 hover:bg-red-400">
                                <span className="font-bold p -2">Upload a file</span>
                               
                                <input
                    type="file"
                    id="images"
                    name="image"
                    accept="image/*"
                    className="sr-only"
                    multiple
                    onChange={handleImageChange}
                />
                            </label>
                            <div className="px-2 py-1 text-lg text-black text-w">
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
            <div className='mt-4 flex justify-between'>
               
                <button onClick={onCancel} className="px-3 py-2 text-white bg-[#7E1717] rounded-md">
                    Close
                 </button>
                 <button onClick={handleSave} className="px-3 py-2 text-white rounded-md bg-blue-500">
                     Save
                 </button>
                
            </div>
        </form>
    );
};

export default EditForm;