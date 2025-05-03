'use client'
import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaInstagram, FaLinkedin, FaTiktok, FaTwitter } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

export default function Contact() {
    const [statusMessage, setStatusMessage] = React.useState("");
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const target = e.target as HTMLFormElement;
        const name = (target.elements.namedItem('name') as HTMLInputElement).value;
        const email = (target.elements.namedItem('email') as HTMLInputElement).value;
        const message = (target.elements.namedItem('message') as HTMLTextAreaElement).value;
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
                    name,
                    email,
                    message,
                }),
            });
            const result = await response.json();
            if (result.success) {
                setStatusMessage("Your message has been sent successfully. Thank you for contacting me.");
                // フォームのリセット
                target.reset();
            } else {
                setStatusMessage("Failed to send your message. Please try again later.");
            }
        } catch (error) {
            console.error(error);
            setStatusMessage("An error occurred while sending your message. Please try again later.");
        }
    }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Contact Me</h1>
      {statusMessage && (
        <div className="mb-4 p-3 rounded bg-gray-100 text-gray-800 text-center font-medium">
          {statusMessage}
        </div>
      )}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 60, damping: 15 }}
        className="space-y-6"
      >
          <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input type="text" name="name" required placeholder="Your name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
          </div>
          <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" name="email" required placeholder="email@example.com" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition" />
          </div>
          <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea name="message" required rows={3} placeholder="Enter Message" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition resize-none" />
          </div>
          <button type="submit" className="w-full bg-gray-600 text-white font-semibold py-2 rounded-lg shadow hover:bg-black transition">Submit Form</button>
      <div className="mt-1 flex justify-center space-x-6">
        {/* Twitter */}
        <a href="https://twitter.com/your_twitter" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-gray-600 hover:text-black text-2xl">
            <FaTwitter />
        </a>
        {/* GitHub */}
        <a href="https://github.com/Misato-Seki" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-600 hover:text-black text-2xl">
            <FaGithub />
        </a>
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/misato-seki-198a16251/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-600 hover:text-black text-2xl">
            <FaLinkedin />
        </a>
        {/* Instagram */}
        <a href="https://instagram.com/mock_instagram" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-gray-600 hover:text-black text-2xl">
            <FaInstagram />
        </a>
        {/* TikTok */}
        <a href="https://tiktok.com/@mock_tiktok" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-gray-600 hover:text-black text-2xl">
            <FaTiktok />
        </a>
        {/* Blog */}
        <a href="https://mockblog.com" target="_blank" rel="noopener noreferrer" aria-label="Blog" className="text-gray-600 hover:text-black text-2xl">
            <CgWebsite />
        </a>
      </div>
      </motion.form>
    </div>
  );
}