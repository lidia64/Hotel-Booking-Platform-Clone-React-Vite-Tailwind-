import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SearchCard() {
  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [guests, setGuests] = useState("");
  const navigate = useNavigate();

  function handleSearch() {
    const params = new URLSearchParams();

    if (destination.trim()) {
      params.set("destination", destination.trim());
    }

    if (checkIn) {
      params.set("checkIn", checkIn);
    }

    if (guests.trim()) {
      params.set("guests", guests.trim());
    }

    const query = params.toString();
    navigate(`/search${query ? `?${query}` : ""}`);
  }

  return (
    <div className="bg-white rounded-xl p-5 grid md:grid-cols-4 gap-3">
      <input
        value={destination}
        onChange={(event) => setDestination(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleSearch();
          }
        }}
        placeholder="Destination"
        className="border p-4 rounded"
      />

      <input
        value={checkIn}
        onChange={(event) => setCheckIn(event.target.value)}
        type="date"
        className="border p-4 rounded"
      />

      <input
        value={guests}
        onChange={(event) => setGuests(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") {
            handleSearch();
          }
        }}
        placeholder="Guests"
        className="border p-4 rounded"
      />

      <button
        onClick={handleSearch}
        className="bg-[#003580] text-white rounded p-4 font-semibold hover:bg-blue-800"
      >
        Search
      </button>
    </div>
  );
}
