import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ContactPage = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us - Green Hub | EMPAKTOR Fertilizers</title>
        <meta
          name="description"
          content="Get in touch with Green Hub. Reach out for inquiries, partnerships, or support regarding our EMPAKTOR organic fertilizers."
        />
        <link rel="canonical" href="https://yourdomain.com/contact" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <Navbar />

        {/* Hero Section */}
        <section className="pt-32 pb-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto px-4"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Contact <span className="gradient-text">Green Hub</span>
            </h1>
            <p className="text-xl text-gray-600">
              We'd love to hear from you. Whether you're a farmer, distributor, or just curious—reach out!
            </p>
          </motion.div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-md border border-emerald-100"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-800">Send Us a Message</h2>

              <form className="space-y-6">
                <div>
                  <label className="block mb-1 font-semibold text-gray-700">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-semibold text-gray-700">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <label className="block mb-1 font-semibold text-gray-700">Message</label>
                  <textarea
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    placeholder="Type your message here..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-lg hover:opacity-90 transition"
                >
                  Send Message
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center"
            >
              <div className="space-y-8 text-gray-700 text-lg">
                <div className="flex items-start space-x-4">
                  <MapPin className="w-6 h-6 text-emerald-600 mt-1" />
                  <div>
                    <p className="font-semibold">Our Headquarters</p>
                    <p>Ankara, Turkey</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="w-6 h-6 text-emerald-600 mt-1" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p>info@greenhub.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="w-6 h-6 text-emerald-600 mt-1" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p>+90 312 123 4567</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-bold mb-4">Business Hours</h3>
                <p className="text-gray-600">Monday - Friday: 9:00 AM – 6:00 PM</p>
                <p className="text-gray-600">Saturday - Sunday: Closed</p>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
