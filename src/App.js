import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Download from './components/Download';
import FAQ from './components/FAQ';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-Poppins overflow-hidden">
      <Header/>
      <Hero />
      <Features />
      <Download />
      <FAQ />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
