import { useParams, Link } from "react-router-dom";
import useDogsViewModel from "../viewmodels/DogsViewModel";
import "../css/DogDetail.css";

function DogDetailView() {
  const { id } = useParams();
  const { dogs, loading } = useDogsViewModel();

  if (loading) return <p className="text-center mt-10">⏳ Laddar...</p>;

  const dog = dogs.find((d) => String(d.chipNumber) === String(id));
  if (!dog) return <p className="text-center mt-10">❌ Hunden hittades inte</p>;

  const borderClass = dog.sex === "female" ? "img-female" : "img-male";

  return (
    <div className="detail">
      <div className="detail-card">
        <img src={dog.img} alt={dog.name} className={`dog-img ${borderClass}`} />
        <h1>{dog.name}</h1>
        <p><span>🐾 Ras:</span> {dog.breed}</p>
        <p><span>🎂 Ålder:</span> {dog.age} år</p>
        <p><span>⚧ Kön:</span> {dog.sex}</p>
        <p><span>💾 Chipnummer:</span> {dog.chipNumber}</p>
        <p>
          <span>👤 Ägare:</span> {dog.owner.name} {dog.owner.lastName} <br />
          📞 {dog.owner.phoneNumber}
        </p>
        <p>
          <span>📍 Närvarande:</span> {dog.present ? "Ja ✅" : "Nej ❌"}
        </p>
        <Link to="/catalog" className="back-btn">← Tillbaka</Link>
      </div>
    </div>
  );
}

export default DogDetailView;