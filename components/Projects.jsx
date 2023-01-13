import React from 'react'
import coinlist from '../public/assets/projects/coinlist.png'
import weather from '../public/assets/projects/weather.png'
import chess from '../public/assets/projects/chess.png'
import todo from '../public/assets/projects/todopage.png'
import ProgectsItem from './ProgectsItem'

const Projects = () => {
  return (
    <div id='projects' className='w-full pt-5'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest text-[#5651e5] uppercase'>Progects</p>
        <h2 className='py-4'>What I&#39;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProgectsItem
            title='Coinlist (Copy)'
            backgroundImg={coinlist}
            projectUrl='/coinlist'
            stack='React JS' />
          <ProgectsItem
            title='Weather'
            backgroundImg={weather}
            projectUrl='/weather'
            stack='TypeScript' />
          <ProgectsItem
            title='Chess'
            backgroundImg={chess}
            projectUrl='/chess'
            stack='TypeScript' />
          {/* <ProgectsItem
            title='Todo List'
            backgroundImg={todo}
            projectUrl='/todo'
            stack='React JS' /> */}
        </div>
      </div>
    </div>
  )
}

export default Projects