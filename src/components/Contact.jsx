import { useState, useRef } from "react";
import {motion} from 'framer-motion';
import emailjs from '@emailjs/browser';

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "./utils/motion";

const Contact = () => {
  // form is an object containing details
  const formRef = useRef();
  const [form, setForm] = useState({
    name:'',
    email:'',
    message:''
  });

  const [loading, setLoading] = useState(false);

  // allow fields to be updated
  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({...form, [name]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent browser from refreshing
    setLoading(true);

    emailjs.send(
      "service_azwa9o4", 
      "template_jk5tghj",
    {
      from_name: form.name,
      to_name: 'Bernice',
      from_email: form.email,
      to_email: 'bernicekohjy@gmail.com',
      message: form.message
    },
    "oXRv663hRwkH3vdpp")
    .then(()=>{
      setLoading(false);

      //reset email
      setForm({
        name: '',
        email: '',
        message: ''
      });

      alert('Thanks for dropping me an email! I will get back to you as soon as possible :)')

    }, (error) =>{
      setLoading(false)

      console.log(error);

      alert('Something went wrong. You may manually email me at bernice.kohjy@gmail.com!')
    })
  }

  return(
    <div className="xl:mt-12 xl:flex-row flex-col-reverse 
    flex gap-10 overflow-hidden">
    <motion.div
    variants={slideIn('left','tween', 0.2, 1)}
    className="flex-[0.75] bg-black-100 p-8 rounded-2xl">
      <p className={styles.sectionSubText}>Get in touch</p>
      <h3 className={styles.sectionHeadText}>Contact Me.</h3>
  
      <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="mt-12 flex flex-col gap-8"
      >
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">
            Your Name
          </span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="What's your name?"
            className="bg-tertiary py-4 px-6 placeholder:text-white text-navy-blue rounded-lg
            outlined-none border-none font-medium"/>
        </label>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">
            Your Email
          </span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="What's your email?"
            className="bg-tertiary py-4 px-6 placeholder:text-white text-navy-blue rounded-lg
            outlined-none border-none font-medium"/>
        </label>
        <label className="flex flex-col">
          <span className="text-white font-medium mb-4">
            Your Message
          </span>
          <textarea
            rows="7"
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Enter your message"
            className="bg-tertiary py-4 px-6 placeholder:text-white text-navy-blue rounded-lg
            outlined-none border-none font-medium"/>
        </label>
        
        {/* submit button */}
        <button
        type="submit"
        className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md
        shadow-primary rounded-xl hover:bg-navy-blue"
        >
          {loading ? 'Sending...': "Send"}
        </button>
      </form>
    </motion.div>
    
    <motion.div
      variants={slideIn('right','tween', 0.2, 1)}
      className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
      <EarthCanvas/>
    </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")