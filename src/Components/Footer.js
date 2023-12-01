import React from "react";
import {Link } from "react-router-dom";
import { BsLinkedin, BsGithub, BsYoutube, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row align-items-center">
            <div className="col-5">
              <div className="footer-top-data d-flex gap-30 align-items-center">
                <img src="images/newsletter.png" alt="newsletter" />
                <h5 className="mb-0 text-white">Sign Up for NewsLetter</h5>
              </div>
            </div>
            <div className="col-7">
              <div class="input-group">
                <input
                  type="text"
                  class="form-control py-1"
                  placeholder="Your email address"
                  aria-label="Your email address"
                  aria-describedby="basic-addon2"
                />
                <span class="input-group-text p-2" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-4">
              <h5 className="text-white">Contact Us</h5>
              <div>
                <address className="text-white fs-7">
                  Madhyapur Thimi, <br /> Bhaktapur, Nepal
                </address>
                <a
                  href="tel: +977 9813673263"
                  className="mt-2 d-block mb-2 text-white"
                >
                  Tel: +977 9813673263
                </a>
                <a
                  href="abhipok4@gmail.com"
                  className="mt-1 d-block mb-1 text-white"
                >
                  abhipok4@gmail.com
                </a>
                <div className="social-icons d-flex align-items-center mt-4 gap-30">
                  <a className="text-white" href="#">
                    <BsLinkedin className="fs-5" />
                  </a>
                  <a className="text-white" href="#">
                    <BsGithub className="fs-5" />
                  </a>
                  <a className="text-white" href="#">
                    <BsYoutube className="fs-5" />
                  </a>
                  <a className="text-white" href="https://www.instagram.com/_darkside_of_the_moon/">
                    <BsInstagram className="fs-5" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <h5 className="text-white">Infomation</h5>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                <Link className="text-white py-2 mb-1">Return Policy</Link>
                <Link className="text-white py-2 mb-1">Delivery Policy</Link>
                <Link className="text-white py-2 mb-1">Terms of Services</Link>
                <Link className="text-white py-2 mb-1">Blogs</Link>
              </div>
            </div>
            <div className="col-3">
              <h5 className="text-white">Account</h5>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">Search</Link>
                <Link className="text-white py-2 mb-1">About Us</Link>
                <Link className="text-white py-2 mb-1">FAQ</Link>
                <Link className="text-white py-2 mb-1">Contact Us</Link>
              </div>
            </div>
            <div className="col-2">
              <h5 className="text-white">Quick Links</h5>
              <div className="footer-link d-flex flex-column">
                <Link className="text-white py-2 mb-1">Smart Watches</Link>
                <Link className="text-white py-2 mb-1">Smart Phones</Link>
                <Link className="text-white py-2 mb-1">Laptops</Link>
                <Link className="text-white py-2 mb-1">Headphones</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-center mb-0 text-white">
                &copy; {new Date().getFullYear()}; Powered by Abhishek Pokharel
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
