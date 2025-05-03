import React, { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    // Add your email subscription logic here
    setTimeout(() => setIsSubmitted(false), 3000);
    setEmail("");
  };

  return (
    <footer className="footer bg-base-200 text-base-content p-10">
      <nav className="space-y-3">
        <h6 className="footer-title">Quick Links</h6>
        <a
          href="/"
          className="link link-hover hover:text-primary transition-colors flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
          Home
        </a>
        <a
          href="/projects"
          className="link link-hover hover:text-primary transition-colors flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
            />
          </svg>
          Projects
        </a>
        <a
          href="/about"
          className="link link-hover hover:text-primary transition-colors flex items-center gap-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
          About
        </a>
      </nav>

      <nav className="space-y-3">
        <h6 className="footer-title">Connect</h6>
        <div className="grid grid-flow-col gap-4">
          {[
            { icon: "github", url: "https://github.com/yourusername" },
            { icon: "linkedin", url: "https://linkedin.com/in/yourusername" },
            { icon: "twitter", url: "https://twitter.com/yourusername" },
          ].map(({ icon, url }) => (
            <a
              key={icon}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-ghost btn-square hover:text-primary transition-colors"
            >
              <img
                src={`https://api.iconify.design/mdi/${icon}.svg`}
                className="w-6 h-6"
                alt={icon}
              />
            </a>
          ))}
        </div>
      </nav>

      <form onSubmit={handleSubmit} className="w-full md:w-80">
        <h6 className="footer-title">Stay Updated</h6>
        <fieldset className="form-control w-full">
          <label className="label">
            <span className="label-text">Subscribe to my newsletter</span>
          </label>
          <div className="join">
            <input
              type="email"
              placeholder="email@example.com"
              className="input input-bordered join-item flex-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className={`btn join-item ${
                isSubmitted ? "btn-success" : "btn-primary"
              }`}
              disabled={isSubmitted}
            >
              {isSubmitted ? "✓ Done" : "Subscribe"}
            </button>
          </div>
        </fieldset>
      </form>

      <div className="footer footer-center pt-8 mt-8 border-t border-base-300">
        <p className="text-base-content/70">
          © {new Date().getFullYear()} Your Name - Built with React & DaisyUI
        </p>
      </div>
    </footer>
  );
};

export default Footer;
