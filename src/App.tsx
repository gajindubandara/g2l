import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/sections/HeroSection';
import { ServiceSection } from './components/sections/ServiceSection';
import { WebProjectSection } from './components/sections/WebProjectSection';
import { ParticleBackground } from "./components/animations/ParticleBackground";
import { ContactSection } from './components/sections/ContactSection';

import { Footer } from './components/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './index.css';
import {NotFoundPage} from "./components/NotFoundPage.tsx";

const MainContent: React.FC = () => {
    return (
        <>
            <ParticleBackground />
            <Navbar />
            <HeroSection />
            <ServiceSection />
            <WebProjectSection />
            <ContactSection />
            <Footer />
        </>
    );
};

const App: React.FC = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainContent />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </Router>
    );
};

export default App;