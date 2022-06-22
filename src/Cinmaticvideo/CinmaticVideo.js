import React from 'react';
import Videodata from './Videodata.js'
import { Link } from 'react-router-dom';



function CinmaticVideo() {



    return (
      <div>
           
           <div class="container">
           	 <div class="row">
           	 	 <div class="col-md-12">
           	 	 	
           	 	 	<h3 class="hero_heading">Videos</h3>


           	 	 	<div class="section_padding">
           	 	 		 <div class="row d-flex justify-content-center">
           	 	 		 	<div class="col-xl-9 col-lg-9 col-md-9 col-12">
								  
           	 	 		 		{Videodata.map((e , id)=>{
                                            return (
           	 	 		 		<div class="row mt-4"> 
           	 	 		 			 <div class="col-md-1">
           	 	 		 			 	<div class="row_align">
           	 	 		 			 		<h2 class="video_text_number">{e.id}</h2>
           	 	 		 			 	</div>
           	 	 		 			 </div>
           	 	 		 			 <div class="col-md-5">

           	 	 		 			 	 <Link to={`/cinmaticv/${e.id}`}> <img src={e.url} class="video_thubnail" /> </Link>
           	 	 		 			 </div>
           	 	 		 			 <div class="col-md-5">
           	 	 		 			 	<div class="row_align_title">
           	 	 		 			 	  <Link to={`/cinmaticv/${e.id}`}> <h4 class="video_title">{e.title}</h4> </Link>
           	 	 		 			    </div>
           	 	 		 			 </div>
           	 	 		 			 <div class="col-md-1 d-xl-block d-lg-block d-md-block d-none">
           	 	 		 			 	<div class="row_align">
           	 	 		 			 <Link to={`/cinmaticv/${e.id}`}><button class="btn"><i class="bi bi-play-circle video_play_icon"></i></button></Link>
           	 	 		 			 </div>
           	 	 		 			 </div>
           	 	 		 		</div>
           	 	 		 		);})}
           	 	 		 	</div>
           	 	 		 </div>
           	 	 	</div>

           	 	 </div>
           	 </div>
           </div>

      </div>
  )
}
export default CinmaticVideo;