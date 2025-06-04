import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Technology } from './components/Technology';
import { Audience } from './components/Audience';
import { GetStarted } from './components/GetStarted';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Technology />
        <Audience />
        <GetStarted />
      </main>
      <Footer />
    </div>
  );
}

export default App;