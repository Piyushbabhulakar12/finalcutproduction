import React , { useRef , useState } from 'react';
import emailjs from '@emailjs/browser';

function ContactHero() {

   const [name, setName] = useState("");
   const [message, setMessage] = useState("");
   const [email, setEmail] = useState("");
   const [phone, setPhone] = useState("");


const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_adcd7nn', 'template_r4krh7i', form.current, 'TdtEf6ojRcI3WAk5-')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
     setName("");
     setMessage("");
     setEmail("");
     setPhone("");
  };

  return (
    <div>
       
      <div class="container">
      	 <div class="row">
      	 	<div class="col-12">
      	 		<div class="row_spacing">
      	 			<h3 class="hero_heading">Get In Touch</h3>

                    <div class="row m-auto justify-content-center">
                    	<div class="col-8">
                    		<h3 class="hero_heading mt-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</h3>

                           
                          <div class="contact_section">
                          	 <h4 class="contact_heading">Contact</h4>
                           <p class="contact_des">+91 484-5556-44</p>

                           <h4 class="contact_heading">E-Mail</h4>
                           <p class="contact_des">demo@gmail.com</p>
                          </div>

                           <div class="form_section">

                              <form autocomplete="off" ref={form} onSubmit={sendEmail}>
                              <div class="row">
                              	 <div class="col-md-1 margin_top_grid">
                              	 	<h4 class="form_text">I am</h4>
                              	 </div>
                              	 <div class="col-md-5 margin_top_grid">
                              	 	<input type="text" name="from_name" value={name} placeholder="Name" class="form-control form_custom" onChange={(e) => setName(e.target.value)} />
                              	 </div>
                              	 <div class="col-md-6 margin_top_grid">
                              	 	<h4 class="form_text">I Was Wondering if we could Collabrate</h4>
                              	 </div>
                              	  <div class="col-md-2 margin_top_grid">
                              	 	<h4 class="form_text"> For Project</h4>
                              	 </div>
                              	 <div class="col-md-4 margin_top_grid">
                              	 	<input type="text" name="message" value={message} placeholder="Project Name" class="form-control form_custom" onChange={(e) => setMessage(e.target.value)} />
                              	 </div>
                              	 <div class="col-md-6 margin_top_grid">
                              	 	<h4 class="form_text">Project ? You Can Connect with me</h4>
                              	 </div>
                              	  <div class="col-md-1 margin_top_grid">
                              	 	<h4 class="form_text"> at</h4>
                              	 </div>
                              	  <div class="col-md-4 margin_top_grid">
                              	 	<input type="text" name="email" value={email} placeholder="Email Id" class="form-control form_custom"  onChange={(e) => setEmail(e.target.value)} />
                              	 </div>
                              	  <div class="col-md-3 margin_top_grid">
                              	 	<h4 class="form_text">Or Just give our</h4>
                              	 </div>
                              	  <div class="col-md-4 margin_top_grid">
                              	 	<input type="text" name="phone" value={phone} placeholder="Phone" class="form-control form_custom"  onChange={(e) => setPhone(e.target.value)} />
                              	 </div>
                              	 <div class="col-12 margin_top_grid">
                              	 	<button type="submit" class="btn form_btn ">Send</button>
                              	 </div>
                              </div>
</form>

                           </div>


                    	</div>
                    </div>

      	 		</div>
      	 	</div>
      	 </div>
      </div>

    </div>
  );
}

export default ContactHero;