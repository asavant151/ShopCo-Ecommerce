import React from 'react'
import { Link } from 'react-router-dom';
import { FaTwitter, FaInstagram, FaFacebook, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <>
            <footer className="bg-[#F0F0F0] relative mt-36">
                {/* Overlapping Offer Box */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-[1240px] md:px-16 px-6 md:py-11 py-8 bg-black rounded-[20px] text-white  shadow-lg z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-[212px] gap-y-[36px]">
                        <h2 className="font-['Merriweather'] text-[32px] md:text-[40px] font-bold uppercase">
                            STAY UPTO DATE ABOUT OUR LATEST OFFERS
                        </h2>
                        <form action="#">
                            <input type="email" placeholder='Enter your email address' className='bg-white border border-white rounded-[62px] px-6 py-4 w-full text-black/40 placeholder:text-black/40 focus:outline-none mb-4' />
                            <button type='submit' className='bg-white text-black rounded-[62px] w-full px-6 py-4 mt-4 md:mt-0 font-medium'>Subscribe to Newsletter</button>
                        </form>
                    </div>
                </div>

                {/* Footer Content */}
                <div className="container mx-auto px-4 md:pt-[170px] pt-[230px] md:pb-[88px] pb-[40px] relative z-0">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                        {/* SHOP.CO Section */}
                        <div>
                            <h3 className="font-['Merriweather'] text-[20px] md:text-[33px] font-bold uppercase mb-4">SHOP.CO</h3>
                            <p className="text-black/60 mb-4">
                                We have clothes that suits your style and which you’re proud to
                                wear. From women to men.
                            </p>
                            {/* Social Icons */}
                            <div className="flex space-x-4">
                                <a
                                    href="#"
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-black transition duration-300"
                                >
                                    <FaTwitter className="text-lg" />
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-black transition duration-300"
                                >
                                    <FaInstagram className="text-lg" />
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-black transition duration-300"
                                >
                                    <FaFacebook className="text-lg" />
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-black transition duration-300"
                                >
                                    <FaGithub className="text-lg" />
                                </a>
                            </div>
                        </div>

                        {/* COMPANY Section */}
                        <div>
                            <h3 className="text-xl font-medium mb-4">COMPANY</h3>
                            <ul className="text-black/60 space-y-2">
                                <li><Link to={'/about'} className='text-black/60'>About</Link></li>
                                <li><Link to={'/features'} className='text-black/60'>Features</Link></li>
                                <li><Link to={'/works'} className='text-black/60'>Works</Link></li>
                                <li><Link to={'/career'} className='text-black/60'>Career</Link></li>
                            </ul>
                        </div>

                        {/* HELP Section */}
                        <div>
                            <h3 className="text-xl font-medium mb-4">HELP</h3>
                            <ul className="space-y-2">
                                <li><Link to={'/customer-support'} className='text-black/60'>Customer Support</Link></li>
                                <li><Link to={'/delivery-details'} className='text-black/60'>Delivery Details</Link></li>
                                <li><Link to={'/terms-and-conditions'} className='text-black/60'>Terms & Conditions</Link></li>
                                <li><Link to={'/privacy-policy'} className='text-black/60'>Privacy Policy</Link></li>
                                <li><Link to={'/faq'} className='text-black/60'>FAQ</Link></li>
                            </ul>
                        </div>

                        {/* ACCOUNT Section */}
                        <div>
                            <h3 className="text-xl font-medium mb-4">ACCOUNT</h3>
                            <ul className="space-y-2">
                                <li><Link to={'/manage-deliveries'} className='text-black/60'>Manage Deliveries</Link></li>
                                <li><Link to={'/orders'} className='text-black/60'>Orders</Link></li>
                                <li><Link to={'/payments'} className='text-black/60'>Payments</Link></li>
                            </ul>
                        </div>

                        {/* RESOURCES Section */}
                        <div>
                            <h3 className="text-xl font-medium mb-4">RESOURCES</h3>
                            <ul className="space-y-2">
                                <li><Link to={'/free-ebooks'} className='text-black/60'>Free eBooks</Link></li>
                                <li><Link to={'/development-tutorial'} className='text-black/60'>Development Tutorial</Link></li>
                                <li><Link to={'/how-to-blog'} className='text-black/60'>How to - Blog</Link></li>
                                <li><Link to={'/youtube-playlist'} className='text-black/60'>Youtube Playlist</Link></li>
                            </ul>
                        </div>
                    </div>


                    {/* Copyright and Payment Icons */}
                    <div className="mt-8 border-t border-black/10 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400">
                            Shop.co © 2000-{new Date().getFullYear()}. All Rights Reserved
                        </p>
                        <div className="flex md:flex-nowrap flex-wrap md:space-x-4 space-x-1 mt-4">
                            <img src="/assets/visa.svg" alt="VISA" />
                            <img src="/assets/mastercard.svg" alt="MasterCard" />
                            <img src="/assets/paypal.svg" alt="PayPal" />
                            <img src="/assets/play.svg" alt="Play" />
                            <img src="/assets/gpay.svg" alt="G Pay" />
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer