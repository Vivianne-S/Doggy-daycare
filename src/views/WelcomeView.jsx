import { Link } from "react-router-dom";
import "../css/Welcome.css";

export default function WelcomeView() {
  return (
    <div className="welcome">
      <div className="welcome-content">
        <h1>Välkommen till Doggy Daycare 🐾</h1>
        <p>
          Här kan du hitta information om alla våra underbara hundar. 
          Klicka på <span className="highlight">Hundar</span> i menyn för att börja utforska.
        </p>
        <Link to="/catalog" className="btn">🐶 Se hundarna</Link>
      </div>
    </div>
  );
}