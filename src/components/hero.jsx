import heroImage from './images/bg.jpeg';
import mentorHero from './images/mentor-hero.png';
import astroji from './images/AstroJi-Logo.png';  
import { useEffect, useState } from "react";

const Hero = () => {
  const totalSlots = 250;
  const maxPercent = 95; // never hit 100%
  const maxEnrolled = Math.floor((maxPercent / 100) * totalSlots); // e.g., 225

  const [enrolled, setEnrolled] = useState(
    Math.floor(0.6 * maxEnrolled) // start around 60%
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setEnrolled((prev) => {
        const next = prev + Math.floor(Math.random() * 2); // increase by 0–1
        return next < maxEnrolled ? next : maxEnrolled;
      });
    }, 3000); // update every 3 sec
    return () => clearInterval(interval);
  }, []);

  const percentFilled = (enrolled / totalSlots) * 100;


  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat text-white min-h-[1350px] md:min-h-[1350px] flex flex-col items-center justify-center"
      style={{ backgroundImage: `url('${heroImage}')` }}>
      <div className="absolute inset-0 bg-black/80 z-0" />
      <div className="w-full flex justify-center absolute top-2 left-0 z-30">
        <img src={astroji} alt="AstroJi Logo" width={130} />
      </div>
      <h2 className="absolute p-2 mt-20 top-0 left-0 w-full text-center text-3xl sm:text-3xl md:text-4xl font-bold pt-14 z-20">
        Join Chaitanyaa Missra's Exclusive <br /><span className='text-primary underline decoration-3 underline-offset-4'>Vastu Masterclass</span>
      </h2>
      <div className="mt-28 w-full relative flex justify-center z-20">
        <div className="absolute left-auto right-auto inset-0 w-52 h-52 rounded-full bg-orange-500 opacity-40 blur-md"></div>
        <img
          src={mentorHero}
          alt="Mentor Chaitanya Missra"
          className="drop-shadow-sm shadow-orange-500 object-fill"
        />
      </div>
      <div className="relative z-20 max-w-2xl md:max-w-4xl px-2">
        <div className="text-4xl text-center sm:text-2xl md:text-3xl font-bold p-5 md:mb-6 max-w-xl">
          Learn Science Backed Powerful Vastu Techniques &{' '}
          <span className="text-4xl sm:text-2xl md:text-3xl font-bold text-primary md:mb-6 max-w-xl">
            Transform Your Home, Business & Life!
          </span>
        </div>
      </div>
      <div className="relative z-20 pt-1 text-center">
        <p className="text-xl font-semibold p-4 sm:text-lg">
          Perfect for beginners & professionals who want to attract health, wealth, and success!
        </p>
      </div>
      <div id='for-registration' className="relative z-10 w-full max-w-2xl mx-auto p-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div className="bg-white backdrop-blur-md p-2 rounded-xl shadow-md">
          <h4 className="text-2xl font-semibold text-gray-600">📅 <span className="text-base">Date</span></h4>
          <p className="text-lg font-bold text-orange-600">19th June 2025</p>
        </div>

        <div className="bg-white backdrop-blur-md p-2 rounded-xl shadow-md">
          <h4 className="text-2xl font-semibold text-gray-600">⏱️<span className="text-base">Time</span></h4>
          <p className="text-lg font-bold text-orange-600">09:00 PM IST</p>
        </div>

        <div className="bg-white backdrop-blur-md p-2 rounded-xl shadow-md">
          <h4 className="text-2xl font-semibold text-gray-600">📍<span className="text-base">Venue</span></h4>
          <p className="text-lg font-bold text-orange-600">Zoom (Online)</p>
        </div>

        <div className="bg-white backdrop-blur-md p-2 rounded-xl shadow-md">
          <h4 className="text-2xl font-semibold text-gray-600">💬<span className="text-base">Language</span></h4>
          <p className="text-lg font-bold text-orange-600">Hindi</p>
        </div>
      </div>
      
      {/* enrollments bar */}
      <div className="w-80 px-4 py-4 bg-white rounded-xl shadow-lg max-w-md mx-auto text-center border border-orange-300 z-30">
        <h3 className="text-lg font-bold text-orange-600 mb-3">
          ⚡Slots Filling Fast!
        </h3>
        <div className="text-sm text-gray-800 mb-1 font-medium">
          {enrolled} out of {totalSlots} slots filled
        </div>
        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden shadow-inner">
          <div
            className="h-full bg-orange-500 transition-all duration-700"
            style={{ width: `${percentFilled}%` }}
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;