// src/components/RegistrationForm.jsx

import { useState } from 'react';

const RegistrationForm = () => {
  const [form, setForm] = useState({ name: '', email: '', contact: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
    // TODO: Add submission logic
  };

  return (
    <div id="registration-form" className="relative z-30">
      <div
        className="w-[90%] mx-auto -mt-40 bg-white border-2 border-borderLight border-t-none rounded-2xl shadow-2xl p-5 md:p-8 flex flex-col gap-4 items-center justify-center"
      >
        <p className='text-xl font-bold text-center text-orange-500'>Book your slot by just confirming your details.</p>
        <input
          type="text"
          name="name"
          placeholder="Full Name*"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address*"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <input
          type="tel"
          name="contact"
          placeholder="Contact Number*"
          value={form.contact}
          onChange={handleChange}
          required
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-400"
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full px-6 py-3 bg-orange-500 text-white font-bold rounded-2xl hover:bg-orange-600 transition"
        >
          Register Now For ₹0
        </button>
      </div>
    </div>
  );
};

export default RegistrationForm;
