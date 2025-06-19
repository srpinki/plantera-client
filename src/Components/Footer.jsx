import React from "react";

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md";
import logoImage from "/logo.png";
import { Link } from "react-router";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-8">
        
        <div>
          <div className="flex items-center mb-4">
            <Link to="/" className="text-2xl font-bold text-primary">
              <img src={logoImage} alt="Logo" />
            </Link>
          </div>
          <p className="text-sm">
            Your personal plant care companion. Track, nurture, and grow your
            indoor jungle with ease.
          </p>
          <div className="flex mt-4 space-x-3 text-gray-400">
            <FaInstagram className="hover:text-white cursor-pointer" />
            <FaFacebookF className="hover:text-white cursor-pointer" />
            <FaTwitter className="hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
                <Link to={"/all-plants"} className="hover:text-white">All Plants</Link>
            </li>
            
          </ul>
        </div>

        {/* Plant Care Guides */}
        <div>
          <h3 className="text-white font-semibold mb-3">Plant Care Guides</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Watering Guide
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Light Requirements
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Pest Control
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Fertilizing Tips
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Seasonal Care
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start">
              <MdEmail className="text-secondary mr-2 mt-1" />
              <span>support@plantera.com</span>
            </li>
            <li className="flex items-start">
              <MdPhone className="text-secondary mr-2 mt-1" />
              <span>+1 (234) 567-890</span>
            </li>
            <li className="flex items-start">
              <MdLocationOn className="text-secondary mr-2 mt-1" />
              <span>
                123 Green Street
                <br />
                Plant City, 90210
              </span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-10 border-t border-gray-700 pt-4 text-sm text-center text-gray-400">
        © 2025 Plantera. All rights reserved.
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:text-white">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
