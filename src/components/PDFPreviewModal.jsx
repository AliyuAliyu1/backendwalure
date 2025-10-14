
import React from 'react';
import { X } from 'lucide-react';

const PDFPreviewModal = ({ url, title, onClose }) => {
  if (!url) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4">
      <div className="relative bg-white rounded-lg max-w-3xl w-full shadow-lg overflow-hidden">
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-gray-600 hover:text-red-500" />
          </button>
        </div>
        <iframe
          src={url}
          title={title}
          className="w-full h-[500px]"
          frameBorder="0"
        ></iframe>
      </div>
    </div>
  );
};

export default PDFPreviewModal;
