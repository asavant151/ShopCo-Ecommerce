import React from 'react'
import { Link } from 'react-router-dom';

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
                            <p className="text-gray-400 mb-4">
                                We have clothes that suits your style and which you’re proud to
                                wear. From women to men.
                            </p>
                        </div>

                        {/* COMPANY Section */}
                        <div>
                            <h3 className="text-xl font-medium mb-4">COMPANY</h3>
                            <ul className="text-gray-400 space-y-2">
                                <li><Link to={'/about'}>About</Link></li>
                                <li><Link to={'/features'}>Features</Link></li>
                                <li><Link to={'/works'}>Works</Link></li>
                                <li><Link to={'/career'}>Career</Link></li>
                            </ul>
                        </div>

                        {/* HELP Section */}
                        <div>
                            <h3 className="text-xl font-medium mb-4">HELP</h3>
                            <ul className="text-gray-400 space-y-2">
                                <li><Link to={'/customer-support'}>Customer Support</Link></li>
                                <li><Link to={'/delivery-details'}>Delivery Details</Link></li>
                                <li><Link to={'/terms-and-conditions'}>Terms & Conditions</Link></li>
                                <li><Link to={'/privacy-policy'}>Privacy Policy</Link></li>
                                <li><Link to={'/faq'}>FAQ</Link></li>
                            </ul>
                        </div>

                        {/* ACCOUNT Section */}
                        <div>
                            <h3 className="text-xl font-medium mb-4">ACCOUNT</h3>
                            <ul className="text-gray-400 space-y-2">
                                <li><Link to={'/manage-deliveries'}>Manage Deliveries</Link></li>
                                <li><Link to={'/orders'}>Orders</Link></li>
                                <li><Link to={'/payments'}>Payments</Link></li>
                            </ul>
                        </div>

                        {/* RESOURCES Section */}
                        <div>
                            <h3 className="text-xl font-medium mb-4">RESOURCES</h3>
                            <ul className="text-gray-400 space-y-2">
                                <li><Link to={'/free-ebooks'}>Free eBooks</Link></li>
                                <li><Link to={'/development-tutorial'}>Development Tutorial</Link></li>
                                <li><Link to={'/how-to-blog'}>How to - Blog</Link></li>
                                <li><Link to={'/youtube-playlist'}>Youtube Playlist</Link></li>
                            </ul>
                        </div>
                    </div>


                    {/* Copyright and Payment Icons */}
                    <div className="mt-8 border-t border-black/10 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-gray-400">
                            Shop.co © 2000-{new Date().getFullYear()}. All Rights Reserved
                        </p>
                        <div className="flex space-x-4 mt-4">
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