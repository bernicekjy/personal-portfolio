import {Tilt} from 'react-tilt';
import { motion } from 'framer-motion';
import {styles} from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constants';
import { fadeIn, textVariant } from './utils/motion';

const ProjectCard = ({ index, name, description, tags, image, source_code_link}) => {
  return(
    <motion.div variants={fadeIn("up", "spring", index*0.5)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 560
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">

          <div className='relative w-full h-[230px]'>
            <img
            src={image}
            alt = {name}
            className='w-full h-full object-cover rounded-2xl'
            />
          </div>



          <div className="mt-5">
            <div className='flex flex-row'>
              <h3 className="text-white font-bold text-[24px]">
                {name}
              </h3>
              {/* GitHub link */}
              <div className = "object-right mx-5 card-img_hover">
                <div
                onClick={()=> window.open(source_code_link, "_blank")} //open page in new link
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center
                cursor-pointer hover:drop-shadow-[0_0px_25px_rgba(0,0,0,0.6)]"
                >
                  <img
                    src={github}
                    alt="github"
                    className = "w-1/2 h-1/2 object-contain"
                    />
                </div>
              </div>
            </div>
            <p className="mt-2 text-baby-blue">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag)=>(
              <p key={tag.name}
              className={`text-[14px] ${tag.color}`}>
                #{tag.name}
              </p>
            ))}
          </div>
        </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
         <p className={styles.sectionSubText}>My Work</p>
         <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className = "w-full flex">
        <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-3 text-secondary text-[17px] max-w-3xl leading=[30px]'
        >
          Discover my creative journey through an array of diverse projects. From web apps to 
          interactive creations, each project showcases my passion for innovation. Feel free
          to access its GitHub repository and explore its details.
        </motion.p>
      </div>

      <div className='mt-20 flex flex-wrap gap-7'>
        {projects.map((project, index)=>(
          <ProjectCard 
          key={`project-${index}`}
          index={index}
          {...project}/>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Works, "projects")