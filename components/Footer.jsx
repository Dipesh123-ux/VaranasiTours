"use client"
import React, { useState } from 'react';
// import { sendEmail } from '../services/sendinblue';

const Footer = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('')
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const htmlContent = `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;

    // await sendEmail('your-email@example.com', 'Contact Form Submission', htmlContent);

    setIsSending(false);
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <footer className="bg-gray-700 py-8">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="w-full md:flex md:flex-col">
          <h2 className="text-white text-2xl font-bold mb-4">Contact Us</h2>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="text"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="w-full md:flex md:flex-col h-96">
          <div className="mb-4 mt-12">
            <textarea
              placeholder="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              rows={5}
              className="w-full px-4 py-2 border rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              disabled={isSending}
              className={`px-6 py-2 text-white bg-gray-700 rounded-md ${
                isSending ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-800'
              } focus:outline-none focus:ring-2 focus:ring-blue-500`}
            >
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
          </div>
        </div>
      </div>
    </div>
  </footer>
  

  );
};

export default Footer;
