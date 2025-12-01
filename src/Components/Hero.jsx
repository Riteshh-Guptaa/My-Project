import React from "react";
import Speech from "./Speech";
import { animate, easeInOut, motion } from "motion/react"

const awardVariants = {
  initial: {
    x: -100,
    opacity: 0,

  },

  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
}

const followVariants = {
  initial: {
    y: -100,
    opacity: 0,

  },

  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
}

const Hero = () => {
  return (
    <div className="overflow-hidden flex !mx-auto lg:!px-15 md:!px-10 !px-5 ">
      <div className="flex w-full flex-col h-screen justify-between ">
        <div className="flex flex-col !mt-[60px] ">
          <motion.h1 initial={{ y: -100, opacity: 0}} animate = {{y: 0, opacity: 1}} transition= {{duration: 1}} className=" text-4xl md:text-6xl lg:text-8xl text-pink-300 ">
            Hey There,
          </motion.h1>
           
            <motion.h1  initial={{ y: -100, opacity: 0}} animate = {{y: 0, opacity: 1}} transition= {{duration: 1}} className=" text-4xl md:text-6xl lg:text-8xl text-white">
              Im Ritesh!
            </motion.h1>
          
        </div>
        <div className=" flex flex-col gap-1">
          <motion.div variants = {awardVariants} initial = "initial" animate = "animate" className="flex flex-col gap-2">
             <motion.h2 variants = {awardVariants} className="text-lg md:text-2xl lg:text-4xl">A Frontend Devloper</motion.h2>
             <motion.p variants={awardVariants} className="text-sm md:text-xl lg:text-2xl">Student at sscbs, delhi university. </motion.p>
          </motion.div>
         
          <motion.div variants = {awardVariants} initial = "initial" animate = "animate" className="flex gap-2 md:gap-4 lg:gap-6 h-[120px] w-[200px] items-center justify-start">
            <motion.div variants = {awardVariants} className = 'lg:h-[55px] h-[38px] md:h-[48px] md:w-[48px]  w-[39px] lg:w-[62px]  bg-white flex rounded-full items-center justify-center'>
               <img className='lg:text-1xl h-5 w-5  lg:h-[33px] lg:w-[33px] md:h-[32px] md:w-[32px] ' src="/award1.png" alt="" />
            </motion.div>
            <motion.div variants={awardVariants} className = 'lg:h-[55px] h-[38px] w-[39px] md:h-[48px] md:w-[48px]  lg:w-[62px] flex bg-white rounded-full items-center justify-center'>
              <img className='lg:text-1xl  h-6 w-6 lg:h-[33px] lg:w-[33px] md:h-[32px] md:w-[32px] ' src="/award2.png" alt="" />
            </motion.div>

            <motion.div variants= {awardVariants} className = 'lg:h-[55px] lg:w-[62px] h-[38px] w-[39px] md:h-[48px] md:w-[48px]  flex bg-white rounded-full items-center justify-center'>
              <img className='lg:text-1xl h-6 w-6 lg:h-[33px] md:h-[32px] md:w-[32px] lg:w-[33px]' src="/award3.png" alt="" />
            </motion.div>
          </motion.div>
        </div>
        <motion.a href="#services" animate = {{ opacity: [0, 1, 0]}} transition={{
          repeat: Infinity,
          ease: "easeInOut",
          duration: 2,
        }} className="!mb-[50px]">
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5 9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V15C19 18.866 15.866 22 12 22C8.13401 22 5 18.866 5 15V9Z"
              stroke="white"
              strokeWidth="1"
            />
            <motion.path
            animate = {{y: [0, 5] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
              d="M12 5V8"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </motion.a>
      </div>

      <div className="absolute bottom-0 right-10 flex justify-center items-end h-[70vh] md:h-[80vh] lg:h-[90vh] w-full ">
  <div className="absolute bottom-0 flex w-[200px] h-[200px] md:w-[350px] md:h-[350px] lg:w-[550px] lg:h-[550px]">
    <img src="/me4.webp" alt="" className="w-full h-full object-cover" />
  </div>
</div>


   
      <div className=" flex w-full items-end justify-between h-screen flex-col ">


        <div className="flex gap-4 bg-blue-900 flex-col h-100% w-[60px] justify-center rounded-bl-lg items-center static">
          <motion.div variants={followVariants}  initial = "initial" animate = "animate" className="h-[25px] w-[25px] flex justify-center items-center !mt-4">
            <motion.a variants={followVariants} href="">
            <img src="/instagram.png" alt="" />
          </motion.a>
          </motion.div>
          <motion.div variants={followVariants}  initial = "initial" animate = "animate" className="h-[25px] w-[25px] flex justify-center items-center">
            <motion.a variants = {followVariants} href="">
            <img src="/facebook.png" alt="" />
          </motion.a>
          </motion.div>
          <motion.div variants={followVariants}  initial = "initial" animate = "animate" className="h-[25px] w-[25px] flex justify-center items-center">
            <motion.a variants= {followVariants} href="">
            <img src="youtube.png" alt="" />
          </motion.a>
          </motion.div>
          <motion.div animate = {{x: [-40, 5]}} transition={{duration: 1, }} className="bg-red-500 w-25 flex h-fit relative rounded-br-lg top-9 text-white items-center justify-center rotate-90">
            <motion.p >Follow Me!</motion.p>
          </motion.div> 
        </div>
         

        <Speech />
        <div className="flex flex-col gap-1.5  h-[80px] w-[80px] md:h-[120px] md:w-[120px]  lg:h-[150px] lg:w-[150px] items-center justify-center !mr-[150px] !lg:mr-[120px] !lg:mr-[200px]">
          <motion.div animate={{x: [200, 0], opacity: [0,1]}} transition = {{duration: 1,}} className="flex lg:h-[60px] lg:w-[60px] h-[40px] w-[45px] justify-center items-center font-bold">
            <img src="/certificate.png" alt="" />
          </motion.div>
          <motion.div  animate={{x: [200, 0], opacity: [0,1]}} transition = {{duration: 1,}}  className="flex text-[9px]  md-text-[10px] lg:text-sm justify-center items-center">
           <p className="text-center">
            LMA CERTIFICED
           <br />
           PROFFESIONAL
           <br />
           UI DESIGNER
           </p>
          </motion.div>
        </div>

         <a href="/#contact" className="">
          <div className="tracking-[3px] !mr-[80px]">
            <motion.svg animate = {{rotate: [0, 360]}} transition={{duration: 10, repeat: Infinity, ease: "linear"}}  viewBox="0 0 200 200" width="150" height="150">
              {/* Pink Circle */}
              <circle cx="100" cy="100" r="90" fill="pink" />

              {/* Invisible Path for Text */}
              <path
                id="innerCirclePath"
                fill="none"
                d="M 100,100 m -60,0 a 60,60 0 1,1 120,0 a 60,60 0 1,1 -120,0"
              />

              <text className="font-bold text-md">
                <textPath href="#innerCirclePath">~ Hire Now</textPath>
              </text>

              <text className="font-bold text-md">
                <textPath href="#innerCirclePath" startOffset="44%">
                  ~ Contact Me
                </textPath>
              </text>
            </motion.svg>
            <div className="relative -top-25 left-12">
              <motion.svg
              animate = {{rotate: [0, 360]}} transition={{duration: 10, repeat: Infinity, ease: "linear"}} 
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="50"
                height="50"
                fill="none"
                stroke="black"
                strokeWidth="2"
              >
                <line x1="6" y1="18" x2="18" y2="6" />
                <polyline points="9 6 18 6 18 15" />
              </motion.svg>
            </div>
          </div>
        </a>
      </div>
     
    </div>
  );
};

export default Hero;
