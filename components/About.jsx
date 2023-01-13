import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import AboutImg from '../public/assets/about.jpg'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            (I am not your normal devepoper.)
          </p>
          <p className='py-2 text-gray-600'>
            I started learn web development technologies in winter 2022 as HTML, CSS, JavaScript, React.
            Before that, I pre-edited videos and did 3D design. I always have been
            interested in the field of design and graphics and I decided to test myself
            in something new.
            I am distinguished by diligence, stress resistance and a creative approach to business. If I take on a project, I will definitely finish it. I understand documentation well. If I have questions in the process of writing code, then the first thing I turn to is the Internet.

          </p>
          <p className='py-2 text-gray-600'> I&#39;m
            passionate about learning new technologies and understand there is
            more than one way to accomplish a task. I am a quick learner and can pick up new tech stacks as
            needed.
          </p>
          <Link href="#projects">
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className="rounded-xl" alt='' />
        </div>
      </div>
    </div>
  )
}

export default About