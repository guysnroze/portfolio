import React from 'react'
import SkillsComponent from './SkillsComponent'

const Skills = () => {
  return (
    <div id='skills' className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest text-[#5651e5] uppercase'>Skills</p>
        <h2 className='py-4'>What Can I Do</h2>
        <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <SkillsComponent />
        </div>
      </div>
    </div>
  )
}

export default Skills