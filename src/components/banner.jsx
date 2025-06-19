import { useEffect, useState } from "react";
import giftBoxImg from "./images/gift-box.png"; 
import { X } from "lucide-react";

const Banner = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [bannerClosed, setBannerClosed] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!bannerClosed) setShowBanner(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, [bannerClosed]);

  const closeBanner = () => {
    setShowBanner(false);
    setBannerClosed(true);
  };

  const reopenBanner = () => {
    setShowBanner(true);
  };

  return (
    <>
      {/* Banner */}
      {showBanner && (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-[90%] max-w-md bg-white text-black p-4 rounded-xl shadow-2xl border-2 border-orange-400">
          <div className="flex justify-between items-center mb-2">
            <h3 className="text-xl font-bold">🎁 A Special Gift for You!</h3>
            <button onClick={closeBanner} className="text-gray-600 hover:text-black">
              <X />
            </button>
          </div>
          <p className="mt-4 text-xl font-bold text-center">
            <span style={{color: '#ff0000' }}>REGISTER NOW</span> & Get <span className="text-primary">VASTU E-Book </span>worth ₹799/- for <br /><span style={{fontSize: '30px', color: 'lime'}}> FREE !!</span>
          </p>
        </div>
      )}

      {/* Gift Box Trigger */}
      {!showBanner && bannerClosed && (
        <div
          onClick={reopenBanner}
          className="fixed bottom-[130px] right-[-30px] transform -translate-x-1/2 z-40 cursor-pointer animate-pulse"
        >
          <div className="relative w-16 h-16">
            <div className="absolute inset-0 rounded-full bg-orange-500 opacity-40 blur-xl animate-ping"></div>
            <img
              src={giftBoxImg}
              alt="Open Gift"
              className="relative z-10 w-12"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Banner;
