import React, { useState } from "react";
import { motion } from "framer-motion";

const Contact_us = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));

    // Simulate form submission
    try {
      // Replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: "Message sent successfully!" },
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus({
        submitted: false,
        submitting: false,
        info: {
          error: true,
          msg: "An error occurred. Please try again later.",
        },
      });
    }
  };

  return (
    <div className="min-h-screen bg-base-200 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-md mx-auto bg-base-100 rounded-lg shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300"
      >
        <motion.h2 
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 bg-clip-text text-transparent"
        >
          Contact Us
        </motion.h2>

        {status.info.msg && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className={`alert ${status.info.error ? "alert-error" : "alert-success"} mb-4`}
          >
            <span>{status.info.msg}</span>
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <motion.div whileHover={{ scale: 1.01 }} className="form-control">
            <label className="label" htmlFor="name">
              <span className="label-text font-medium">Name</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input input-bordered w-full transition-all duration-300 focus:input-primary"
              required
              placeholder="Enter your name"
            />
          </motion.div>

          <motion.div whileHover={{ scale: 1.01 }} className="form-control">
            <label className="label" htmlFor="email">
              <span className="label-text font-medium">Email</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input input-bordered w-full transition-all duration-300 focus:input-primary"
              required
              placeholder="your@email.com"
            />
          </motion.div>

          <motion.div whileHover={{ scale: 1.01 }} className="form-control">
            <label className="label" htmlFor="subject">
              <span className="label-text font-medium">Subject</span>
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="input input-bordered w-full transition-all duration-300 focus:input-primary"
              required
              placeholder="What's this about?"
            />
          </motion.div>

          <motion.div whileHover={{ scale: 1.01 }} className="form-control">
            <label className="label" htmlFor="message">
              <span className="label-text font-medium">Message</span>
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="textarea textarea-bordered w-full h-32 transition-all duration-300 focus:textarea-primary"
              required
              placeholder="Your message here..."
            />
          </motion.div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`btn btn-primary w-full ${status.submitting ? "loading" : ""}`}
            disabled={status.submitting}
          >
            {status.submitting ? "Sending..." : "Send Message"}
          </motion.button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact_us;
