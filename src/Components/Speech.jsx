import React from 'react'
import { TypeAnimation } from 'react-type-animation';
import {motion} from 'motion/react'

const Speech = () => {
  return (
    <div className='flex items-end !mt-[50px] gap-5'>
     <motion.div  animate={{opacity: [0, 1]}} transition={{duration: 1,}} className='bg-white h-[80px] w-[250px] !px-4 !py-2 text-gray-600 text-[18px] rounded-l-2xl rounded-tr-2xl' > 
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
        <img className='bg-pink-500 h-12 w-12 rounded-b-full rounded-t-full' src="/man.png" alt="" />
    </div>
  )
}

export default Speech