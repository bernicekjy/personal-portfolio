import React from 'react'
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { staggerContainer } from '../components/utils/motion';


const SectionWrapper = (Component, idName) => 
    //Higher Order Components: a function returning a function
  function HOC(){
    let boxVariants = {};
    const isMobile = window.innerWidth < 768;
    if (isMobile){
        initialOpacity = {opacity: 1} // show all elements
    }
    else{
        initialOpacity = {opacity: 0}
    }

    return(
    // attributes to apply to all sections
    <motion.section
        variants={staggerContainer()}
        initial={initialOpacity}
        whileInView={{opacity : 1}}
        viewport={{ once:true, amount:0.25} }
        className={`${styles.padding} max-w-7xl mx-auto relative z-0`}
    >
        {/* idName represents section to scroll to */}
        <span className="hash-span" id={idName}>
            &nbsp; 
        </span>
        <Component/>
    </motion.section>
    );
}

export default SectionWrapper