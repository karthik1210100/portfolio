import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

import emailjs from '@emailjs/browser';

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    await emailjs.send(
      'service_lwsmi6j', 
      'contact_form', 
      formData,
      'STlzh-vj4RXZROLUt' 
    );
    setSubmitted(true);
  } catch (error) {
    alert('Failed to send: ' + error.text);
  }
};

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name || !email || !message) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    setIsLoading(true);

    try {
      const emailData = {
        ...formData,
        time: new Date().toLocaleString()
      };

      await emailjs.send(
        'service_lwsmi6j', 
        'template_l930zht',
        emailData,
        'STlzh-vj4RXZROLUt' 
      );

      alert('Message sent successfully!');

      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert(`Failed to send message. Please try again later. Error: ${error.text || error.message}`);
    } finally {
      setIsLoading(false);
      setTimeout(() => setSubmitted(false), 3000);
    }
  };

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-3">
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-blue-500" />
              kkarthik1542734@gmail.com
            </p>
            <p className="flex items-center gap-2">
              <FaPhoneAlt className="text-green-500" />
              +91 7812856527
            </p>
            <p className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-red-500" />
              Coimbatore, Tamil Nadu
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {submitted && (
              <div className="bg-green-100 text-green-700 px-4 py-2 rounded-md">
                Thanks for your message! I'll get back to you soon.
              </div>
            )}

            <div>
              <label className="block font-medium">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded-md"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label className="block font-medium">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded-md"
                placeholder="Your email"
                required
              />
            </div>

            <div>
              <label className="block font-medium">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 px-4 py-2 rounded-md"
                rows="4"
                placeholder="Your message"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;