import React, { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name || !email || !message) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    setSubmitted(true);
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Contact Me
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* LEFT: Contact Details */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-semibold text-blue-700 mb-4">
              Let's Connect
            </h3>
            <p className="mb-2">
              <strong>Email:</strong> kkarthik1542734@gmail.com
            </p>
            <p className="mb-2">
              <strong>Phone:</strong> 7812856527
            </p>
            <p className="mb-2">
              <strong>Location:</strong> Coimbatore, Tamil Nadu
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            {submitted && (
              <div className="bg-green-100 text-green-700 px-4 py-2 rounded-md">
                Thanks for your message!
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
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
