import React, { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState("idle"); // idle | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mvzogrrn", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Interested in working together? Let’s connect!
        </p>
      </div>

      {/* Contact Box */}
      <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl font-semibold text-white text-center">
          Get in Touch 🚀
        </h3>

        {/* SUCCESS MESSAGE */}
        {status === "success" && (
          <p className="mt-6 text-green-400 text-center font-semibold">
            Thanks for reaching out! I’ll get back to you soon 😊
          </p>
        )}

        {/* ERROR MESSAGE */}
        {status === "error" && (
          <p className="mt-6 text-red-400 text-center font-semibold">
            Something went wrong. Please try again.
          </p>
        )}

        {/* FORM */}
        {status !== "success" && (
          <form
            onSubmit={handleSubmit}
            className="mt-4 flex flex-col space-y-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              required
              className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
            />

            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              required
              className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
            />

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-3 text-white font-semibold rounded-md hover:opacity-90 transition disabled:opacity-50"
            >
              {status === "loading" ? "Sending..." : "Get in Touch"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
