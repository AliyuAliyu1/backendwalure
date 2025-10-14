// components/ProductTabs.jsx
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import PDFPreviewModal from './PDFPreviewModal';

const tabs = ['Overview', 'Application', 'Certificates', 'Reports', 'Downloads'];

const ProductTabs = ({ product }) => {
  const [activeTab, setActiveTab] = useState('Overview');
  const [pdfUrl, setPdfUrl] = useState(null);
  const [pdfTitle, setPdfTitle] = useState('');

  const openPreview = (url, title) => {
    setPdfUrl(url);
    setPdfTitle(title);
  };

  const closePreview = () => {
    setPdfUrl(null);
    setPdfTitle('');
  };

  return (
    <div className="mt-6">
      <div className="flex space-x-2 border-b border-gray-200">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
              activeTab === tab
                ? 'border-green-600 text-green-600'
                : 'border-transparent text-gray-600 hover:text-green-600'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* TAB CONTENT */}
      <div className="mt-4">
        {activeTab === 'Overview' && (
          <p className="text-gray-700">{product.description}</p>
        )}

        {activeTab === 'Application' && (
          <div className="space-y-2">
            <Button
              variant="link"
              onClick={() =>
                openPreview('/pdfs/application-guide.pdf', 'Application Guide')
              }
            >
              📝 View Application Guide (Live Preview)
            </Button>
            <a
              href="/pdfs/application-guide.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 underline"
            >
              📄 Download Application Guide
            </a>
          </div>
        )}

        {activeTab === 'Certificates' && (
          <div className="space-y-2">
            <Button
              variant="link"
              onClick={() =>
                openPreview('/pdfs/usda-certificate.pdf', 'USDA Certificate')
              }
            >
              📝 View Organic Certificate
            </Button>
            <a
              href="/pdfs/usda-certificate.pdf"
              className="text-green-600 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              📄 Download USDA Certificate
            </a>
          </div>
        )}

        {activeTab === 'Reports' && (
          <div className="space-y-2">
            <p>🌾 Trial: Tomatoes, Spain [+18% yield]</p>
            <Button
              variant="link"
              onClick={() =>
                openPreview('/pdfs/tomato-trial-report.pdf', 'Trial Report')
              }
            >
              📝 View Trial Report
            </Button>
            <a
              href="/pdfs/tomato-trial-report.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 underline"
            >
              📄 Download Trial Report
            </a>
          </div>
        )}

        {activeTab === 'Downloads' && (
          <div className="space-y-2">
            <a
              href="/pdfs/safety-data-sheet.pdf"
              className="text-green-600 underline"
              download
            >
              📁 Safety Data Sheet
            </a>
            <a
              href="/pdfs/technical-sheet.pdf"
              className="text-green-600 underline"
              download
            >
              📁 Technical Sheet
            </a>
            <a
              href="/pdfs/trial-reports.zip"
              className="text-green-600 underline"
              download
            >
              📁 All Trial Reports (ZIP)
            </a>
          </div>
        )}
      </div>

      <PDFPreviewModal url={pdfUrl} title={pdfTitle} onClose={closePreview} />
    </div>
  );
};

export default ProductTabs;
