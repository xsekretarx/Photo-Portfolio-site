"use client"

import Link from "next/link";

const ProjectsPage = () => {
  const projects = [
    {
      id: "marrakech-2025",
      title: "Marrakech 2025",
      description: "Colors and life of Moroccan streets",
      coverImage: "https://res.cloudinary.com/dpbayfssp/image/upload/v1763832588/DSC07167_glutxb.jpg",
      year: "2025"
    },
    {
      id: "kyoto",
      title: "Kyoto",
      description: "Exploring the streets of Kyoto",
      coverImage: "https://res.cloudinary.com/dpbayfssp/image/upload/v1764620339/DSC04332_cetoyd.jpg",
      year: "2024"
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
      <main className="pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-8">
          <h1 className="text-4xl font-light mb-12 tracking-wide">Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`} className="group">
                <div className="relative overflow-hidden bg-gray-100 aspect-[4/3]">
                  <img src={project.coverImage} alt={project.title} className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-80" />
                </div>
                <div className="mt-4">
                  <div className="flex justify-between items-baseline">
                    <h2 className="text-2xl font-light group-hover:opacity-50 transition-opacity">{project.title}</h2>
                    <span className="text-sm text-gray-500 font-light">{project.year}</span>
                  </div>
                  <p className="text-gray-600 font-light mt-2">{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <footer className="border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-8 text-center text-sm text-gray-500 font-light">
          <p>© 2025 Denis Mikhin</p>
        </div>
      </footer>
    </div>
  );
};

export default ProjectsPage;

