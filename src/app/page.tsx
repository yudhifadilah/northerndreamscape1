import React from 'react';
import { TestimonialCard } from '../lib/Navbar'; 
import { EclipseIndependent } from '../lib/Eclipse'; 
//import { ImageGrid } from '../lib/Grid'; 
//import { Skill } from '../lib/Skill'; 

const Home: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center font-mono">
      <TestimonialCard />
      <main className="p-5">
        <h1 className="text-2xl font-semibold mb-3 text-center">Collections : Eclipse of Independent</h1>
        <div className="text-center">
        there is only front side, cause people always talk about u from the back. dumb ass!
        <div className="mt-2">
        </div>
        <EclipseIndependent />
        </div>
      </main>
    </div>
    
  );
};

export default Home;
