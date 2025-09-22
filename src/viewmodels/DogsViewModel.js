import { useEffect, useState, useMemo } from "react"
import Dog from "../models/Dog"

export default function useDogsViewModel() {
  const [dogs, setDogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")
  const [search, setSearch] = useState("")
  const [filters, setFilters] = useState({ breed: "", size: "", maxAge: 20 })

  useEffect(() => {
    async function fetchDogs() {
      try {
        setLoading(true)
        const res = await fetch(import.meta.env.VITE_API_URL)
        if (!res.ok) throw new Error(`HTTP ${res.status}`)
        const data = await res.json()
        const arr = data.record ?? []
        setDogs(arr.map(Dog.fromJson))
      } catch (e) {
        setError("Kunde inte hämta hundar.")
      } finally {
        setLoading(false)
      }
    }
    fetchDogs()
  }, [])

  const breeds = useMemo(() => [...new Set(dogs.map(d => d.breed))], [dogs])
  const sizes = useMemo(() => [...new Set(dogs.map(d => d.size))], [dogs])
  const maxAgeInData = useMemo(() => Math.max(10, ...dogs.map(d => d.age || 0)), [dogs])

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase()
    return dogs.filter(d =>
      (!q || d.name.toLowerCase().includes(q)) &&
      (!filters.breed || d.breed === filters.breed) &&
      (!filters.size || d.size === filters.size) &&
      (d.age <= filters.maxAge)
    )
  }, [dogs, search, filters])

  return { dogs, filtered, breeds, sizes, maxAgeInData, loading, error, search, setSearch, filters, setFilters }
}
