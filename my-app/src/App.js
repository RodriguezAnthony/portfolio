import './App.css';
import Home from "./components/Home/Home"
import AboutMe from './components/About Me/AboutMe';
import Projects from "./components/Projects/Projects"
import Hobbies from './components/Hobbies/Hobbies';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<AboutMe />} />
        <Route path="projects" element={<Projects />} />
        <Route path="hobbies" element={<Hobbies />} />
      </Routes>
    </div>
  );
}

export default App;
