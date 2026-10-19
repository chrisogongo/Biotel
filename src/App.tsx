import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetail } from './pages/ServiceDetail';
import { PaternityTestPage } from './pages/PaternityTestPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { LocationsPage } from './pages/LocationsPage';
import { InfoPage } from './pages/InfoPage';
import { AIAssistant } from './components/AIAssistant';
import { WhatsAppButton } from './components/WhatsAppButton';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/paternity-dna-test" element={<PaternityTestPage />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/locations" element={<LocationsPage />} />
          <Route path="/locations/:slug" element={<LocationsPage />} />
          <Route path="/info/:topic" element={<InfoPage />} />
          <Route path="/dna-test-cost" element={<InfoPage />} />
          <Route path="/dna-test-process" element={<InfoPage />} />
          <Route path="/dna-test-results" element={<InfoPage />} />
          <Route path="/dna-test-requirements" element={<InfoPage />} />
          <Route path="/faqs" element={<InfoPage />} />
          <Route path="/private-vs-legal" element={<InfoPage />} />
        </Routes>
      </Layout>
      <WhatsAppButton />
      <AIAssistant />
    </Router>
  );
}

export default App;
