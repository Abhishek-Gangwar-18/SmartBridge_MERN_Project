import React from "react";
import heroimg01 from "../assets/images/hero-img01.png";
import heroimg02 from "../assets/images/hero-img02.png";
import heroimg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import featureImg from "../assets/images/feature-img.png";
import videoIcon from "../assets/images/video-icon.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import faqImg from "../assets/images/faq-img.png";
import { Link } from "react-router-dom";
import { BiSolidRightArrow } from "react-icons/bi";
import About from "../components/About";
import ServicesList from "../components/ServicesList";
import DoctorList from "../components/DoctorList";
import FaqList from "../components/FaqList";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero__section pt-[60px] h-[800px] flex items-center">
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-center">

            {/* Left Text Content */}
            <div className="lg:w-[570px] text-center lg:text-left">
              <h1 className="text-[36px] leading-[46px] text-orange-300 font-[800] md:text-[60px] md:leading-[70px]">
                We help patients live a healthy, longer life.
              </h1>
              <p className="text__para">
                
              </p>
              <button className="btn">Request</button>
            </div>

            {/* Right Image Content */}
            <div className="flex gap-[30px] justify-center lg:justify-end">
              <div>
                <img className="w-full" src={heroimg01} alt="Hero 1" />
              </div>
              <div className="mt-[30px]">
                <img src={heroimg02} alt="Hero 2" className="w-full mb-[30px]" />
                <img src={heroimg03} alt="Hero 3" className="w-full" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Service Section */}
      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">Providing the best Medical services</h2>
            <p className="text__para text-center">World-class care for everyone. Our haleth cyctem offers unmatched, experts health care.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center"><img src={icon01} alt="" /></div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-amber-950 front-[700] text-center">Find a Doctor</h2>
                <p className="text-[16px] leading-7 text-blue-300 font-[400] mt-4 text-center">World-class care for everyone. Our haleth cyctem offers unmatched, experts health care. From the lab to the clinic</p>

                <Link to="/doctors" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] my-[30px] mx-auto flex items-center justify-center gruop hover:bg-primaryColor hover:border-none">
                  <BiSolidRightArrow className="group-hover:text-center-h5"></BiSolidRightArrow>
                </Link>
              </div>
            </div>
            <div className="py-[30px] px-5">
              <div className="flex items-center justify-center"><img src={icon02} alt="" /></div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-amber-950 front-[700] text-center">Find a Doctor</h2>
                <p className="text-[16px] leading-7 text-blue-300 font-[400] mt-4 text-center">World-class care for everyone. Our haleth cyctem offers unmatched, experts health care. From the lab to the clinic</p>

                <Link to="/doctors" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] my-[30px] mx-auto flex items-center justify-center gruop hover: text-blue-900">
                  <BiSolidRightArrow className="group-hover:text-center-h5"></BiSolidRightArrow>
                </Link>
              </div>
            </div><div className="py-[30px] px-5">
              <div className="flex items-center justify-center"><img src={icon03} alt="" /></div>

              <div className="mt-[30px]">
                <h2 className="text-[26px] leading-9 text-amber-950 front-[700] text-center">Find a Doctor</h2>
                <p className="text-[16px] leading-7 text-blue-300 font-[400] mt-4 text-center">World-class care for everyone. Our haleth cyctem offers unmatched, experts health care. From the lab to the clinic</p>

                <Link to="/doctors" className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] my-[30px] mx-auto flex items-center justify-center gruop hover: text-blue-900">
                  <BiSolidRightArrow className="group-hover:text-center-h5"></BiSolidRightArrow>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About />

      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our Medical Services</h2>
            <p className="text__para text-center">
              World class care for everyone, our health system offers unmatched expert health care.
            </p>
          </div>
          <ServicesList />
        </div>
      </section>

      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            <div className="xl:w-[670px]">
              <h2 className="heading">Get virtual tratment <br />anytime.</h2>
              <ul className="pl-4">
                <li className="text__para">1. Schedule the appointment directly.</li>
                <li className="text__para">2. Seacrh for your physician here, and contact their office.</li>
                <li className="text__para">3. View our physicic who are accepting nre patients, use the online schediuling tool to select an appointent time.</li>
              </ul>
              <Link to="/"> <button className="btn"> Leanr More.</button></Link>
            </div>

            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} className="w-3/4" alt="" />

              <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6ox] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14x] lg:leading-5 text-headingColor font-[600]">
                      Tue,24
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14x] lg:leading-5 text-textColor font-[400]">10:00 AM</p>
                  </div>
                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]"><img src={videoIcon} alt="" /></span>
                </div>

                <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">Consultation</div>
                <div className="flex items-center gap-[6px] lg:gap[10px] mt-2 lg:mt-[18px]"><img src={avatarIcon} alt="" />
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">Abhishek Gangwar</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="lg:w-[470px] mx-auto">
            <h2 className="heading text-center">Our great doctors</h2>
            <p className="text__para text-center">World-class care for everyone. Our haleth cyctem offers unmatched, experts health care.</p>
          </div>

          <DoctorList />

        </div>
      </section>

      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faqImg} alt="" /></div>
            <div className="w-full md:w-1/2">
              <h2 className="heading">Most questions by our beloves patiendts.</h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>


    </>
  );
};

export default Home;
