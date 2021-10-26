import { faFacebookF, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer class="footer">
  	 <div class="container">
  	 	<div class="row">
  	 		<div class="footer-col">
  	 			<h4>Medical Center</h4>
  	 			<ul>
  	 				<li><NavLink to="#">about us</NavLink></li>
  	 				<li><NavLink to="#">our services</NavLink></li>
  	 				<li><NavLink to="#">privacy policy</NavLink></li>
  	 				<li><NavLink to="#">affiliate program</NavLink></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>get help</h4>
  	 			<ul>
  	 				<li><NavLink to="#">FAQ</NavLink></li>
  	 				<li><NavLink to="#">Choosing a doctor</NavLink></li>
  	 				<li><NavLink to="#">Health journals</NavLink></li>
  	 				<li><NavLink to="#">Insurance converage</NavLink></li>
  	 				<li><NavLink to="#">Talking to your doctor</NavLink></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>PATIENT GUIDE</h4>
  	 			<ul>
  	 				<li><NavLink to="#">@medikal Duis autem vel eum iriure</NavLink></li>
  	 				<li><NavLink to="#">@medikal dolor in hendrerit in molestie</NavLink></li>
  	 				<li><NavLink to="#">@medikal Sweets and Bakers WordPress</NavLink></li>
  	 				<li><NavLink to="#">@medikal dolor in hendrerit in molestie</NavLink></li>
  	 			</ul>
  	 		</div>
  	 		<div class="footer-col">
  	 			<h4>follow us</h4>
  	 			<div class="social-links">
  	 				<NavLink to="#"><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></NavLink>
  	 				<NavLink to="#"><FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon></NavLink>
  	 				<NavLink to="#"><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></NavLink>
  	 				<NavLink to="#"><FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon></NavLink>
  	 			</div>
  	 		</div>
  	 	</div>
           
  	 </div>
       <p className ="text-white text-center m-4 mt-4"><small>&copy; 2021 Medical Center.All rights are reserved by Medical Center</small></p>
  </footer>
        </div>
    );
};

export default Footer;