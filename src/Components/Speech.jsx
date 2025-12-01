import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import {motion} from 'motion/react'

const Speech = () => {
  return (
    <motion.div animate = {{x: [200, 0]}} transition={{duration: 1}} className='flex items-end !mt-[50px] gap-5'>
     <motion.div  animate={{opacity: [0, 1]}} transition={{duration: 1,}} className='bg-white !h-[100px] !w-[100px] md:!h-[80px] md:!w-[200px] lg:!h-[80px] lg:!w-[250px] !px-4 !py-2 text-gray-600 text-[9px] md:text-[13px] lg:text-[18px] rounded-l-2xl rounded-tr-2xl' > 
      <TypeAnimation
       sequence={[
         1000,
        'Greetings!,',
        1000, 
        ' How are you, How was your day!',
        1000,
        
        
       ]}
        wrapper="span"
        speed={40}
        deletionSpeed={60}
        repeat={Infinity}
      />
     </motion.div>
        <img className='bg-pink-500 lg:h-12 lg:w-12 md:h-11 md:w-11 h-9 w-9 rounded-b-full rounded-t-full' src="/man.png" alt="" />
    </motion.div>
  )
}

export default Speech