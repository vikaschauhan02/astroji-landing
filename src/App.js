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
      <Hero />
      <RegistrationForm />
      <CoachSection />
      <WhatWillYouLearn />
      <FeedbackSection />
      <FaqSection />
      <Banner />
      <CountdownBar />
    </>
  );
}
export default App;