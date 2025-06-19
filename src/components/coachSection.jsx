import mentorImg from './images/mentor.png';

const CoachSection = () => {
  return (
    <section className="py-10 bg-gray-100 text-center px-4">
      {/* Heading */}
      <h2 className="text-3xl text-orange-600 md:text-4xl font-bold mb-6">Meet Your Coach</h2>

      {/* Image and Intro */}
      <div className="flex flex-col items-center mb-7">
        <div className="rounded-full border-2 border-orange-500 mb-4 overflow-hidden w-48 h-48 flex items-center justify-center">
          <img src={mentorImg} alt="" className="w-full h-full object-cover" />
        </div>
        
        <h3 className="text-xl text-orange-500 font-extrabold uppercase">Dr. Chaitanyaa Missra</h3>
        <p className="text-gray-600 mt-2 max-w-md text-lg">
          <span className="font-bold">Vastu Expert | Mentor | Numerologist</span><br/>Dr. Chaitanyaa Missra is one of the most respected Vastu and astro-energy alignment experts in India, known for blending classical Vastu with modern-day applications for home, office, and commercial prosperity.
        </p>
      </div>

      {/* Achievements Grid */}
      <div className="grid grid-cols-2 md:grid-cols-2 gap-5 max-w-4xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-2">
          <h4 className="text-2xl font-bold mb-2">🎙️500K+</h4>
          <p className="text-gray-600">
            Successful Councellings.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-2">
          <h4 className="text-2xl font-bold mb-2">🌏200K+</h4>
          <p className="text-gray-600">
            Students trained in 30+ countries.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-2">
          <h4 className="text-2xl font-bold mb-2">⭐15+</h4>
          <p className="text-gray-600">
            Years of Vastu Dosha Correction Mastery
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-2">
          <h4 className="text-2xl font-bold mb-2">🏡1500+</h4>
          <p className="text-gray-600">
            Realigned Commercial Spaces Leading to Business Turnarounds
          </p>
        </div>
      </div>

      {/* a glimpse of class */}
      <div className="mt-10">
        <h3 className="text-2xl text-orange-600 font-bold mb-4">A Glimpse of the Masterclass</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="aspect-video w-full rounded-xl overflow-hidden shadow-md">
            <iframe
              className="w-full h-full"
              src='https://www.youtube.com/embed/VIDEO_ID' // Replace with actual video ID
              title={`Class preview`}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoachSection;
