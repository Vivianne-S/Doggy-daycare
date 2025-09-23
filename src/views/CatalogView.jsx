import React from "react";
import useDogsViewModel from "../viewmodels/DogsViewModel";
import { Link } from "react-router-dom";
import "../css/Catalog.css";

function CatalogView() {
  const {
    filteredDogs,
    search, setSearch,
    breeds,
    selectedBreed, setSelectedBreed,
    presentOnly, setPresentOnly,
    ageFilter, setAgeFilter,
    ageSort, setAgeSort,
    loading, error
  } = useDogsViewModel();

  if (loading) return <p className="text-center mt-10">⏳ Laddar hundar...</p>;
  if (error) return <p className="text-center mt-10 text-red-500">{error}</p>;

  const presentDogs = filteredDogs.filter((d) => d.present);
  const absentDogs = filteredDogs.filter((d) => !d.present);

  const getBorderClass = (sex) => {
    if (sex === "female") return "img-female";
    if (sex === "male") return "img-male";
    return "";
  };

  const renderDogCard = (dog) => (
    <li key={dog.chipNumber}>
      <img
        src={dog.img}
        alt={dog.name}
        className={`dog-img ${getBorderClass(dog.sex)}`}
        onError={(e) => { e.target.style.display = "none"; }}
      />
      <h2>{dog.name}</h2>
      <p>{dog.breed}</p>
      <p className="age">Ålder: {dog.age}</p>
      <Link to={`/dog/${dog.chipNumber}`}>Se detaljer →</Link>
    </li>
  );

  return (
    <div className="catalog">
      <h1>🐶 Våra hundar</h1>

      {/* Sök */}
      <div className="search">
        <input
          type="text"
          placeholder="Sök efter hundar..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Filter */}
      <div className="filters">
        <select value={selectedBreed} onChange={(e) => setSelectedBreed(e.target.value)}>
          <option value="">Alla raser</option>
          {breeds.map((b) => <option key={b}>{b}</option>)}
        </select>

        <select value={ageFilter} onChange={(e) => setAgeFilter(e.target.value)}>
          <option value="">Alla åldrar</option>
          <option value="young">Valpar (under 3 år)</option>
          <option value="adult">Vuxna (3–7 år)</option>
          <option value="senior">Seniorer (över 7 år)</option>
        </select>

        <select value={ageSort} onChange={(e) => setAgeSort(e.target.value)}>
          <option value="">Ingen sortering</option>
          <option value="asc">Ålder: yngst först</option>
          <option value="desc">Ålder: äldst först</option>
        </select>
      </div>

      {/* Checkbox under filter */}
      <div className="present-only">
        <input
          type="checkbox"
          checked={presentOnly}
          onChange={(e) => setPresentOnly(e.target.checked)}
        />
        <label>Visa endast närvarande 🟢</label>
      </div>

      {/* Hundar */}
      <h2 className="section-title">Närvarande 🟢</h2>
      <ul className="grid">{presentDogs.map(renderDogCard)}</ul>

      {!presentOnly && (
        <>
          <h2 className="section-title">Ej närvarande ⚪</h2>
          <ul className="grid">{absentDogs.map(renderDogCard)}</ul>
        </>
      )}
    </div>
  );
}

export default CatalogView;