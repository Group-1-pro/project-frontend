import React from 'react';


export default function Footer() {
    return (


        // <footer >

        //     <div className="fixed bottom-0 left-0 w-full py-4 bg-gray-300" >
        //         <div className="container mx-auto">
        //             <div className="flex items-center justify-between">
        //                 <p className="text-sm">&copy; {new Date().getFullYear()} All Rights Reserved by <a href="#" className="text-blue-600 hover:text-blue-800">WanderHands</a>.</p>
        //                 <ul className="flex space-x-4">
        //                     <li><a className="text-blue-600 hover:text-blue-800" href="#"><i className="fab fa-facebook"></i></a></li>
        //                     <li><a className="text-blue-400 hover:text-blue-600" href="#"><i className="fab fa-twitter"></i></a></li>
        //                     <li><a className="text-pink-600 hover:text-pink-800" href="#"><i className="fab fa-dribbble"></i></a></li>
        //                     <li><a className="text-blue-700 hover:text-blue-900" href="#"><i className="fab fa-linkedin"></i></a></li>
        //                 </ul>
        //             </div>
        //         </div>
        //     </div>

        // </footer>
        <div>

            <footer>

                <div className="footerContainer">


                    <div className="sec aboutus">

                        <h2>About Us</h2>

                        <p>
                            WanderHands is a Jordanian online website that offers the spirit of volunteerism transcends borders! Engaging in volunteer work abroad offers a unique and rewarding opportunity to immerse yourself in diverse cultures while making a positive impact on communities worldwide.
                            Our platform connects you with transformative volunteering experiences in different countries, fostering cross-cultural understanding and global citizenship.
                        </p>

                        {/* <ul class="sci">
                            <li>
                                <a href="#"><i class="fab fa-facebook"></i></a>
                            </li>
                            <li>
                                <a href="#"><i class="fab fa-twitter"></i></a>
                            </li>
                            <li>
                                <a href="#"><i class="fab fa-instagram"></i></a>
                            </li>
                            <li>
                                <a href="#"><i class="fab fa-youtube"></i></a>
                            </li>
                        </ul> */}
                        
                        <div className="wrapper">
                            <div className="social-icons">
                                <a className="social-icon mail" href="mailto:esmailjawabreh@gmail.com" target="_blank" rel="author">
                                    <i className="fa-sharp fa-solid fa-envelope"></i>
                                </a>

                                <a className="social-icon instagram" href="https://www.instagram.com/esmail.sudgi/" target="_blank"
                                    rel="author">
                                    <i className="fab fa-instagram"></i>
                                </a>

                                <a className="social-icon github" href="https://github.com/Esmail-Jawabreh" target="_blank" rel="author">
                                    <i className="fab fa-github"></i>
                                </a>
                            </div>
                        </div>

                    </div>


                    <div className="sec quickLink">

                        <h2>Quick Link</h2>

                        <ul>
                            <li><a href="#">About</a></li>
                            <li><a href="#">FAQ</a></li>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Help</a></li>
                            <li><a href="#">Term & Conditions</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>

                    </div>


                    {/* <div class="sec quicklink">
                        <h2>Shop</h2>
                        <ul>
                            <li><a href="#">Men</a></li>
                            <li><a href="#">Women</a></li>
                            <li><a href="#">Children</a></li>
                            <li><a href="#">Shoes</a></li>
                            <li><a href="#">Clothing</a></li>
                            <li><a href="#">Watch</a></li>
                        </ul>
                    </div> */}


                    <div className="sec contact">
                        <h2>Contact Us</h2>
                        <ul className="info">
                            <li>
                                <span>
                                    <i className="fad fa-map-marker-alt"></i>
                                </span>
                                <span>
                                    Amman, Jordan
                                </span>
                            </li>
                            <li>
                                <span><i className="fad fa-phone"></i></span>
                                <p>
                                    <a href="tel:+962778503808">+962778503808</a> <br />
                                </p>
                            </li>
                            <li>
                                <span><i className="fad fa-envelope"></i></span>
                                <p>
                                    <a href="esmailjawabreh@gmail.com">Esmailjawabreh@gmail.com</a>
                                </p>
                            </li>
                        </ul>
                    </div>

                </div>

            </footer>


            <div className="copyrightText">
                <p>Copyright &copy; 2023 Wander Hands. All Rights Reserved.</p>
            </div>

        </div>
    );
}
