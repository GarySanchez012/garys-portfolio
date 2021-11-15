import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Projects from './Components/Projects';
import ContactForm from './Components/ContactForm';
import AboutMe from './Components/AboutMe';


function App() {
  return (
    <div>
      <Navbar />
      <div data-bs-spy="scroll" data-bs-target="#navbarNav" data-bs-offset="0">
      <AboutMe />
      <Projects />
      <ContactForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;
