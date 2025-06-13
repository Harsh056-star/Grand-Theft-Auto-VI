import React, { useState } from "react";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";

function App() {

let [showContent, setShowContent] = useState(false)
useGSAP(()=>{/*making the function animate*/
    const tl = gsap.timeline();
    
    tl.to(".vi-mask-group", {
      rotate: 10,
      duration:2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    })

    .to(".vi-mask-group",{
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50% 50%",
      opacity:0,
      onUpdate: function(){
        if(this.progress() >= .9){
          document.querySelector(".svg").remove();
          setShowContent(true);
          this.kill();
        }
      }
    })
  })

  return (
    <>
      <div className="svg flex items-center justify-centerfixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-black">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">

          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />/*making a rectangle*/
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>


          <image

            href="./bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"

          />
        </svg>
      </div>
      {showContent && (<div className="main w-full ">

        {/* <h3>GTA VI</h3> */}
      
        <div className="landing w-full h-screen bg-black">

          <div className="navbar absolute top-0 left-0 z-10 w-full py-10 px-10">

            <div className="logo flex gap-5">

              <div className="lines flex flex-col gap-[7px]">
                <div className="line w-11 h-2 bg-white"></div>
                <div className="line w-7 h-2 bg-white"></div>
                <div className="line w-4 h-2 bg-white"></div>
              </div>

              <h3 className="text-5xl leading-none text-white -mt-3">Rockstar</h3>

            </div>
          </div>
          
          <div className="imagesdiv relative overflow-hidden w-full h-screen">

            <img className="absolute top-0 left-0 w-full h-full object-cover"src="./sky.png" alt="" />
            <img className="absolute top-0 left-0 w-full h-full object-cover"src="./bg.png" alt="" />

            <div className="text text-white flex flex-col gap-3 absolute top-20 left-1/2 -translate-x-1/2">
            <h1 className="text-9xl leading-none -ml-40">grand</h1>
            <h1 className="text-9xl leading-none  ml-20">theft</h1>
            <h1 className="text-9xl leading-none -ml-40">auto</h1>

          </div>

            <img className="absolute -bottom-[40%] left-1/2 -translate-x-1/2 scale-[0.6]" src="./girlbg.png" alt="" />
            
          </div>

          <div className="btmbar text-white absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent">
            <div className="flex gap-4 items-center">
              <i class="text-2xl ri-arrow-down-line"></i>
              <h3 className="text-xlfont-[Helvetica_Now_Display]">Scroll Down</h3>
            </div>

            <div>
              <img className="absolute h-[55px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "src="./ps5.png" alt="" />
            </div>
            
          </div>
        </div>
      </div>
     ) }
    </>
  )
}

export default App
