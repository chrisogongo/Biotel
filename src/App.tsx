import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, Component, ReactNode } from 'react';
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

// Error Boundary to catch runtime errors
interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error: Error | null;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('App Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px', textAlign: 'center', fontFamily: 'sans-serif' }}>
          <h1 style={{ color: '#0e4d92' }}>Biotel DNA Kenya</h1>
          <p style={{ color: '#dc2626', margin: '20px 0' }}>Something went wrong loading the website.</p>
          <p>Please try refreshing the page or contact us directly:</p>
          <p style={{ margin: '20px 0' }}>
            📞 <a href="tel:+254711371092" style={{ color: '#0e4d92' }}>+254 711 371092</a><br />
            💬 <a href="https://wa.me/254711371092" style={{ color: '#25d366' }}>WhatsApp Us</a><br />
            📧 <a href="mailto:dna@bioteldna.co.ke" style={{ color: '#0e4d92' }}>dna@bioteldna.co.ke</a>
          </p>
          {this.state.error && (
            <details style={{ marginTop: '20px', textAlign: 'left', maxWidth: '600px', margin: '20px auto' }}>
              <summary style={{ cursor: 'pointer', color: '#666' }}>Error Details</summary>
              <pre style={{ background: '#f5f5f5', padding: '10px', overflow: 'auto', fontSize: '12px' }}>
                {this.state.error.toString()}
              </pre>
            </details>
          )}
        </div>
      );
    }

    return this.props.children;
  }
}

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <ErrorBoundary>
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
    </ErrorBoundary>
  );
}

export default App;
