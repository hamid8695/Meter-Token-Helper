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
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);
    setStatusMessage('');

    emailjs.send(
      'service_xxvonzr',
      'template_vp5yjzc',
      formData,
      'y672KxS3r7BsdZKFX'
    )
      .then(() => {
        setStatusMessage('Your message has been sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
      })
      .catch(() => {
        setStatusMessage('Failed to send message. Please try again.');
      })
      .finally(() => setSending(false));
  };

  return (
    <section id="contact" className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">

      {/* Background glow */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-blue-600 blur-[140px] rounded-full" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold">
            Let’s Work Together
          </h2>
          <p className="text-slate-400 mt-3 text-lg">
            Got an idea? Let’s build something amazing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT INFO CARD */}
          <div className="space-y-6">

            {[
              {
                title: 'Email',
                value: 'nanokite1@gmail.com',
                icon: '✉️'
              },
              {
                title: 'Phone',
                value: '+8801831763513',
                icon: '📞'
              },
              {
                title: 'Location',
                value: 'Chattogram, Bangladesh',
                icon: '📍'
              }
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-center gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 transition"
              >
                <div className="text-2xl">{item.icon}</div>
                <div>
                  <h3 className="text-sm text-slate-400">{item.title}</h3>
                  <p className="text-white font-medium">{item.value}</p>
                </div>
              </div>
            ))}

          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md space-y-5"
          >

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 outline-none transition"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 outline-none transition"
              />
            </div>

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 outline-none transition"
            />

            <textarea
              name="message"
              rows="6"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-4 rounded-xl bg-white/5 border border-white/10 focus:border-blue-500 outline-none transition resize-none"
            />

            <button
              type="submit"
              disabled={sending}
              className={`w-full py-4 rounded-xl font-medium transition
              ${sending
                  ? 'bg-blue-500/50 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-700'
                }`}
            >
              {sending ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* Toast */}
        {statusMessage && (
          <Toast
            message={statusMessage}
            onClose={() => setStatusMessage('')}
          />
        )}
      </div>
    </section>
  );
};

export default Contact;