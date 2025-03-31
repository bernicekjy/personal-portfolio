import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { textVariant } from "./utils/motion";
import { motion } from 'framer-motion';

const Tech = () => {
  return (
    <div>
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Tech I'm Familiar With.</h2>
          <p className={`text-[20px] text-baby-blue`}>...and more in the future!</p>
        </motion.div>

        {/* <div className="flex flex-row flex-wrap justify-center gap-10 mt-5">
          {technologies.map((technology)=>(
            <div className="w-28 h-28" key={technology.name}>
              <BallCanvas icon={technology.icon}/>
            </div>
          ))}
        </div> */}

        <div>
        <div className="flex flex-row flex-wrap justify-center gap-10 mt-5">
          {technologies.map((technology)=>(
            <div className="flex flex-col items-center" key={technology.name}>

            {/* icon */}
              <div className="blue-white-gradient w-20 h-20 rounded-full flex justify-center items-center">
                                <img
                                  src={technology.icon}
                                  alt={technology.name+" img"}
                                  className = "w-1/2 h-1/2 object-contain"
                                  />
                              </div>

              {/* text */}
              <p className="text-center mt-2 text-[#595959]">{technology.name}</p>
            </div>
          ))}
        </div>
        </div>
    </div>
  )
}

export default SectionWrapper(Tech, "")