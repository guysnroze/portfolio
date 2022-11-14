import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsTelegram, BsInstagram } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'


const Contact = () => {

    return (
        <div id='contact' className='w-full lg:h-screen pt-5'>
            <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
                <p className='text-xl tracking-widest text-[#5651e5] uppercase'>
                    Contact
                </p>
                <h2 className='py-4'>Get In Totch</h2>
                <div className='grid lg:grid-cols-5 gap-8'>
                    {/* left */}
                    <div className='col-span lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                        <div className='lg:p-4 h-full'>
                            <div>
                                <img className='rounded-xl hover:scale-105 ease duration-300' src="https://www.cortland.pl/blog/wp-content/uploads/2017/05/macbook-firma-2.jpeg" alt="" />
                            </div>
                            <div>
                                <h2 className='py-2'>Name here</h2>
                                <p >Front-End Developer</p>
                                <p className='py-2'>I am avalible for job. Contact me and let's talk.</p>
                            </div>
                            <div>
                                <p className='uppercase py-8'>Connect with me</p>
                                <div className='flex items-center justify-between'>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <a href='https://github.com/guysnroze'
                                            target='_blank'
                                        >
                                            <FaGithub />
                                        </a>
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <AiOutlineMail />
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <a href='https://t.me/guysnroze'
                                            target='_blank'
                                        >
                                            <BsTelegram />
                                        </a>
                                    </div>
                                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                                        <a href="https://www.instagram.com/guysnroze/"
                                            target="_blank"
                                        >
                                            <BsInstagram />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* right */}
                    <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                        <div className='p-4'>
                            <form>
                                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                                    <div className='flex flex-col py-2'>
                                        <label className='uppercase text-sm py-2'>Name</label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray-300 outline-0'
                                            type="text"
                                        />
                                    </div>
                                    <div className='flex flex-col py-2'>
                                        <label className='uppercase text-sm py-2'>Phone Number</label>
                                        <input className='border-2 rounded-lg p-3 flex border-gray-300 outline-0'
                                            type="text"
                                        />
                                    </div>
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Email</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300 outline-0'
                                        type="email"
                                    />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Subject</label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300 outline-0'
                                        type="text"
                                    />
                                </div>
                                <div className='flex flex-col py-2'>
                                    <label className='uppercase text-sm py-2'>Message</label>
                                    <textarea className='border-2 rounded-lg p-3 border-gray-300 outline-0' rows='10' ></textarea>
                                </div>
                                <button className='w-full p-4 text-gray-100 mt-4 hover:scale-105 ease duration-300' >Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
                {/* Scrol */}
                <div className='flex justify-center py-12'>
                    <Link href='/'>
                        <div className='rounded-full shadow-lg shadow-gtay-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                            <HiOutlineChevronDoubleUp
                                className='text-[#5651e5]'
                                size={30} />
                        </div>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Contact;