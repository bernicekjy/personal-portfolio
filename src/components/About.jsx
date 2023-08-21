import React from 'react';
import {Tilt} from 'react-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from './utils/motion';
import { SectionWrapper } from '../hoc';
import { slideIn } from "./utils/motion";
import { bern } from '../assets';
import { socials } from '../constants';


const About = () => {
  return (
    <>
      
      {/* <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index)=>(
          <ServiceCard key={service.title} index={index} {...service}/>
        ))}
      </div> */}

      <div className="xl:mt-9 xl:flex-row flex-col-reverse 
      flex gap-10">
      <div>
        <motion.div variants={textVariant()}>
         <h2 className={`${styles.sectionHeadText}`}>About Me.</h2>
        </motion.div>

        <motion.div
        variants={fadeIn("", "", 0.1, 1)}
        >
        <p className='mt-4 text-[25px] max-w-3xl leading-[30px]'><span className='text-baby-blue'>I am a 3rd Year Penultimate Computer Science student in Nanyang Technological University, 
        Singapore.</span> <span className='text-primary'>I love problem-solving and making life easier (and cooler!) with 
        technology.</span></p>
        <br/>
        <div>
            <p className='mt-4 text-[25px] max-w-3xl leading-[30px]'>Connect with me!</p>
            <div className='flex flex-row mt-2'>
              {socials.map((social)=>(
                <div
                onClick={()=> window.open(social.link, "_blank")} //open page in new link
                className={`black-gradient w-10 h-10 rounded-full flex justify-center items-center
                cursor-pointer mr-2`}
                  >
                  <img
                    src={social.icon}
                    alt={social.title}
                    className = "object-contain"
                    />
                </div>
              ))}

            </div>

        </div>

        </motion.div>

      </div>
 
      <div className="flex-none xl:h-auto justify-right">
          <img 
          src={bern}
          alt="a picture of me"
          className='rounded-full md:h-[350px] h-[150px]'
          />
      </div>
        
        
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");