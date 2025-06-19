// src/components/FaqSection.jsx
import { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const faqData = [
  {
    question: "Is this masterclass beginner-friendly?",
    answer: "Yes! The session is designed for complete beginners as well as those with some Vastu background.",
  },
  {
    question: "Do I need any prior Vastu knowledge?",
    answer: "No prior knowledge is required. Everything will be taught from scratch using logical and scientific explanations.",
  },
  {
    question: "My home is built already—can Vaastu still help me?",
    answer: "Yes. Even if structural changes aren't possible, remedies like yantras, mirrors, and energy corrections can balance the space and reduce the negative effects of doshas.",
  },
  {
    question: "I don't understand Vaastu much—will this session be too technical?",
    answer: "Not at all. This session is designed for beginners. You'll get simple, practical insights along with ready-to-use solutions you can apply right away.",
  },
  {
    question: "Is there any certificate after the masterclass?",
    answer: "While this session is more value-oriented than certification, you may be offered a certificate if a future advanced program is taken.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white mb-52 px-4 max-w-2xl mx-auto">
      <h2 className="text-2xl text-orange-600 sm:text-3xl m-2 font-bold text-center">Frequently Asked Questions</h2>
      <p className=" text-lg mb-3 text-center text-gray-500">Answers to some frequently asked doubts.</p>
      <div className="space-y-4">
        {faqData.map((faq, index) => (
          <div key={index} className="border rounded-lg overflow-hidden shadow-sm">
            <button
              onClick={() => toggleFaq(index)}
              className="w-full flex justify-between items-center px-4 py-3 text-left font-medium text-gray-800 hover:bg-gray-100"
            >
              <span>{faq.question}</span>
              <span className="ml-4 text-orange-500">
                {openIndex === index ? <FaMinus /> : <FaPlus />}
              </span>
            </button>
            <div
              className={`transition-all duration-300 ease-in-out px-4 overflow-hidden ${
                openIndex === index ? 'max-h-40 py-2' : 'max-h-0'
              }`}
            >
              <p className="text-gray-600 text-sm">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FaqSection;
