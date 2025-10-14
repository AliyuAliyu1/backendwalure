import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Leaf, Droplets, Sprout, FileText, Download } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import React, { useState } from 'react';
import PDFPreviewModal from '@/components/PDFPreviewModal'; // Adjust path if needed

const ProductsPage = () => {
  const { toast } = useToast();
  const [previewUrl, setPreviewUrl] = useState(null);
  const [previewTitle, setPreviewTitle] = useState('');

  const handlePreview = (url, title) => {
    setPreviewUrl(url);
    setPreviewTitle(title);
  };

  const products = [
    {
      icon: Leaf,
      name: 'EMPAKTOR AMINO',
      category: 'Growth & Health',
      description:
        'Enhances nutrient absorption, promotes root development, and boosts overall plant health.',
      features: [
        'Rich in Amino Acids',
        'Improves Root System',
        'Boosts Plant Vigor',
        'Stress Resistance',
      ],
      certificates: [
        {
          name: 'MoAF Organic Certified',
          url: '/pdfs/EMPAKTOR AMINO PRODUCT CERT.pdf',
        },
     
      ],
      sdsLink: "/pdfs/Safety data sheet of 'EMPAKTOR AMINO'.pdf",
      image: '/images/biomino.jpg',
    },
    {
      icon: Sprout,
      name: 'EMPAKTOR GREEN',
      category: 'Yield & Quality',
      description:
        'Designed to improve chlorophyll production, ensuring vibrant, healthy growth and higher yields.',
      features: [
        'High Chlorophyll Production',
        'Vibrant, Healthy Growth',
        'Increases Yields',
        'Improves Quality',
      ],
      certificates: [
        {
          name: 'MoAF Organic Certified',
          url: '/pdfs/EMPAKTOR GREEN PRODUCT CERT(1).pdf',
        },
    
      ],
      sdsLink: "/pdfs/Safety data sheet of 'EMPAKTOR GREEN'.pdf",
      image: '/images/biogreeno.jpg',
    },
    {
      icon: Droplets,
      name: 'EMPAKTOR BALANCE',
      category: 'Soil Health',
      description:
        'Restores soil fertility, balances nutrient levels, and supports long-term sustainability.',
      features: [
        'Restores Soil Fertility',
        'Balances Nutrients',
        'Long-term Sustainability',
        'Eco-Friendly',
      ],
      certificates: [
        {
          name: 'MoAF Organic Certified',
          url: '/pdfs/EMPAKTOR BALANCE PRODUCT CERT.pdf',
        },
    
      ],
      sdsLink: "/pdfs/Safety data sheet of 'EMPAKTOR BALANCE'.pdf",
      image: '/images/biomino1.jpg',
    },
  ];

  const handleInquiry = (productName) => {
    toast({
      title: `🚧 This feature isn't implemented yet.`,
      description: `You tried requesting a quote for ${productName}. This will be available soon.`,
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
                Specialized plant-based organic fertilizers, tailored to support
                diverse agricultural needs and full of BACTERIAL ENZYMES AND
                AMINO ACIDS.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg card-hover border border-green-100 flex flex-col"
                >
                  <div className="relative h-48 bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                    <img
                      className="w-full h-full object-cover"
                      alt={product.name}
                      src={product.image}
                    />
                    <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full text-sm font-semibold text-green-600">
                      {product.category}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="bg-gradient-to-br from-green-500 to-emerald-600 p-2 rounded-lg">
                        <product.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                    </div>

                    <p className="text-gray-600 mb-4 flex-grow">{product.description}</p>

                    <div className="space-y-2 mb-6">
                      {product.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button
                      onClick={() => handleInquiry(product.name)}
                      className="w-full mb-6 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white"
                    >
                      Request Quote
                    </Button>

                    {/* Certificates */}
                    <div className="mb-6">
                      <h4 className="text-xl font-semibold mb-2 text-green-700 flex items-center">
                        <FileText className="w-5 h-5 mr-2" /> Certificates
                      </h4>
                      <ul className="space-y-2">
                        {product.certificates.map((cert, i) => (
                          <li
                            key={i}
                            className="text-sm text-gray-700 flex items-center justify-between"
                          >
                            <span>{cert.name}</span>
                            <div className="flex items-center gap-4">
                              <button
                                onClick={() => handlePreview(cert.url, cert.name)}
                                className="text-green-600 underline hover:text-green-800 text-sm"
                              >
                                View Preview
                              </button>
                              <a
                                href={cert.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                download
                                className="text-green-600 underline hover:text-green-800 text-sm"
                              >
                                Download PDF
                              </a>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Safety Data Sheet */}
                    <div>
                      <h4 className="text-xl font-semibold mb-2 text-green-700 flex items-center">
                        <Download className="w-5 h-5 mr-2" /> Safety Data Sheet
                      </h4>
                      <div className="flex items-center justify-between border border-green-200 rounded p-3">
                        <span className="text-gray-700">For {product.name}</span>
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() =>
                              handlePreview(product.sdsLink, `${product.name} SDS`)
                            }
                            className="text-green-600 underline hover:text-green-800 text-sm"
                          >
                            View Preview
                          </button>
                          <a
                            href={product.sdsLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            download
                          >
                            <Button
                              variant="outline"
                              size="sm"
                              className="text-green-600 border-green-500 hover:bg-green-50"
                            >
                              Download
                            </Button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="py-20 bg-white border-t" id="overview">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-green-700">📘 Product Overview</h2>
            <p className="text-gray-700 leading-relaxed">
              EMPAKTOR fertilizers are designed for every phase of crop development. From early root
              formation to harvest-quality improvement, each formula has a unique biological role
              supported by bacterial enzymes and natural amino acids.
            </p>
          </div>
        </section>

        {/* Application */}
        <section className="py-20 bg-green-50" id="application">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-green-700">🧪 Application</h2>
            <ul className="space-y-4 text-gray-700">
              <li>✔ Foliar Spray: 1–2 L/ha during early growth and flowering.</li>
              <li>✔ Drip Irrigation: Apply diluted 1:500 weekly for continuous nutrition.</li>
              <li>✔ Use morning or late afternoon to reduce evaporation.</li>
            </ul>
    <a
  href="/pdfs/EMPAKTOR FERTILIZERS PROTOCOL & REPORT.pdf"
  download
  target="_blank"
  rel="noopener noreferrer"
>
  <Button className="mt-6 bg-green-600 text-white hover:bg-green-700">
    Download Full Application Guide
  </Button>
</a>

          </div>
        </section>

        {/* Reports */}
        <section className="py-20 bg-green-50" id="reports">
          <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6 text-green-700">📊 Reports</h2>
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg">Tomato Field Trial – Spain</h4>
                <p className="text-gray-700">
                  EMPAKTOR GREEN showed +18% yield increase in greenhouse tomato trials over 3
                  months.
                </p>
                <Button variant="link" className="pl-0 text-green-700">
                  Read Full Report
                </Button>
              </div>
              <div>
                <h4 className="font-semibold text-lg">Soil Health Study – Kenya</h4>
                <p className="text-gray-700">
                  EMPAKTOR BALANCE restored soil microbial activity by 26% after 2 months of
                  application.
                </p>
                <Button variant="link" className="pl-0 text-green-700">
                  Read Full Report
                </Button>
              </div>
            </div>
          </div>
        </section>

{/* Downloads */}
<section className="py-20 bg-white" id="downloads">
  <div className="max-w-5xl mx-auto px-4">
    <h2 className="text-3xl font-bold mb-6 text-green-700">⬇ Downloads</h2>
    <div className="space-y-4">

      {/* Product Brochure */}
      <div className="flex items-center justify-between border p-4 rounded-md shadow-sm">
        <div className="flex items-center space-x-3">
          <Download className="text-green-600" />
          <span>Product Brochure (PDF)</span>
        </div>
        <div className="flex gap-4">
          {/* View Live Preview */}
          <Button
            variant="link"
            className="text-green-700"
            onClick={() => handlePreview('/pdfs/PRESENTATION.pdf', 'Product Brochure')}
          >
            View Preview
          </Button>

          {/* Download Button */}
          <a
            href="/pdfs/PRESENTATION.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline">Download</Button>
          </a>
        </div>
      </div>

      {/* Product Comparison Sheet */}
      <div className="flex items-center justify-between border p-4 rounded-md shadow-sm">
        <div className="flex items-center space-x-3">
          <Download className="text-green-600" />
          <span>Product Comparison Sheet</span>
        </div>
        <div className="flex gap-4">
          {/* View Live Preview */}
          <Button
            variant="link"
            className="text-green-700"
            onClick={() => handlePreview('/pdfs/EMPAKTOR VS CONVENTIONAL FERTILIZER.pdf', 'Product Comparison Sheet')}
          >
            View Preview
          </Button>

          {/* Download Button */}
          <a
            href="/pdfs/EMPAKTOR VS CONVENTIONAL FERTILIZER.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline">Download</Button>
          </a>
        </div>
      </div>

    </div>
  </div>
</section>


        {/* Innovation Section */}
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
                Our dedicated research and development team, in collaboration with agricultural
                engineers and university professors, continuously improves the quality and
                efficiency of our products.
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

        {/* PDF Preview Modal */}
        {previewUrl && (
          <PDFPreviewModal
            url={previewUrl}
            title={previewTitle}
            onClose={() => setPreviewUrl(null)}
          />
        )}

        <Footer />
      </div>
    </>
  );
};

export default ProductsPage;
