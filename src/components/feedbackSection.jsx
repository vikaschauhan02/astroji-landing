import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import dummyImage from "./images/user-placeholder.png"; // Placeholder image for feedback

const feedbacks = [
  {
    type: "text",
    name: "Sumit Sharma",
    place: "Delhi",
    feedback: "This masterclass was truly eye-opening! I implemented 3 techniques and saw immediate improvements in my home energy.",
  },
  {
    type: "video",
    videoUrl: "/videos/feedback1.mp4", // Portrait video
  },
  {
    type: "text",
    name: "Sakshi Verma",
    place: "Mumbai",
    feedback: "Chaitanya Sir is a gem! Loved every minute of the session. Highly recommended!",
  },
  {
    type: "text",
    name: "Saurabh Kumar",
    place: "West Bengal",
    feedback: "Jo Jo chaitanya sir ne bola, wo sab karne se ghar ka energy level badh gaya. Bahut hi badiya masterclass hai!",
  },
  {
    type: "video",
    videoUrl: "/videos/feedback2.mp4",
  },
  {
    type: "text",
    name: "Anjali Gupta",
    place: "Bangalore",
    feedback: "I always thought all this is just a gimmik, but this masterclass changed my perspective on home energy. The tips are practical and easy to follow.",
  },
];

const FeedbackCarousel = () => {
  const [current, setCurrent] = useState(0);
  const total = feedbacks.length;

  const prev = () => setCurrent((current - 1 + total) % total);
  const next = () => setCurrent((current + 1) % total);

  const feedback = feedbacks[current];

  return (
    <section className="py-10 px-4 max-w-md mx-auto relative text-center">
      <h2 className="text-2xl font-bold mb-1 text-orange-600">Still Having Doubts?</h2>
      <p className="text-lg text-gray-500">Hear what our students have to say.</p>
      <div className="bg-white rounded-xl shadow-xl p-4 min-h-[400px] flex flex-col items-center justify-center relative overflow-hidden">
        {/* Feedback Content */}
        {feedback.type === "text" ? (
          <div className="flex flex-col items-center">
            <img
              src={dummyImage}
              alt={feedback.name}
              className="w-16 rounded-full object-cover mb-2"
            />
            <div className="font-bold text-lg">{feedback.name}</div>
            <div className="text-sm text-gray-500">{feedback.place}</div>
            <p className="mt-4 text-sm text-gray-800 px-2">{feedback.feedback}</p>
          </div>
        ) : (
          <video
            src={feedback.videoUrl}
            controls
            className="w-full h-[400px] object-cover rounded-lg"
          />
        )}

        {/* Arrows */}
        <button
          className="absolute top-1/2 left-2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md"
          onClick={prev}
        >
          <ChevronLeft size={20} />
        </button>
        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 p-2 bg-white rounded-full shadow-md"
          onClick={next}
        >
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default FeedbackCarousel;
