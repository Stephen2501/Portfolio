import './App.css';
import Projects from './Components/Projects';
import About from './Components/About';
import Contact from './Components/Contact';
import Home from "./Components/Home"
import Header from "./Components/Header"
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Header />
      <Routes>
        <Route 
        path="/"
        element={<Home />}
        />
        <Route
              path="/projects"
              element={
                <Projects />
              }
            />
            <Route
              path="/about"
              element={
                <About />
              }
            />
            <Route
              path="/contact"
              element={
                <Contact />
              }
            />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
