import React from 'react';
import video1 from "./bg_video.mp4";
import video2 from "./bg_video1.mp4";

function Heroslider() {
    return (
      <div>
         
         <div class="container mt-5">
         <div id="carouselExampleControls" class="carousel" data-bs-ride="carousel" data-bs-interval="false">
            <div class="carousel-inner">
               <div class="carousel-item active">
               
            

               <video src={video1} width="100%" height="600" autoPlay={"autoplay"} muted loop class="video_fit" />


               </div>
            <div class="carousel-item">

            <video src={video2} width="100%" height="600" autoPlay={"autoplay"} muted loop class="video_fit" />

            </div>
            <div class="carousel-item">
                <video src={video1} width="100%" height="600" autoPlay={"autoplay"} muted loop class="video_fit" />
            </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>

    
        </div>  
        </div>


       
      </div>
    );
  }
  
  export default Heroslider;