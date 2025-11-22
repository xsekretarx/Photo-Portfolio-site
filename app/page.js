"use client"

import { useState } from "react";
import Link from "next/link";

const Home = () => {
  const [lightboxImage, setLightboxImage] = useState(null);

  const photos = [
    { id: 1, url: "https://res.cloudinary.com/dpbayfssp/image/upload/v1763810623/DSC06275_hjpi89.jpg", alt: "Photo 1" },
    { id: 2, url: "https://res.cloudinary.com/dpbayfssp/image/upload/v1763810672/DSCF9245_uanvzl.jpg", alt: "Photo 2" },
    { id: 3, url: "https://res.cloudinary.com/dpbayfssp/image/upload/v1763810678/R0010214_izk1fq.jpg", alt: "Photo 3" },
    { id: 4, url: "https://res.cloudinary.com/dpbayfssp/image/upload/v1763752423/DSC03191_ti9mej.jpg", alt: "Photo 4" },
    { id: 5, url: "https://res.cloudinary.com/dpbayfssp/image/upload/v1763810674/DSC01522_p4b59x.jpg", alt: "Photo 5" },
    { id: 6, url: "https://res.cloudinary.com/dpbayfssp/image/upload/v1763810629/DSC00041_vdqzhj.jpg", alt: "Photo 6" },
    { id: 7, url: "https://res.cloudinary.com/dpbayfssp/image/upload/v1763752422/DSC02733_zpdzxl.jpg", alt: "Photo 7" },
    { id: 8, url: "https://res.cloudinary.com/dpbayfssp/image/upload/v1763810684/DSC07440_qkkiwr.jpg", alt: "Photo 8" },
    { id: 9, url: "https://res.cloudinary.com/dpbayfssp/image/upload/v1763810687/R0003364_ng9pbs.jpg", alt: "Photo 9" },
    { id: 10, url: "https://res.cloudinary.com/dpbayfssp/image/upload/v1763810629/R0008755_ho41dq.jpg", alt: "Photo 10" },
    { id: 11, url: "https://res.cloudinary.com/dpbayfssp/image/upload/v1763810623/DSC07970_hbmu66.jpg", alt: "Photo 11" },
  ];

  return (
    <div className="min-h-screen bg-white text-black">
      <header className="fixed top-0 w-full bg-white z-50 border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
          <Link href="/" className="text-2xl font-light tracking-wide hover:opacity-50 transition-opacity">
            Denis Mikhin
          </Link>

          <div className="flex items-center gap-10 text-sm font-light">
            <Link href="/" className="hover:opacity-50 transition-opacity">
              home
            </Link>
            <Link href="/projects" className="hover:opacity-50 transition-opacity">
              projects
            </Link>
            <a href="#about" className="hover:opacity-50 transition-opacity">
              about
            </a>
            <a href="#contact" className="hover:opacity-50 transition-opacity">
              contact
            </a>
            <span className="text-gray-300">|</span>
            <a 
              href="https://instagram.com/sekretarxx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-50 transition-opacity"
            >
              instagram
            </a>
            <a 
              href="mailto:denismikhinphoto@gmail.com"
              className="hover:opacity-50 transition-opacity"
            >
              email
            </a>
          </div>
        </nav>
      </header>

      <main id="home" className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-8 space-y-12">
          {photos.map((photo) => (
            <div 
              key={photo.id}
              className="w-full cursor-pointer group flex justify-center items-center"
              onClick={() => setLightboxImage(photo)}
            >
              <img
                src={photo.url}
                alt={photo.alt}
                style={{ maxHeight: "85vh" }}
                className="w-auto max-w-full h-auto object-contain transition-opacity duration-300 group-hover:opacity-90"
              />
            </div>
          ))}
        </div>
      </main>

      <section id="about" className="py-32 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="text-3xl font-light mb-8 tracking-wide">About</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed font-light">
            <p>
              Street photographer based in Sweden, Stockholm.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" className="py-32 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-8">
          <h2 className="text-3xl font-light mb-8 tracking-wide">Contact</h2>
          <div className="space-y-3 text-gray-700 font-light">
            <p>
              <a href="mailto:denismikhinphoto@gmail.com" className="hover:opacity-50 transition-opacity">
                denismikhinphoto@gmail.com
              </a>
            </p>
            <p>
              <a 
                href="https://instagram.com/sekretarxx" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-50 transition-opacity"
              >
                @sekretarxx
              </a>
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-8 text-center text-sm text-gray-500 font-light">
          <p>© 2025 Denis Mikhin</p>
        </div>
      </footer>

      {lightboxImage && (
        <div 
          className="fixed inset-0 bg-white z-50 flex items-center justify-center p-8 cursor-pointer"
          onClick={() => setLightboxImage(null)}
        >
          <button 
            className="absolute top-8 right-8 text-black text-3xl hover:opacity-50 transition-opacity font-light"
            onClick={() => setLightboxImage(null)}
          >
            ×
          </button>
          <img
            src={lightboxImage.url}
            alt={lightboxImage.alt}
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
};

export default Home;
