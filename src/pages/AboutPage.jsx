import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Award, Globe, Users, Target, Leaf, TrendingUp } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AboutPage = () => {
  const values = [
    {
      icon: Award,
      title: 'Comprehensive Product Line',
      description: 'Our EMPAKTOR fertilizers cater to diverse farming needs with proven results.',
    },
    {
      icon: Leaf,
      title: 'Sustainability',
      description: 'Plant-based, eco-friendly solutions that promote long-term soil health.',
    },
    {
      icon: Users,
      title: 'Farmer-Centric Philosophy',
      description: 'We offer guidance, training, and support to help farmers succeed.',
    },
    {
      icon: Target,
      title: 'Innovation & Expertise',
      description: 'Cutting-edge research ensures the effectiveness and quality of our solutions.',
    },
  ];

  const milestones = [
    { year: 'Turkey', event: 'Strong Distribution Network' },
    { year: 'Nigeria', event: 'Expanding Market Presence' },
    { year: 'Ghana', event: 'Established Partner Farms' },
    { year: 'Guinea', event: 'New Market Entry' },
    { year: 'Gambia', event: 'Growing Partnerships' },
    { year: 'Ethiopia', event: 'Future Growth Market' },
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Green Hub | EMPAKTOR Fertilizers</title>
        <meta
          name="description"
          content="Learn about Green Hub, our mission for sustainable agriculture, and our global expansion into African markets with EMPAKTOR fertilizers."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <Navbar />

        <section className="pt-32 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                About <span className="gradient-text">Green Hub</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Delivering sustainable agricultural solutions that empower farmers, enhance productivity, and nurture the environment.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-gray-600 mb-4">
                  At Green Hub, we are dedicated to partnering with farmers, providing them not only with innovative products but also with the knowledge and support needed to thrive.
                </p>
                <p className="text-lg text-gray-600">
                  Our mission is to promote sustainable farming practices that enhance agricultural productivity while protecting the planet for future generations.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-600 rounded-3xl blur-3xl opacity-20"></div>
                <img class="relative rounded-3xl shadow-2xl w-full" alt="Green Hub team collaborating with farmers" src="https://images.unsplash.com/photo-1681834913206-cea9d3ec04d6" />
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Why Choose Green Hub?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl card-hover border border-green-100 text-center"
                >
                  <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 mx-auto">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Our Global Presence</h2>
              <p className="text-xl text-green-50 max-w-2xl mx-auto">
                From our roots in Turkey to our expansion across Africa.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20"
                >
                  <div className="text-3xl font-bold mb-2 text-green-200">{milestone.year}</div>
                  <p className="text-white">{milestone.event}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl"
              >
                <Globe className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <div className="text-4xl font-bold gradient-text mb-2">10M L</div>
                <p className="text-gray-600 font-semibold">Annual Production Capacity</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl"
              >
                <Users className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <div className="text-4xl font-bold gradient-text mb-2">5+</div>
                <p className="text-gray-600 font-semibold">Countries in Africa</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl"
              >
                <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <div className="text-4xl font-bold gradient-text mb-2">100%</div>
                <p className="text-gray-600 font-semibold">Plant-Based Organic</p>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
