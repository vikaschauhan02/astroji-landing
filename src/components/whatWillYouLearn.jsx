// src/components/WhatYouWillLearn.jsx

const WhatYouWillLearn = () => {
  const points = [
    "✅ Understand the core principles of Vastu in a logical way.",
    "✅ Identify energy blockages in your home or office.",
    "✅ Practical Vastu remedies backed by science.",
    "✅ Case studies of successful Vastu transformations.",
    "✅ How Vastu impacts health, wealth & relationships.",
    "✅ DIY techniques to instantly improve space energy.",
  ];

  return (
    <section className="py-12 px-4 bg-white text-black">
      <h2 className="text-2xl sm:text-3xl text-orange-600 mb-1 font-bold text-center">
        What Will You Learn?
      </h2>
      <p className=" text-lg mb-3 text-center text-gray-500">A small effort, and lots of learning.</p>
      <ul className="space-y-4 max-w-md mx-auto text-left text-[15px] sm:text-base">
        {points.map((point, index) => (
          <li key={index} className="flex items-start">
            <span className="text-green-500 text-xl mr-2">✔</span>
            <span>{point.replace(/^✅ /, '')}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default WhatYouWillLearn;
