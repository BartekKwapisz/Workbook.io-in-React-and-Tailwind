import React from 'react'
import videoBg from '../img/video.mp4'

function Homepage() {
  return (
    <>
      <section className="w-full h-nav-footer content ">
            <div className="caption text-4xl">
                    <p className="text-orange-500 font-extrabold">Workbook<span className="text-white">.io</span></p>
                    <p className="text-white text-3xl">Connects employment agencies with employers</p>
            </div>
          <video src={videoBg} autoPlay disablePictureInPicture muted loop className="video"> 
          </video>
         
      </section>
    </>
  );
}

export default Homepage;
