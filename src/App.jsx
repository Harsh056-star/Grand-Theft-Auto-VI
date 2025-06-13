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
  });

  useGSAP(()=>{

    const main = document.querySelector(".main");

    main?.addEventListener("mousemove", function(e){
      // console.log(e.clientX, e.clientY)
      const xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      
      gsap.to(".main .text", {
      x:`${xMove * 0.4}%`,
      });

      gsap.to(".sky", {
      x: xMove,
      });

      gsap.to(".bg", {
      x: xMove * 1.7,
      });

    });

  },[showContent]);

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

              <div className="lines flex flex-col gap-[6px]">
                <div className="line w-11 h-1 bg-white"></div>
                <div className="line w-7 h-1 bg-white"></div>
                <div className="line w-4 h-1 bg-white"></div>
              </div>

              <h3 className="text-3xl leading-none text-white -mt-2">Rockstar</h3>

            </div>
          </div>
          
          <div className="imagesdiv relative overflow-hidden w-full h-screen">

            <img className="absolute sky scale-[1.2] top-0 left-0 w-full h-full object-cover"src="./sky.png" alt="" />
            <img className="absolute scale-[1.1] bg top-0 left-0 w-full h-full object-cover" src="./bg.png" alt="" />

            <div className="text text-white flex flex-col gap-3 absolute top-20 left-1/2 -translate-x-1/2">
            <h1 className="text-9xl leading-none -ml-40">grand</h1>
            <h1 className="text-9xl leading-none  ml-20">theft</h1>
            <h1 className="text-9xl leading-none -ml-40">auto</h1>

          </div>

            <img className="absolute character -bottom-[68%] left-1/2 -translate-x-1/2 scale-[0.8]" src="./girlbg.png" alt="" />
            
          </div>

          <div className="btmbar text-white absolute bottom-0 left-0 w-full py-15 px-10 bg-gradient-to-t from-black to-transparent">
            <div className="flex gap-4 items-center">
              <i className="text-2xl ri-arrow-down-line"></i>
              <h3 className="text-xlfont-[Helvetica_Now_Display]">Scroll Down</h3>
            </div>

            <div>
              <img className="absolute h-[55px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 "src="./ps5.png" alt="" />
            </div>
          </div>
        </div>
        <div className="w-full h-screen flex items-center justify-center bg-black">
          <div className="cntnr flex text-white w-full h-[80%]">
          <div className="limg relative w-1/2 h-full">
            <img className="absolute scale-[0.8] top-1/2 left-1/2 -translate-x-1/2 -translate-1/2" src="./imag.png" alt="" />
          </div>
          <div className="rg w-[30%] py-5">
            <h1 className="text-7xl">Still Rollin</h1>
            <h1 className="text-7xl">Not Hunting</h1>
            <p className="mt-10 text-1xl font-[Helvetica_Now_Display]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates aspernatur accusamus, harum nesciunt facilis minus excepturi necessitatibus mollitia quis inventore at nulla repellat! Natus perferendis iure reiciendis molestias, saepe consequatur officia consequuntur assumenda velit alias!</p>
            <p className="mt-10 text-1xl font-[Helvetica_Now_Display]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptatum quidem animi velit amet non a fugiat quo? Placeat, eius!</p>
            <button className="bg-red-700 mt-10 px-10 py-10 text-3xl text-black">Download Now</button>
          </div>
          </div>
        </div>
      </div>
     ) }
    </>
  )
}

export default App
