‘use client’

import { useState } from ‘react’

export default function Home() {
const [lightboxImage, setLightboxImage] = useState(null)

const photos = [
{
id: 1,
url: ‘https://res.cloudinary.com/dpbayfssp/image/upload/v1763752646/DSC00650_mlwb3z.jpg’,
alt: ‘Photo 1’,
orientation: ‘horizontal’
},
{
id: 2,
url: ‘https://res.cloudinary.com/dpbayfssp/image/upload/v1763752423/DSC03191_ti9mej.jpg’,
alt: ‘Photo 2’,
orientation: ‘vertical’
},
{
id: 3,
url: ‘https://res.cloudinary.com/dpbayfssp/image/upload/v1763752422/DSC02733_zpdzxl.jpg’,
alt: ‘Photo 3’,
orientation: ‘vertical’
},
]

return (
<div className="min-h-screen bg-white text-black">
<header className="fixed top-0 w-full bg-white z-50 border-b border-gray-200">
<nav className="max-w-7xl mx-auto px-8 py-6 flex justify-between items-center">
<a href="#projects" className="text-2xl font-light tracking-wide hover:opacity-50 transition-opacity">
Denis Mikhin
</a>

```
      <div className="flex items-center gap-10 text-sm font-light">
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

  <main id="projects" className="pt-32 pb-20">
    <div className="max-w-6xl mx-auto px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {photos.map((photo) => (
          <div 
            key={photo.id}
            className={`relative overflow-hidden cursor-pointer group bg-gray-100 ${
              photo.orientation === 'horizontal' 
                ? 'aspect-[3/2]' 
                : 'aspect-[2/3]'
            }`}
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

  <section id="about" className="py-32 border-t border-gray-200">
    <div className="max-w-3xl mx-auto px-8">
      <h2 className="text-3xl font-light mb-8 tracking-wide">About</h2>
      <div className="space-y-4 text-gray-700 leading-relaxed font-light">
        <p>
          Write about yourself here. Your photography style, what inspires you, 
          where you are based.
        </p>
        <p>
          You can add more paragraphs about your work, experience, and approach 
          to photography.
        </p>
      </div>
    </div>
  </section>

  <section id="contact" className="py-32 border-t border-gray-200">
    <div className="max-w-3xl mx-auto px-8">
      <h2 className="text-3xl font-light mb-8 tracking-wide">Contact</h2>
      <div className="space-y-3 text-gray-700 font-light">
        <p>
          <a href="mailto:your@email.com" className="hover:opacity-50 transition-opacity">
            your@email.com
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
```

)
}
