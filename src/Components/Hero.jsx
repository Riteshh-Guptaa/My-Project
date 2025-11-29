import React from "react";
import Speech from "./Speech";

const Hero = () => {
  return (
    <div className="overflow-hidden flex ">
      <div className="flex w-full flex-col h-screen justify-between ">
        <div className="flex flex-col !mt-[60px] ">
          <h1 className=" text-8xl text-pink-300 ">
            Hey There,
          </h1>
           
            <h1 className="text-8xl text-white">Im Ritesh!</h1>
          
        </div>
        <div className="text-2xl flex flex-col gap-1">
          <div className="flex flex-col gap-2">
             <h2 className="text-4xl">A Frontend Devloper</h2>
             <p>Student at sscbs, delhi university. </p>
          </div>
         
          <div className="flex gap-6 h-[120px] w-[200px] items-center justify-start">
            <div className = 'h-[55px] w-[62px] bg-white flex rounded-full items-center justify-center'>
               <img className='text-1xl h-[33px] w-[33px]' src="/award1.png" alt="" />
            </div>
            <div className = 'h-[55px] w-[62px] flex bg-white rounded-full items-center justify-center'>
              <img className='text-1xl h-[33px] w-[33px] ' src="/award2.png" alt="" />
            </div>

            <div className = 'h-[55px] w-[62px] flex bg-white rounded-full items-center justify-center'>
              <img className='text-1xl h-[33px] w-[33px]' src="/award3.png" alt="" />
            </div>
          </div>
        </div>
        <a href="#services" className="!mb-[50px]">
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
            <path
              d="M12 5V8"
              stroke="white"
              strokeWidth="1"
              strokeLinecap="round"
            />
          </svg>
        </a>
      </div>

      <div className=" flex w-full items-end justify-between h-screen flex-col ">



        <div className="flex gap-4 bg-blue-900 flex-col h-100% w-[60px] justify-center rounded-bl-lg items-center static">
          <div className="h-[25px] w-[25px] flex justify-center items-center !mt-4">
            <a href="">
            <img src="/instagram.png" alt="" />
          </a>
          </div>
          <div className="h-[25px] w-[25px] flex justify-center items-center">
            <a href="">
            <img src="/facebook.png" alt="" />
          </a>
          </div>
          <div className="h-[25px] w-[25px] flex justify-center items-center">
            <a href="">
            <img src="youtube.png" alt="" />
          </a>
          </div>
          <div className="bg-red-500 w-25 flex h-fit relative rounded-br-lg top-9 items-center justify-center rotate-90">
            Follow Me! 
          </div> 
        </div>
         

        <Speech />
        <div className="flex flex-col gap-1.5 h-[150px] w-[150px] items-center justify-center !mr-[80px]">
          <div className="flex h-[60px] w-[60px] justify-center items-center font-bold">
            <img src="/certificate.png" alt="" />
          </div>
          <div className="flex justify-center items-center">
           <p className="text-center">
            LMA CERTIFICED
           <br />
           PROFFESIONAL
           <br />
           UI DESIGNER
           </p>
          </div>
        </div>

        <a href="/#contact" className="contactLink">
          <div className="tracking-[3px]">
            <svg viewBox="0 0 200 200" width="150" height="150">
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
            </svg>
            <div className="relative -top-25 left-12">
              <svg
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
              </svg>
            </div>
          </div>
        </a>
      </div>
      <div className="h-[800px] w-[800px] absolute z-[-1] flex bottom-0 left-160">
        <img src="/me4.webp" alt="" />
      </div>
    </div>
  );
};

export default Hero;
