import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Droplets, Award, TrendingUp } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const HomePage = () => {
  const features = [
    {
      icon: Leaf,
      title: 'Plant-Based Organic',
      description: 'Eco-friendly solutions that promote long-term soil health and sustainability.',
    },
    {
      icon: Droplets,
      title: 'High Efficiency',
      description: 'Advanced formulas with bacterial enzymes and amino acids for max absorption.',
    },
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Comprehensive product line catering to diverse farming needs.',
    },
    {
      icon: TrendingUp,
      title: 'Farmer-Centric',
      description: 'We offer guidance, training, and support to help farmers succeed.',
    },
  ];

  return (
    <>
      <Helmet>
        <title>Green Hub - EMPAKTOR Plant-Based Organic Liquid Fertilizers</title>
        <meta
          name="description"
          content="Green Hub is a leading manufacturer of plant-based organic liquid fertilizers under the brand name 'EMPAKTOR', based in Ankara, Turkey."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <Navbar />

        <section
  className="relative pt-32 pb-20 overflow-hidden bg-cover bg-center bg-no-repeat"
  style={{
    backgroundImage: `url('/images/WhatsApp Image 2025-10-05 at 20.04.19_a7e82810.jpg')`,
  }}
>
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                  <span className="gradient-text">EMPAKTOR</span> Organic Liquid Fertilizers
                </h1>
                <p className="text-xl text-white mb-8">
                  Sustainable agricultural solutions from Green Hub to empower farmers, enhance productivity, and nurture the environment.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/products">
                    <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg">
                      Explore Products
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link to="/contact">
                    <Button size="lg" variant="outline" className="border-2 border-green-600 text-green-600 hover:bg-green-50">
                      Contact Us
                    </Button>
                  </Link>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-600 rounded-3xl blur-3xl opacity-20"></div>
                <img class="relative rounded-3xl shadow-2xl w-full" alt="Lush green field representing healthy agriculture" src="/images/Bg123-removebg-preview.png" />
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
              <h2 className="text-4xl font-bold mb-4">
                Why Choose <span className="gradient-text">Green Hub</span>?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Experience the difference with our innovative EMPAKTOR fertilizers.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl card-hover border border-green-100"
                >
                  <div className="bg-gradient-to-br from-green-500 to-emerald-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <img class="rounded-3xl shadow-2xl w-full" alt="Modern fertilizer production facility" src="/images/WhatsApp Image 2025-10-05 at 20.02.32_dcbc92a9.jpg" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold mb-6">
                  Expanding to African Markets
                </h2>
                <p className="text-xl mb-8 text-green-50">
                  With a strong network in Turkey, we are now sharing our expertise and innovative products with farmers in Nigeria, Ghana, Guinea, The Gambia, Ethiopia, and more.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                    <div className="text-4xl font-bold mb-2">10M L</div>
                    <p className="text-green-100">Annual Capacity</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                    <div className="text-4xl font-bold mb-2">5+</div>
                    <p className="text-green-100">African Nations</p>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                    <div className="text-4xl font-bold mb-2">100%</div>
                    <p className="text-green-100">Organic</p>
                  </div>
                   <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                    <div className="text-4xl font-bold mb-2">R&D</div>
                    <p className="text-green-100">Driven Innovation</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
    <section className="py-20 bg-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-4">Our Visual Impact</h2>
              <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                See how Green Hub is transforming agriculture through partner farms, facilities, and outreach.
              </p>
            </motion.div>

            {/* MEDIA GRID */}
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
                  src="/images/maiz12.jpg"
                  alt="Farmers training"
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
                  src="/images/pineapple.jpg"
                  alt="Lush field"
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
                  poster="/assets/videos/thumbnail.jpg"
                >
                  <source src="/videos/WhatsApp Video 2025-10-05 at 20.04.24_287eec09.mp4" type="video/mp4" />
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
                  src="/images/soyabean.jpg"
                  alt="Production"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Image 4 */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="rounded-2xl overflow-hidden shadow-lg"
              >
                <img
                  src="/images/WhatsApp Image 2025-10-05 at 20.05.45_86247bc5.jpg"
                  alt="Partner farm"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Video 2 */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="rounded-2xl overflow-hidden shadow-lg"
              >
                <video
                  controls
                  className="w-full h-full object-cover rounded-xl"
                >
                  <source src="/videos/WhatsApp Video 2025-10-05 at 20.05.27_19d34d07.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">
                Ready to Grow with Us?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Get in touch with our experts and discover the perfect EMPAKTOR solution for your crops.
              </p>
              <Link to="/contact">
                <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg">
                  Contact Us Today
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default HomePage;
