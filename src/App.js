import logo from './logo.svg';
import './App.css';
import { Router, Routes, Route, Link } from "react-router-dom";
import Home from './Home.js';
import Contact from './Contact.js';
import Menu from './Menu.js';
import CinmaticVideo from './Cinmaticvideo/CinmaticVideo.js';
import Cinmaticv from './Cinmaticvideo/Cinmaticv.js';
import Footer from './Home/Footer.js';


function App() {
  return (
    <div>
       <Menu/>
           
    
       <Routes>
        <Route path="/demo-rect-app" exact element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/cinmatic-video" element={<CinmaticVideo/>} />
        <Route path="/cinmaticv/:id" element={<Cinmaticv/>} />
      </Routes>

      <Footer/>


    </div>
  );
}

export default App;
