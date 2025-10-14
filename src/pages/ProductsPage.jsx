import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Leaf, Droplets, Sprout, FileText, CheckCircle, Download } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const ProductsPage = () => {
  const { toast } = useToast();

  const products = [
    {
      icon: Leaf,
      name: 'EMPAKTOR AMINO',
      category: 'Growth & Health',
      description:
        'Enhances nutrient absorption, promotes root development, and boosts overall plant health.',
      features: ['Rich in Amino Acids', 'Improves Root System', 'Boosts Plant Vigor', 'Stress Resistance'],
    },
    {
      icon: Sprout,
      name: 'EMPAKTOR GREEN',
      category: 'Yield & Quality',
      description:
        'Designed to improve chlorophyll production, ensuring vibrant, healthy growth and higher yields.',
      features: ['High Chlorophyll Production', 'Vibrant, Healthy Growth', 'Increases Yields', 'Improves Quality'],
    },
    {
      icon: Droplets,
      name: 'EMPAKTOR BALANCE',
      category: 'Soil Health',
      description:
        'Restores soil fertility, balances nutrient levels, and supports long-term sustainability.',
      features: ['Restores Soil Fertility', 'Balances Nutrients', 'Long-term Sustainability', 'Eco-Friendly'],
    },
  ];

  const handleInquiry = (productName) => {
    toast({
      title: `🚧 Feature for "${productName}" isn't ready yet.`,
      description: "But it's coming soon! Stay tuned.",
      duration: 3000,
    });
  };

  return (
    <>
      <Helmet>
        <title>Our Products - EMPAKTOR Organic Fertilizers | Green Hub</title>
        <meta
          name="description"
          content="Explore the EMPAKTOR product line: EMPAKTOR AMINO, GREEN, and BALANCE. Plant-based organic fertilizers with bacterial enzymes and amino acids."
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
        <Navbar />

        {/* Products Header */}
        <section className="pt-32 pb-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Our <span className="gradient-text">EMPAKTOR Products</span>
              </h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Specialized plant-based organic fertilizers full of BACTERIAL ENZYMES AND AMINO ACIDS to support sustainable agriculture.
              </p>
            </motion.div>

            {/* Product Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover border border-green-100"
                >
                  <div className="relative h-48 bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                    <img
                      className="w-full h-full object-cover"
                      alt={product.name}
                      src="https://images.unsplash.com/photo-1635865165118-917ed9e20936"
                    />
                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-green-600">
                      {product.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-2 rounded-lg">
                        <product.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                    </div>

                    <p className="text-gray-600 mb-4">{product.description}</p>

                    <div className="space-y-2 mb-6">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      onClick={() => handleInquiry(product.name)}
                      className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white"
                    >
                      Request Quote
                    </Button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sections Below All Products */}
        <section className="py-20 bg-white border-t" id="overview">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-green-700">📘 Product Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              EMPAKTOR fertilizers are designed for every phase of crop development. From early root formation to harvest-quality
              improvement, each formula has a unique biological role supported by bacterial enzymes and natural amino acids.
            </p>
          </div>
        </section>

        <section className="py-20 bg-green-50" id="application">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-green-700">🧪 Application</h2>
            <ul className="space-y-4 text-gray-700">
              <li>✔ Foliar Spray: 1–2 L/ha during early growth and flowering.</li>
              <li>✔ Drip Irrigation: Apply diluted 1:500 weekly for continuous nutrition.</li>
              <li>✔ Use morning or late afternoon to reduce evaporation.</li>
            </ul>
            <Button className="mt-6 bg-green-600 text-white hover:bg-green-700">
              Download Full Application Guide
            </Button>
          </div>
        </section>

        <section className="py-20 bg-white" id="certificates">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-green-700">✅ Certificates</h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-600" />
                <span>USDA Organic Certified</span>
                <Button variant="outline" className="ml-auto">Download</Button>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="text-green-600" />
                <span>ISO 9001 Manufacturing Standard</span>
                <Button variant="outline" className="ml-auto">Download</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-green-50" id="reports">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-green-700">📊 Reports</h2>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg">Tomato Field Trial – Spain</h4>
                <p className="text-gray-700">EMPAKTOR GREEN showed +18% yield increase in greenhouse tomato trials over 3 months.</p>
                <Button variant="link" className="pl-0 text-green-700">Read Full Report</Button>
              </div>
              <div>
                <h4 className="font-semibold text-lg">Soil Health Study – Kenya</h4>
                <p className="text-gray-700">EMPAKTOR BALANCE restored soil microbial activity by 26% after 2 months of application.</p>
                <Button variant="link" className="pl-0 text-green-700">Read Full Report</Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white" id="downloads">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-green-700">⬇ Downloads</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between border p-4 rounded-md shadow-sm">
                <div className="flex items-center space-x-3">
                  <Download className="text-green-600" />
                  <span>Product Brochure (PDF)</span>
                </div>
                <Button variant="outline">Download</Button>
              </div>
              <div className="flex items-center justify-between border p-4 rounded-md shadow-sm">
                <div className="flex items-center space-x-3">
                  <Download className="text-green-600" />
                  <span>Product Comparison Sheet</span>
                </div>
                <Button variant="outline">Download</Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 text-white">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold mb-6">Innovation & Research</h2>
              <p className="text-xl mb-8 text-green-50">
                Our R&D team works with agricultural engineers and university professors to enhance product quality and efficiency.
              </p>
              <Button
                onClick={() => handleInquiry('General')}
                size="lg"
                className="bg-white text-green-600 hover:bg-green-50"
              >
                Talk to an Expert
              </Button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default ProductsPage;
