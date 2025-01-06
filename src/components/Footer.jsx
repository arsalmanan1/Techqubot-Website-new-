import React from "react";
import Section from "./Section";
import { socials } from "../constants";


const Footer = () => {
  return (
    
<footer className="footer bg-base-000 text-base-content p-10 ml-12 mr-12">
  <aside>
    <p>
      <span color="blue">TechQubot Technologies</span>
      <br />
      Providing reliable tech since 2022
      <br/>
      <br/>
      USA: Cypress Suites B, Cypress Hall, 4304 Holly Ct, Tampa, FL 33620, USA
      <br/>
      <br/>
      Pakistan: 8/1E Uppermall Scheme Lahore, PK
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Web Application Development</a>
    <a className="link link-hover">Mobile Application Development</a>
    <a className="link link-hover">E-commerce Solutions </a>
    <a className="link link-hover">AI integration</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Contact</h6>
    <a className="link link-hover">Email: info@TechQubot.com</a>
    <a className="link link-hover">-</a>
    <a className="link link-hover">USA: (+1) 469 549 5659</a>
    <a className="link link-hover">PK: (+92) 320 842 6010</a>
    <a className="link link-hover">-</a>
  </nav>
</footer>
   
  );
};

export default Footer;
