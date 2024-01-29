import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import About from "./components/About"
import Certifications from "./components/Certifications";
import Projects from "./components/Projects"
import Contact from "./components/Contact";
import ProjectDetails from "./components/ProjectDetails";
import CertificateDetails from "./components/CertificateDetails";

function App() {
  return (
    <div className="App">
      <Navbar />  <Routes>
          <Route path="/about" element={<About />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/certifications" element={<Certifications />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/projects/:id" element={<ProjectDetails />}/>
          <Route path="/certifications/:cert_id" element={<CertificateDetails />}/>
      </Routes>
    </div>  
  );
}

export default App;
