import React from "react";
import carCoffeeBg from "../assets/images/car_coffee_bg.png";

const Home: React.FC = () => {
  return (
    <div
      className="min-h-screen w-full bg-cover bg-center bg-no-repeat flex flex-col items-center justify-center relative"
      style={{ backgroundImage: `url(${carCoffeeBg})`, opacity: 0.9 }}
    >
      <div className="absolute inset-0 bg-black/10 z-0" /> {/* Optional overlay for readability */}
      <div className="relative z-10 px-4 sm:px-6 max-w-4xl ml-[10px] sm:ml-4 sm:mr-12 lg:mr-[520px] lg:mt-[-200px]">
        <h1
          className="text-orange-100 font-pt-serif font-bold tracking-title text-title sm:text-6xl md:text-7xl lg:text-title text-center w-full max-w-[1104px] mx-auto mr-8 mt-[-40px] text-shadow-title animate-[fadeIn_1s_ease-out]"
        >
          GQ & Good Coffee
        </h1>
        <p
          className="text-orange-100 font-lato italic font-normal text-subtitle sm:text-2xl md:text-3xl lg:text-subtitle text-center w-full max-w-[1014px] mx-auto mt-4 sm:mt-6 text-shadow-title animate-[fadeIn_1s_ease-out]"
        >
          Where quality service meets exceptional coffee
        </p>
      </div>
    </div>
  );
};

export default Home;