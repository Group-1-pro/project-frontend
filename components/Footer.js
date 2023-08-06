import React from 'react';

export default function Footer() {
    return (
        <footer >
            
            <div className="bg-gray-300 py-4 fixed bottom-0 left-0 w-full" >
                <div className="container mx-auto">
                    <div className="flex justify-between items-center">
                        <p className="text-sm">&copy; {new Date().getFullYear()} All Rights Reserved by <a href="#" className="text-blue-600 hover:text-blue-800">WanderHands</a>.</p>
                        <ul className="flex space-x-4">
                            <li><a className="text-blue-600 hover:text-blue-800" href="#"><i className="fab fa-facebook"></i></a></li>
                            <li><a className="text-blue-400 hover:text-blue-600" href="#"><i className="fab fa-twitter"></i></a></li>
                            <li><a className="text-pink-600 hover:text-pink-800" href="#"><i className="fab fa-dribbble"></i></a></li>
                            <li><a className="text-blue-700 hover:text-blue-900" href="#"><i className="fab fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
}
