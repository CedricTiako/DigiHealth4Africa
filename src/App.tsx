import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Home from './pages/Home';
import MallettesPage from './pages/services/MallettesPage';
import BornesPage from './pages/services/BornesPage';
import VehiculesPage from './pages/services/VehiculesPage';
import ConteneurPage from './pages/services/ConteneurPage';
import TeleExpertisePage from './pages/services/TeleExpertisePage';
import EvacuationsPage from './pages/services/EvacuationsPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services/mallettes" element={<MallettesPage />} />
              <Route path="/services/bornes" element={<BornesPage />} />
              <Route path="/services/vehicules" element={<VehiculesPage />} />
              <Route path="/services/conteneurs" element={<ConteneurPage />} />
              <Route path="/services/tele-expertise" element={<TeleExpertisePage />} />
              <Route path="/services/evacuations" element={<EvacuationsPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;