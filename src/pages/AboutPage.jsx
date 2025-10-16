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
    {
      icon: Globe,
      title: 'Global Vision',
      description: 'With roots in Turkey, we are committed to making a positive impact worldwide.',
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

        {/* Hero & Mission */}
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

                <div className="mt-8">
                  <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
                  <p className="text-lg text-gray-600 mb-4">
                    <strong>Green Hub Gıda Tarım Dış Ticaret Ltd. Şti.</strong> is a manufacturer of plant-based organic liquid fertilizers under the brand name <strong>EMPAKTOR</strong>, based in Ankara, Turkey.
                  </p>
                  <p className="text-lg text-gray-600">
                    With a strong distribution network in Turkey, we are now expanding across African markets, offering innovative products and local support to farmers globally.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-600 rounded-3xl blur-3xl opacity-20"></div>
                <img
                  className="relative rounded-3xl shadow-2xl w-full"
                  alt="Green Hub team collaborating with farmers"
                  src="/images/WhatsApp Image 2025-10-05 at 20.01.28_45c10b53.jpg"
                />
              </motion.div>
            </div>
          </div>
        </section>

{/* Our Production Facility */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl font-bold mb-4">Our Production Facility</h2>
      <p className="text-xl text-gray-700 max-w-3xl mx-auto">
        Explore our state-of-the-art facility in Ankara, Turkey, where innovation meets sustainability to produce EMPAKTOR’s premium organic fertilizers.
      </p>
    </motion.div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {/* Image 1 */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="rounded-2xl overflow-hidden shadow-lg"
      >
        <img
          src="/images/WhatsApp Image 2024-11-26 at 20.20.17.jpg"
          alt="Production Equipment"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Image 2 */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="rounded-2xl overflow-hidden shadow-lg"
      >
        <img
          src="/images/aaaaas.png"
          alt="Fertilizer Bottling Line"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Video 1 */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="rounded-2xl overflow-hidden shadow-lg"
      >
        <video
          controls
          className="w-full h-full object-cover rounded-xl"
          poster="/assets/videos/thumbnail-production.jpg"
        >
          <source src="/videos/WhatsApp Video 2025-10-05 at 20.04.19_271bdf52.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>

      {/* Image 3 */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="rounded-2xl overflow-hidden shadow-lg"
      >
        <img
          src="/images/factory.png"
          alt="Lab Testing"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Video 2 */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="rounded-2xl overflow-hidden shadow-lg"
      >
        <video
          controls
          className="w-full h-full object-cover rounded-xl"
        >
          <source src="/videos/WhatsApp Video 2025-10-05 at 20.05.15_1cb60796.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </motion.div>
    </div>
  </div>
</section>

        {/* Our Products */}
        <section className="py-20 bg-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Our Products</h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                EMPAKTOR’s product line offers specialized organic fertilizers tailored to modern agricultural needs.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "EMPAKTOR AMINO",
                  description:
                    "Enhances nutrient absorption, promotes root development, and boosts overall plant health.",
                },
                {
                  name: "EMPAKTOR GREEN",
                  description:
                    "Improves chlorophyll production, ensuring vibrant growth and higher yields.",
                },
                {
                  name: "EMPAKTOR BALANCE",
                  description:
                    "Restores soil fertility, balances nutrient levels, and supports sustainability.",
                },
              ].map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-md border border-emerald-100"
                >
                  <h3 className="text-xl font-bold mb-2 text-emerald-700">{product.name}</h3>
                  <p className="text-gray-600">{product.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 text-center max-w-3xl mx-auto text-gray-700 text-lg">
              Each product is enriched with <strong>bacterial enzymes</strong> and <strong>amino acids</strong> to support healthy, eco-conscious farming.
            </div>
          </div>
        </section>

        {/* Global Presence */}
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
                From our roots in Turkey to our growing presence in Africa—including Nigeria, Ghana, Guinea Conakry, The Gambia, and Ethiopia—we're committed to delivering impactful, localized solutions.
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

        {/* Partner Farms */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4">Partner Farms in Ghana</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Through our regional representatives in Africa, Green Hub has partnered with a portfolio of private farms in Ghana. These <strong>Partner Farms</strong> are officially registered to receive value chain support services.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center max-w-3xl mx-auto text-gray-600 text-lg"
            >
              <p>
                This includes the supply of <strong>EMPAKTOR fertilizers</strong>, seeds, and post-harvest ready market access via our affiliated companies: <strong>G-Hub Global</strong> and <strong>Redi Commodities</strong>.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Capacity & Quality */}
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
                <p className="text-gray-600 font-semibold">Annual Production Capacity with rigorous quality control for every batch</p>
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
