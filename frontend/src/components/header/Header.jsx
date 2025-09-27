import React from "react";

const Header = () => {
  return (
    <div className='relative min-h-[40vh] md:h-[38vw] rounded-xl  m-3 bg-[url("/header_img.png")] bg-contain md:bg-cover bg-no-repeat '>
      <div className="absolute flex flex-col items-start gap-[1.5vw] max-w-[51%] bottom-[30%] md:bottom-[10%] left-[7.8vw] animate__animated animate__fadeIn">
        <h2 className="font-medium text-[5.5vw]  leading-tight text-white ">
          Order your favourite food here
        </h2>
        <p className="text-white text-[1.2vw] mr-40 hidden md:block">
          Choose from a diverse menu filled with fresh ingredients, authentic
          recipes, and culinary expertise. Every dish is crafted to create a
          delightful dining journey—one that satisfies your cravings and brings
          people together around the table.
        </p>
        <button className="font-medium text-xs md:text-xl p-2 md:py-3 md:px-6  texxt-[#747474] bg-white rounded-full">View Menu</button>
      </div>
    </div>
  );
};

export default Header;
