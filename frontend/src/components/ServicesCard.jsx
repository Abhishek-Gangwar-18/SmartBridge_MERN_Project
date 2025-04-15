import React from "react";
import { Link } from "react-router-dom";
import { BiSolidRightArrow } from "react-icons/bi";

const ServicesCard = ({ item, index }) => {
  const { name, desc, bgColor, textColor } = item;

  return (
    <div className="py-[30px] px-3 lg:px-5 relative shadow-lg rounded-lg bg-white">
      {/* Title & Description */}
      <h2 className="text-[26px] leading-9 text-headingColor font-[700]">{name}</h2>
      <p className="text-[16px] leading-7 text-textColor mt-4">{desc}</p>

      {/* Bottom section: Link (Left) & Number (Right) */}
      <div className="flex justify-between items-center mt-[30px]">
        {/* Left: Arrow Button */}
        <Link
          to="/doctors"
          className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] flex items-center justify-center group hover:bg-amber-200 hover:border-none transition"
        >
          <BiSolidRightArrow className="group-hover:text-black" />
        </Link>

        {/* Right: Index Number */}
        <span
          className="w-[44px] h-[44px] flex items-center justify-center text-[18px] leading-[30px] font-[600]"
          style={{
            background: `${bgColor}`,
            color: `${textColor}`,
            borderRadius: "6px 0 0 6px",
          }}
        >
          {index + 1}
        </span>
      </div>
    </div>
  );
};

export default ServicesCard;
