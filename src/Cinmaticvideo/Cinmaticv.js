import React from 'react';
import Videodata from './Videodata.js'
import {useParams} from "react-router-dom";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import { Link } from 'react-router-dom';

const Cinmaticv = () =>{
     
     const {id} = useParams();

     const dataid = {id}

	return(
        <>
           

              
              <div class="container">
           	 <div class="row">
           	 	 <div class="col-md-12">
           	 	 	
           	 	 	


           	 	 	<div class="section_padding">
           	 	 		 <div class="row d-flex justify-content-center">
           	 	 		 	<div class="col-xl-10 col-lg-10 col-md-10 col-12">
								  <h3 class="hero_heading">Videos</h3>

           	 	 		 		{Videodata.filter(data => data.id.includes(id)).map((e)=>{
                                            return (
												<>
												 <iframe src={e.videourl} width="100%" height="550" allow="autoplay" class="iframe_video"></iframe>
												<h3 class="video_title">{e.title}</h3>
												<p>Video For {e.title}</p>
												</>
           	 	 		 		);})}

									  <h3 class="hero_heading mt-5">Suggestions</h3>
                      
                    

                      <div class="row">
                  {Videodata.filter(data => data.id !== id).map((e)=>{
                                            return (
                        <div class="col-md-4 mt-3">
                        <Link to={`/cinmaticv/${e.id}`}>   <img src={e.url} class="video_thubnail" />
                           <h5 class="video_titile_grid">{e.title}</h5>
                           <p class="text_acnhcor mt-1">{e.creater}</p> </Link>
                        </div> 
                          );})}
                      </div>


           	 	 		 	</div>
           	 	 		 </div>
           	 	 	</div>

           	 	 </div>
           	 </div>
           </div>


        </>
  )
}
export default Cinmaticv