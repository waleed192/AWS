import Header from './components/Header/Header';
import './App.css';
import NavBar from './components/NavBar/Navbar';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experiance';
import Footer from './components/Footer';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" />

      <NavBar />
      <Header />
      <Skills />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
