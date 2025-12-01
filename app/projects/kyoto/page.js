"use client"

import { useState } from "react";
import Link from "next/link";

const KyotoProject = () => {
  const [lightboxImage, setLightboxImage] = useState(null);
  const photos = [
    { id: 1, url: "https://res.cloudinary.com/dpbayfssp/image/upload/v1764620339/DSC04332_cetoyd.jpg", alt: "Kyoto 1" },
    { id: 2, url: "https://res.cloudinary.com/dpbayfssp/image/upload/v1764620250/DSC06163_uc6hvz.jpg", alt: "Kyoto 2" },
    { id: 3, url: "https://res.cloudinary.com/dpbayfssp/image/upload/v1764620342/DSC04196_x73vzt.jpg", alt: "Kyoto 3" },
    { id: 4, url: "https://res.cloudinary.com/dpbayfssp/image/upload/v1764620498/DSC05182_pujttv.jpg", alt: "Kyoto 4" },
    { id: 5, url: "https://res.cloudinary.com/dpbayfssp/image/upload/v1764620343/DSC04559_m5afel.jpg", alt: "Kyoto 5" },
    { id: 6, url: "https://res.cloudinary.com/dpbayfssp/image/upload/v1764620342/DSC05892_qgejbi.jpg", alt: "Kyoto 6" },
    { id: 7, url: "https://res.cloudinary.com/dpbayfssp/image/upload/v1764620334/DSC05861_vpvbgc.jpg", alt: "Kyoto 7" },
    { id: 8, url: "https://res.cloudinary.com/dpbayfssp/image/upload/v1764620331/DSC05943_rxoh5y.jpg", alt: "Kyoto 8" },
    { id: 9, url: "https://res.cloudinary.com/dpbayfssp/image/upload/v1764620240/DSC06238_avtxwq.jpg", alt: "Kyoto 9" },
    { id: 10, url: "https://res.cloudinary.com/dpbayfssp/image/upload/v1764620342/DSC05151_dkd71t.jpg", alt: "Kyoto 10" },
    { id: 11, url: "https://res.cloudinary.com/dpbayfssp/image/upload/v1764620790/DSC06196_nfg5bn.jpg", alt: "Kyoto 11" },
    { id: 12, url: "https://res.cloudinary.com/dpbayfssp/image/upload/v1764620790/DSC06428_hw9cb6.jpg", alt: "Kyoto 12" },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <header className="fixed top-0 w-full bg-white z-50 border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          <Link href="/" className="text-2xl font-light tracking-wide hover:opacity-50 transition-opacity">Denis Mikhin</Link>
          <div className="flex items-center gap-10 text-sm font-light">
            <Link href="/" className="hover:opacity-50 transition-opacity">home</Link>
            <Link href="/projects" className="hover:opacity-50 transition-opacity">projects</Link>
            <a href="/#about" className="hover:opacity-50 transition-opacity">about</a>
            <a href="/#contact" className="hover:opacity-50 transition-opacity">contact</a>
            <span className="text-gray-300">|</span>
            <a href="https://instagram.com/sekretarxx" target="_blank" rel="noopener noreferrer" className="hover:opacity-50 transition-opacity">instagram</a>
            <a href="mailto:denismikhinphoto@gmail.com" className="hover:opacity-50 transition-opacity">email</a>
          </div>
        </nav>
      </header>
      <div className="pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-8">
          <Link href="/projects" className="text-sm font-light hover:opacity-50 transition-opacity">← Back to Projects</Link>
        </div>
      </div>
      <div className="pb-12">
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="text-4xl font-light mb-4 tracking-wide">Kyoto</h1>
          <p className="text-gray-600 font-light max-w-2xl">Exploring the streets of Kyoto. Ancient temples, quiet alleyways, and fleeting moments in Japan's cultural heart.</p>
        </div>
      </div>
      <main className="pb-20">
        <div className="max-w-7xl mx-auto px-8 space-y-12">
          {photos.map((photo) => (
            <div key={photo.id} className="w-full cursor-pointer group flex justify-center items-center" onClick={() => setLightboxImage(photo)}>
              <img src={photo.url} alt={photo.alt} style={{ maxHeight: "85vh" }} className="w-auto max-w-full h-auto object-contain transition-opacity duration-300 group-hover:opacity-90" />
            </div>
          ))}
        </div>
      </main>
      <footer className="border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-8 text-center text-sm text-gray-500 font-light"><p>© 2025 Denis Mikhin</p></div>
      </footer>
      {lightboxImage && (
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center p-8 cursor-pointer" onClick={() => setLightboxImage(null)}>
          <button className="absolute top-8 right-8 text-black text-3xl hover:opacity-50 transition-opacity font-light" onClick={() => setLightboxImage(null)}>×</button>
          <img src={lightboxImage.url} alt={lightboxImage.alt} className="max-w-full max-h-full object-contain" onClick={(e) => e.stopPropagation()} />
        </div>
      )}
    </div>
  );
};

export default KyotoProject;
