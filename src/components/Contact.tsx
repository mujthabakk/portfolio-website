import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      console.log('Sending email with data:', formData); // Log form data
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      console.log('Response status:', response.status); // Log response status
      const responseData = await response.json();
      console.log('Response data:', responseData); // Log response data
      if (response.ok) {
        alert('Email sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear the form
      } else {
        console.error('Error response:', responseData); // Log error response
        alert(`Failed to send email: ${responseData.message}`);
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send email. Please try again later.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {/* <Header /> Add the Header component */}
      <section id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white text-center mb-8">Get in Touch</h2>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <a href="tel:+918113853193" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors">
                    <Phone className="w-5 h-5 mr-3" />
                    <span>+91 811 385 3193</span>
                  </a>
                  <a href="mailto:mujthabakk9@gmail.com" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors">
                    <Mail className="w-5 h-5 mr-3" />
                    <span>mujthabakk9@gmail.com</span></a>
                  <a href="https://github.com/mujthabakk" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors">
                    <Github className="w-5 h-5 mr-3" />
                    <span>github.com/mujthabakk</span>
                  </a>
                  <a href="https://linkedin.com/in/mujthabakk" target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-300 hover:text-blue-400 transition-colors">
                    <Linkedin className="w-5 h-5 mr-3" />
                    <span>linkedin.com/in/mujthabakk</span>
                  </a>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white resize-none"
                    placeholder="Your message"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;