import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div>
     



      <nav class="navbar navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Final Cut</a>
    <button class="btn menu_icon mobile_menu_btn" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"><i class="fa fa-bars" aria-hidden="true"></i></button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav m-auto">
        <li class="nav-item">
          <Link class="nav-link navbar_text" to="/demo-rect-app">Home</Link>
        </li>
        <li class="nav-item">
         <Link class="nav-link navbar_text" to="/contact">About Us</Link>
        </li>
        <li class="nav-item">
          <a class="nav-link navbar_text" href="#">Team</a>
        </li>
        <li class="nav-item">
          <a class="nav-link navbar_text" href="#">Work</a>
        </li>
        <li class="nav-item">
          <a class="nav-link navbar_text" href="#">Picture</a>
        </li>
         <li class="nav-item">
           <Link class="nav-link navbar_text" to="/contact">Contact</Link>
        </li>
      </ul>
    <button class="btn menu_icon" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"><i class="fa fa-bars" aria-hidden="true"></i></button>
    </div>
  </div>
</nav>


<div class="offcanvas offcanvas-end menu_siderbar" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title logo_bold" id="offcanvasExampleLabel">Final Cut</h5>
    <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    
           

           <div class="container mt-4">
               <div class="row">
                   <div class="col-md-5">
                       
                       <h3 class="font_600">Cinematic Videos</h3>
                       <p class="paragraph_text">Lorem Ipsum is simply dummy text of the printing Lorem <br></br>Ipsum is simply dummy text of the printing </p>

                   </div>
                   <div class="col-md-3">
                   <p class="paragraph_text">Lorem Ipsum is simply dummy text of the printing Lorem <br></br>Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem <br></br>Ipsum is simply dummy text of the printing Lorem Ipsum</p>

                   </div>
                   <div class="col-md-4">
                       
                      <Link to="/cinmatic-video"><button data-bs-dismiss="offcanvas" class="btn btn-dark float-end rounded-pill btn_spas shadow-lg"><i class="fa fa-angle-right" aria-hidden="true"></i></button></Link>

                   </div>
               </div>
           </div>

           <hr></hr>

           <div class="container mt-5">
               <div class="row">
                   <div class="col-md-5">
                       
                       <h3 class="font_600">Traditional Videos</h3>
                       <p class="paragraph_text">Lorem Ipsum is simply dummy text of the printing Lorem <br></br>Ipsum is simply dummy text of the printing </p>

                   </div>
                   <div class="col-md-3">
                   <p class="paragraph_text">Lorem Ipsum is simply dummy text of the printing Lorem <br></br>Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem <br></br>Ipsum is simply dummy text of the printing Lorem Ipsum</p>

                   </div>
                   <div class="col-md-4">
                       
                   <button class="btn btn-dark float-end rounded-pill btn_spas"><i class="fa fa-angle-right" aria-hidden="true"></i></button>

                   </div>
               </div>
           </div>

           <hr></hr>

           <div class="container mt-5">
               <div class="row">
                   <div class="col-md-5">
                       
                       <h3 class="font_600">Corporate Videos</h3>
                       <p class="paragraph_text">Lorem Ipsum is simply dummy text of the printing Lorem <br></br>Ipsum is simply dummy text of the printing </p>

                   </div>
                   <div class="col-md-3">
                   <p class="paragraph_text">Lorem Ipsum is simply dummy text of the printing Lorem <br></br>Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem <br></br>Ipsum is simply dummy text of the printing Lorem Ipsum</p>

                   </div>
                   <div class="col-md-4">
                       
                   <button class="btn btn-dark float-end rounded-pill btn_spas"><i class="fa fa-angle-right" aria-hidden="true"></i></button>

                   </div>
               </div>
           </div>

           <hr></hr>

           <div class="container mt-5">
               <div class="row">
                   <div class="col-md-5">
                       
                       <h3 class="font_600">Photo Edits</h3>
                       <p class="paragraph_text">Lorem Ipsum is simply dummy text of the printing Lorem <br></br>Ipsum is simply dummy text of the printing </p>

                   </div>
                   <div class="col-md-3">
                   <p class="paragraph_text">Lorem Ipsum is simply dummy text of the printing Lorem <br></br>Ipsum is simply dummy text of the printing Lorem Ipsum is simply dummy text of the printing Lorem <br></br>Ipsum is simply dummy text of the printing Lorem Ipsum</p>

                   </div>
                   <div class="col-md-4">
                       
                   <button class="btn btn-dark float-end rounded-pill btn_spas"><i class="fa fa-angle-right" aria-hidden="true"></i></button>

                   </div>
               </div>
           </div>


      

  



  </div>
</div>



     

    </div>
  );
}

export default Contact;