import React from 'react';
import { Lenis } from '@studio-freight/react-lenis';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import PersonalImageShowcase from './components/PersonalImageShowcase';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './index.css';

function App() {
    return (
        <Lenis root>
            <div className="App">
                <Header />
                <main>
                    <Hero />
                    <About />
                    <Skills />
                    <Projects />
                    <PersonalImageShowcase />
                    <Contact />
                </main>
                <Footer />
            </div>
        </Lenis>
    );
}

export default App;