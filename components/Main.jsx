import Link from 'next/link'
import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BsTelegram, BsInstagram } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <p className='uppercase text-sm tracking-wides text-gray-600'>
            Let's build something together
          </p>
          <h1 className='py-4 text-gray-700'>
            Hi, I'm <span className='text-[#5651e5]'>Elizarov Egor</span>
          </h1>
          <h1 className='py-2 text-gray-700'>A Front-End Web Developer</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            I’m focused on building responsive front-end web applications
            while I'm study in college.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <a
                href='https://github.com/guysnroze'
                target='_blank'
              >
                <FaGithub />
              </a>
            </div>
            <Link href="#contact">
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <a href='https://t.me/guysnroze'
                target='_blank'
              >
                <BsTelegram />
              </a>
            </div>
            <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
              <a href="https://www.instagram.com/guysnroze/"
                target='_blank'
              >
                <BsInstagram />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main