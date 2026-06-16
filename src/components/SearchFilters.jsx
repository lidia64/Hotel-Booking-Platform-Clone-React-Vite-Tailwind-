import { useSearchParams } from "react-router-dom";

export default function SearchFilters() {
  const [searchParams, setSearchParams] = useSearchParams();

  const destination = searchParams.get("destination") || "";
  const minRating = searchParams.get("rating") || "";
  const maxPrice = searchParams.get("maxPrice") || "500";

  function updateFilter(key, value) {
    const params = new URLSearchParams(searchParams);

    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }

    setSearchParams(params);
  }

  function resetFilters() {
    setSearchParams({});
  }

  return (
    <div className="bg-white rounded-xl shadow p-5 space-y-5">
      <h3 className="font-bold">Filters</h3>

      <input
        value={destination}
        onChange={(event) => updateFilter("destination", event.target.value)}
        placeholder="Destination"
        className="w-full border p-3 rounded"
      />

      <select
        value={minRating}
        onChange={(event) => updateFilter("rating", event.target.value)}
        className="w-full border p-3 rounded"
      >
        <option value="">Any Rating</option>
        <option value="4">4+</option>
        <option value="4.5">4.5+</option>
        <option value="4.8">4.8+</option>
      </select>

      <div>
        <div className="flex justify-between text-sm mb-2">
          <span>Max price</span>
          <span>${maxPrice}</span>
        </div>

        <input
          type="range"
          min="50"
          max="500"
          value={maxPrice}
          onChange={(event) => updateFilter("maxPrice", event.target.value)}
          className="w-full"
        />
      </div>

      <button
        onClick={resetFilters}
        className="w-full bg-gray-100 text-gray-700 rounded p-3 font-semibold"
      >
        Reset Filters
      </button>
    </div>
  );
}
