import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import WelcomeView from "./views/WelcomeView";
import CatalogView from "./views/CatalogView";
import DogDetailView from "./views/DogDetailView";
import "./index.css";

function App() {
  return (
    <Router>
      {/* Navbar */}
      <nav className="navbar">
        <Link to="/" className="nav-link">🏠 Start</Link>
        <Link to="/catalog" className="nav-link">🐶 Hundar</Link>
      </nav>

      <Routes>
        <Route path="/" element={<WelcomeView />} />
        <Route path="/catalog" element={<CatalogView />} />
        <Route path="/dog/:id" element={<DogDetailView />} />
      </Routes>
    </Router>
  );
}

export default App;