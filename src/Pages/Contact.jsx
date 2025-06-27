import React from "react";

const Contact = () => {
  return (
    <div className="bg-[#f7fbf2] text-white min-h-screen py-12 px-4 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Contact Form */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#69af07] mb-6">Get in Touch</h2>
          <p className="text-primary mb-8 leading-relaxed">
            We'd love to hear from you! Whether you have questions about plant care, feedback on the app, or just want to say hi, reach out and we’ll respond as soon as possible.
          </p>

          <form className="space-y-4">
            <div>
              <label className="block text-sm mb-1 text-primary">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full bg-[#1e1e1e] border-[#69af07] text-primary"
              />
            </div>
            <div>
              <label className="block text-sm mb-1 text-primary">Email</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="input input-bordered w-full bg-[#1e1e1e] border-[#69af07] text-primary"
              />
            </div>
            <div>
              <label className="block text-sm mb-1 text-primary">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message here..."
                className="textarea textarea-bordered w-full bg-[#1e1e1e] border-[#69af07] text-primary"
              ></textarea>
            </div>
            <button
              type="submit"
              className="btn bg-[#69af07] text-primary hover:bg-[#5a9806] transition-all"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info / Image */}
        <div className="flex flex-col justify-between h-full">
          <div>
            <h3 className="text-2xl font-semibold text-[#69af07] mb-4">Contact Info</h3>
            <ul className="text-primary space-y-3 text-sm">
              <li>
                <strong>Email:</strong> support@plantera.com
              </li>
              <li>
                <strong>Phone:</strong> +880 1234-567890
              </li>
              <li>
                <strong>Address:</strong> 123 Green Leaf Rd, Dhaka, Bangladesh
              </li>
              <li>
                <strong>Hours:</strong> Mon - Fri, 9AM - 6PM
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
