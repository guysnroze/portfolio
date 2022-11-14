import React from 'react'
import Image from 'next/image'
import weather from '../public/assets/projects/weatherpage.png'
import { RiRadioButtonFill } from 'react-icons/ri'
import Link from 'next/link'

const weatherpage = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/80 z-10' />
        <Image className='absolute z-1' layout='fill' objectFit='cover' src={weather} alt='/' />
        <div className='absolute top-[80%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Weather</h2>
          <h3>TypeScript / SCSS / Redux</h3>
        </div>
      </div>


      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8'>
        <div className='col-span-4'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>Project</p>
          <h2>Overview</h2>
          <p className='py-2'>
            This app is built with TypeScript.
            The purpose of creating this project was to practice working with API requests, changing the theme using SASS, trying to master Redux.
            The application has two themes dark and light, when you click on the SVG icon on top, the theme changes.
            To get the API, I used the Weather API service (a full description of how to use it in this project is in the file README.md on my <a className='underline cursor-pointer text-[#5651e5]' target="_blank" href='https://github.com/guysnroze'>github</a>)
          </p>
          <button className='px-8 py-2 mt-4 mr-8 hover:scale-105 ease-in duration-100'>Demo</button>
          <button className='px-8 py-2 mt-4 hover:scale-105 ease-in duration-100'><a href='https://github.com/guysnroze/weather-ts' target='_blank'>Code</a></button>
        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> TypeScript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> React
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> SCSS
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Redux
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Weather API
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  )
}

export default weatherpage