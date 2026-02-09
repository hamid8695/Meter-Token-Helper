'use client'
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import Toast from './Toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [statusMessage, setStatusMessage] = useState('');
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setStatusMessage('');

    emailjs.send(
      'service_odgpsza', 
      'template_ldspop7', 
      formData,
      '8niGvHy2TyzZ5flos' 
    )
    .then((response) => {
      setStatusMessage('✅ Your message has been sent successfully!');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, (error) => {
      setStatusMessage('❌ Failed to send your message. Please try again.');
    }).finally(() => {
      setSending(false);
    });
  }
  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Let's Work Together</h2>
          <p className="text-xl text-slate-300">Ready to bring your ideas to life?</p>
        </div>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold">Email</h3>
                <p className="text-slate-300">hamidazad020@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold">Phone</h3>
                <p className="text-slate-300">+88 01859168695</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
              </div>
              <div>
                <h3 className="text-white font-semibold">Location</h3>
                <p className="text-slate-300">Hamzerbar, Chattogram</p>
              </div>
            </div>
          </div>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid md:grid-cols-2 gap-6">
              <input 
                type="text" 
                name="name"
                placeholder="Your Name" 
                value={formData.name}
                onChange={handleChange}
                className="bg-slate-800 text-white p-4 rounded-lg border border-slate-700 focus:border-blue-500 focus:outline-none"
              />
              <input 
                type="email" 
                name="email"
                placeholder="Your Email" 
                value={formData.email}
                onChange={handleChange}
                className="bg-slate-800 text-white p-4 rounded-lg border border-slate-700 focus:border-blue-500 focus:outline-none"
              />
            </div>
            <input 
              type="text" 
              name="subject"
              placeholder="Subject" 
              value={formData.subject}
              onChange={handleChange}
              className="w-full bg-slate-800 text-white p-4 rounded-lg border border-slate-700 focus:border-blue-500 focus:outline-none"
            />
            <textarea 
              name="message"
              placeholder="Your Message" 
              rows="6" 
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-slate-800 text-white p-4 rounded-lg border border-slate-700 focus:border-blue-500 focus:outline-none"
            ></textarea>
           

            <button 
              type="submit" 
              disabled={sending}
              className={`w-full bg-blue-600 text-white py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium ${sending ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {sending ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
         {statusMessage && (
        <Toast
          message={statusMessage}
          onClose={() => setStatusMessage("")}
        />
      )}
      </div>
      <style jsx>{`
        @keyframes slideIn {
          0% { transform: translateY(100%); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        .animate-slideIn {
          animation: slideIn 0.4s ease forwards;
        }
      `}</style>
    </section>
  );
};

export default Contact;
