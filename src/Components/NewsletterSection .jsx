import React from 'react';

const NewsletterSection = () => {
  return (
    <div className="bg-primary text-white py-12 px-6 flex flex-col md:flex-row items-start md:items-center justify-between border-b-1 border-gray-400">
      <div className="mb-6 md:mb-0">
        <h2 className="text-lg font-semibold mb-1">Join our newsletter</h2>
        <p className="text-sm text-neutral-content">
          Stay updated with plant care tips, new arrivals, and exclusive offers.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2">
        <input
          type="email"
          placeholder="Your email address"
          className="input input-bordered w-full sm:w-64 bg-transparent text-white placeholder:text-neutral-content"
        />
        <button className="btn bg-lime-500 text-white hover:bg-lime-600">
          Subscribe
        </button>
      </div>
    </div>
  );
};

export default NewsletterSection;
