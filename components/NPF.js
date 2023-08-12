import React from 'react'

const NPF = () => {
    const handleSubmit = (e) => {

    }
    return (
        <form onSubmit={handleSubmit} className='flex flex-col items-center justify-center w-full p-4 bg-blue-500 rounded-lg md:w-1/2 lg:w-1/3 xl:w-1/4'>
    <h1 className='w-full font-bold text-white'>Create a new form</h1>
    <div className='flex flex-col justify-between w-full gap-4 md:flex-row'>
        <div className='flex flex-col w-full md:w-1/2 lg:w-1/2'>
        <label className='text-sm font-bold text-white '>Title</label>
                <input
                    type="text"
                    className='rounded-md'
                    name="title"
                    required />
        
        </div>
        <div className='flex flex-col w-full md:w-1/2 lg:w-1/2'>
            
        </div>
    </div>
    <div className='flex flex-col justify-between w-full gap-4 md:flex-row'>
        <div className='flex flex-col w-full md:w-1/2 lg:w-1/2'>
        
        </div>
        <div className='flex flex-col w-full md:w-1/2 lg:w-1/2'>
        
        </div>
    </div>
    <div className='flex flex-col justify-between w-full gap-4 md:flex-row'>
        <div className='flex flex-col w-full md:w-1/2 lg:w-1/2'>
        
        </div>
        <div className='flex flex-col w-full md:w-1/2 lg:w-1/2'>
        
        </div>
    </div>
    <div className='flex flex-col w-full gap-4'>
    
    </div>
    <div className='w-full'>
    
    </div>
    <div className='flex justify-end w-full gap-4 m-3'>
        <button className="px-3 py-2 text-white bg-green-600 rounded-md">Create Post</button>
        <button className="px-3 py-2 text-white bg-red-600 rounded-md" >Close</button>
    </div>
</form>
    )
}

export default NPF