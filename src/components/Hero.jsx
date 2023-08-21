import React from 'react'

import {motion} from 'framer-motion';
import {styles} from '../styles';
import { ComputersCanvas } from './canvas';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px]
        max-w-7xl mx-auto flex flex-row items-start gap-5`}>

        <div>
          <h1 className={`${styles.heroHeadText} text-tertiary`}>Hello, 
          I'm <span className='text-white font-serif'>Bernice</span>.</h1>

          <p className={`${styles.heroSubText} text-white mt-2`}>An aspiring Software Engineer and Designer</p>
        </div>

        
      </div>
        

      {/* Moving scroll icon */}
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center
           items-center">
          <a href="#about">
            <div className="w-[35px] h-[64px] rounded-3xl border-4 border-white
              flex justify-center items-start p-2">
              <motion.dev
                animate={{
                  // 24px up and down
                  y:[0, 24, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: 'loop'
                }}
                className="w-3 h-3 rounded-full bg-white mb-1"
              />
              </div>
          </a>

      </div>

    </section>
  )
}

export default Hero