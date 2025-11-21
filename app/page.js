'use client'

import { useState } from 'react'

export default function Home() {
  const [lightboxImage, setLightboxImage] = useState(null)

  // Replace these URLs with your actual photos
  const photos = [
    { id: 1, url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200', alt: 'Photo 1' },
    { id: 2, url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200', alt: 'Photo 2' },
    { id: 3, url: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200', alt: 'Photo 3' },
    { id: 4, url: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200', alt: 'Photo 4' },
    { id: 5, url: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200', alt: 'Photo 5' },
    { id: 6, url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=1200', alt: 'Photo 6' },
    { id: 7, url: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1200', alt: 'Photo 7' },
    { id: 8, url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200', alt: 'Photo 8' },
    { id: 9, url: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1200', alt: 'Photo 9' },
    { id: 10, url: 'https://images.unsplash.com/photo-1501594907352-04cda38ebc29?w=1200', alt: 'Photo 10' },
    { id: 11, url: 'https://images.unsplash.com/photo-1518837695005-2083093ee35b?w=1200', alt: 'Photo 11' },
    { id: 12, url: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1200', alt: 'Photo 12' },
  ]

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Header - Billy Dinh style: super minimal */}
      <header className="fixed top-0 w-full bg-white z-50 border-b border-gray-200">
        <nav className="max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
          {Denis Mikhin}
          <a href="#projects" className="text-xl font-normal tracking-wide hover:opacity-50 transition-opacity">
            Your Name
          </a>

          {/* Right - Navigation */}
          <div className="flex items-center gap-8 text-sm">
            <a href="#projects" className="hover:opacity-50 transition-opacity">
              projects
            </a>
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
              href="mailto:your@email.com"
              className="hover:opacity-50 transition-opacity"
            >
              email
            </a>
          </div>
        </nav>
      </header>

      {/* Main Grid - Billy Dinh style: clean photo grid */}
      <main id="projects" className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {photos.map((photo) => (
              <div 
                key={photo.id}
                className="relative aspect-[3/4] overflow-hidden cursor-pointer group bg-gray-100"
                onClick={() => setLightboxImage(photo)}
              >
                <img
                  src={photo.url}
                  alt={photo.alt}
                  className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-90"
                />
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* About Section */}
      <section id="about" className="py-32 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-normal mb-8 tracking-wide">About</h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              Write about yourself here. Your photography style, what inspires you, 
              where you're based.
            </p>
            <p>
              You can add more paragraphs about your work, experience, and approach 
              to photography.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 border-t border-gray-200">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-3xl font-normal mb-8 tracking-wide">Contact</h2>
          <div className="space-y-3 text-gray-700">
            <p>
              <a href="mailto:your@email.com" className="hover:opacity-50 transition-opacity">
                your@email.com
              </a>
            </p>
            <p>
              <a 
                href="https://instagram.com/yourname" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:opacity-50 transition-opacity"
              >
                @yourname
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center text-sm text-gray-500">
          <p>© 2025 Your Name</p>
        </div>
      </footer>

      {/* Lightbox - Billy Dinh style: minimal overlay */}
      {lightboxImage && (
        <div 
          className="fixed inset-0 bg-white z-50 flex items-center justify-center p-8 cursor-pointer"
          onClick={() => setLightboxImage(null)}
        >
          <button 
            className="absolute top-8 right-8 text-black text-3xl hover:opacity-50 transition-opacity"
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
  )
}
