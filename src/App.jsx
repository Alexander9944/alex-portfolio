
import Navbar from "./components/NavBar/navbar.jsx";
import Intro from "./components/Intro/intro.jsx";
import Skills from "./components/Skills/skills.jsx";
import Works from "./components/Works/works.jsx";
import Contact from "./components/Contact/contact.jsx";
import Footer from "./components/Footer/footer.jsx"; 

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Works /> 
      <Contact />
      <Footer /> 
    </div>
  );
}
 
export default App;
