import { useEffect, useState } from "react";

const CountdownBar = () => {
  const [timeLeft, setTimeLeft] = useState(1740); // 30 minutes = 1800 seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 1800)); // Reset every 30 mins
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return (
    <div className="fixed bottom-0 w-full bg-white text-black py-2 px-2 border-2 border-orange-400 rounded-xl flex flex-col items-center justify-center z-50 shadow-lg">
      <div className="flex flex-col md:items-center text-center space-y-2 md:space-y-0 md:space-x-4">
        <p className="text-sm font-semibold">Limited Time Offer*</p>
        <p className="text-lg font-semibold">
          Closing in
          <span className="text-warning font-bold"> {minutes}</span> Min{" "}
          <span className="text-warning font-bold">{seconds}</span> Sec
        </p>
      </div>
      <a
        href="#for-registration"
        className="mt-3 md:mt-0 w-full bg-primary text-white text-xl px-6 py-2 rounded-xl text-center font-semibold shadow-md animate-bounce hover:scale-105 transition-transform"
      >
        Register Now for <del>₹599</del> <span className="text-2xl">₹0</span>
      </a>
    </div>
    
  );
};

export default CountdownBar;
