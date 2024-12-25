import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero';
import Technologies from './Components/Technologies';
import Projects from './Components/Projects';
import Experience from './Components/Experience';
import Contact from './Components/Contact';

const App = () => {
  return (
    <div className="overflow-x-hidden text-stone-300 antialiased">
      <div className="fixed inset-0 -z-10">
        <div className="relative h-full w-full bg-black">
          <div
            className="absolute bottom-0 left-0 right-0 top-0"
            style={{
              backgroundImage: `linear-gradient(to right, #4f4f4f2e 1px, transparent 1px), 
                                linear-gradient(to bottom, #8080800a 1px, transparent 1px)`,
              backgroundSize: '14px 24px',
            }}
          ></div>
          <div
            className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full"
            style={{
              backgroundImage: `radial-gradient(circle 400px at 50% 300px, #fbfbfb36, #000)`,
            }}
          ></div>
        </div>
      </div>

      <div className="container mx-auto px-8">
        <Navbar />
        <Hero />
        <Technologies />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </div>
  );
};

export default App
