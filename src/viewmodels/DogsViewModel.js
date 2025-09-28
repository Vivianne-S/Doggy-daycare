import { useState, useEffect, useMemo } from "react";
import Dog from "../models/Dog";

export default function useDogsViewModel() {
  const [dogs, setDogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filters
  const [search, setSearch] = useState("");
  const [selectedBreed, setSelectedBreed] = useState("");
  const [selectedSize, setSelectedSize] = useState("");
  const [presentOnly, setPresentOnly] = useState(false);
  const [ageFilter, setAgeFilter] = useState(""); // young, adult, senior
  const [ageSort, setAgeSort] = useState(""); // asc, desc

  useEffect(() => {
    const fetchDogs = async () => {
      try {
        const res = await fetch(import.meta.env.VITE_API_URL);
        const data = await res.json();
        const parsedDogs = (data.record || data).map((dog) => Dog.fromJson(dog));
        setDogs(parsedDogs);
      } catch (err) {
        console.error(err);
        setError("Kunde inte hämta hundarna 🐾");
      } finally {
        setLoading(false);
      }
    };

    fetchDogs();
  }, []);

  // Raser & storlekar
  const breeds = useMemo(() => [...new Set(dogs.map((d) => d.breed))], [dogs]);
  const sizes = useMemo(() => [...new Set(dogs.map((d) => d.size))], [dogs]);

  // Filtrerade hundar
  const filteredDogs = useMemo(() => {
    let list = dogs;

    if (search) {
      list = list.filter((d) =>
        d.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (selectedBreed) list = list.filter((d) => d.breed === selectedBreed);
    if (selectedSize) list = list.filter((d) => d.size === selectedSize);
    if (presentOnly) list = list.filter((d) => d.present);

    if (ageFilter) {
      list = list.filter((d) => {
        if (ageFilter === "young") return d.age < 3;
        if (ageFilter === "adult") return d.age >= 3 && d.age <= 7;
        if (ageFilter === "senior") return d.age > 7;
        return true;
      });
    }

    if (ageSort) {
      list = [...list].sort((a, b) =>
        ageSort === "asc" ? a.age - b.age : b.age - a.age
      );
    }

    return list;
  }, [dogs, search, selectedBreed, selectedSize, presentOnly, ageFilter, ageSort]);

  return {
    dogs,
    filteredDogs,
    loading,
    error,
    search,
    setSearch,
    breeds,
    sizes,
    selectedBreed,
    setSelectedBreed,
    selectedSize,
    setSelectedSize,
    presentOnly,
    setPresentOnly,
    ageFilter,
    setAgeFilter,
    ageSort,
    setAgeSort,
  };
}