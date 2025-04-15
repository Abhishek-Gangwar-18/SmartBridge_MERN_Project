import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png"; // Assuming you have a logo

// Define the quick links array
const quickLinks01 = [
  { display: "Home", path: "/home" },
  { display: "About Us", path: "/" },
  { display: "Services", path: "/services" },
  { display: "Blog", path: "/" }
];
const quickLinks02 = [
  { display: "Find a Doctor", path: "/find-a-doctor" },
  { display: "Request an Appointment", path: "/" },
  { display: "Find a Locaiotn", path: "/" },
  { display: "Get a Opinion", path: "/" }
];
const quickLinks03 = [
  { display: "Donate", path: "/" },
  { display: "Contact Us", path: "/contact" }
];

const Footer = () => {
  return (
    <footer className="pb-16 pt-10 text-white">
      <div className="container mx-auto">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          {/* Quick Links Section */}
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">Quick Links </h2>
            <ul>
              {quickLinks01.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor">
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* I want to Section */}
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">I want to: </h2>
            <ul>
              {quickLinks02.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor">
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">Support </h2>
            <ul>
              {quickLinks03.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link to={item.path} className="text-[16px] leading-7 font-[400] text-textColor">
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
