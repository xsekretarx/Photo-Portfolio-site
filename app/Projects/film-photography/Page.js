/* eslint-disable */
// @ts-nocheck
import { useState } from "react";
import Link from "next/link";

const FilmPhotographyProject = () => {
  const [lightboxImage, setLightboxImage] = useState(null);

  const photos = [
    { 
      id: 1, 
      url: "https://res.cloudinary.com/dpbayfssp/image/upload/v1763752646/DSC00650_mlwb3z.jpg", 
      alt: "Film Photo 1"
    },
    { 
      id: 2, 
      url: "https://res.cloudinary.com/dpbayfssp/image/upload/v1763752423/DSC03191_ti9mej.jpg", 
      alt: "Film Photo 2"
    },
    { 
      id: 3, 
      url: "https://res.cloudinary.com/dpbayfssp/image/upload/v1763752422/DSC02733_zpdzxl.jpg", 
      alt: "Film Photo 3"
    },
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
            <a href="/#about" className="hover:opacity-50 transition-opacity">
              about
            </a>
            <a href="/#contact" className="hover:opacity-50 transition-opacity">
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

      <div className="pt-24 pb-8">
        <div className="max-w-7xl mx-auto px-8">
          <Link 
            href="/projects" 
            className="text-sm font-light hover:opacity-50 transition-opacity"
          >
            ← Back to Projects
          </Link>
        </div>
      </div>

      <div className="pb-12">
        <div className="max-w-7xl mx-auto px-8">
          <h1 className="text-4xl font-light mb-4 tracking-wide">Film Photography</h1>
          <p className="text-gray-600 font-light max-w-2xl">
            Analog moments captured on 35mm film. Exploring the streets with a vintage camera, 
            embracing imperfections and the unique character of film photography.
          </p>
        </div>
      </div>

      <main className="pb-20">
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

export default FilmPhotographyProject;
