import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';
import Download from './components/Download';
import FAQ from './components/FAQ';

function App() {
  return (
    <div className="font-Poppins">
      <Header/>
      <Hero />
      <Features />
      <Download />
      <FAQ />
    </div>
  );
}

export default App;
