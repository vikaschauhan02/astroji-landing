import Hero from './components/hero';
import CoachSection from './components/coachSection';
import RegistrationForm from './components/registrationForm';
import FeedbackSection from './components/feedbackSection';
import WhatWillYouLearn from './components/whatWillYouLearn';
import FaqSection from './components/faqSection';
import Banner from './components/banner';
import CountdownBar from './components/countdownBar';

function App() {
  return (
    <>
    <div className="w-full min-h-screen flex justify-center bg-[#f9fafb]">
      <div className="w-[420px] bg-white shadow-lg">
        <Hero />
        <RegistrationForm />
        <CoachSection />
        <WhatWillYouLearn />
        <FeedbackSection />
        <FaqSection />
        <Banner />
        <CountdownBar />
      </div>
    </div>
    </>
  );
}
export default App;