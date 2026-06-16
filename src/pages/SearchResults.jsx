import { useSearchParams } from "react-router-dom";

import Header from "../components/Header";
import SearchFilters from "../components/SearchFilters";
import HotelCard from "../components/HotelCard";

import hotels from "../data/properties.json";

export default function SearchResults() {
  const [searchParams] = useSearchParams();

  const destination = (searchParams.get("destination") || "").toLowerCase();
  const minRating = Number(searchParams.get("rating") || 0);
  const maxPrice = Number(searchParams.get("maxPrice") || 999999);

  const filteredHotels = hotels.filter((hotel) => {
    const matchesDestination =
      !destination ||
      hotel.name.toLowerCase().includes(destination) ||
      hotel.location.toLowerCase().includes(destination);

    const matchesRating = !minRating || hotel.rating >= minRating;
    const matchesPrice = !maxPrice || hotel.price <= maxPrice;

    return matchesDestination && matchesRating && matchesPrice;
  });

  return (
    <>
      <Header />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-[300px_1fr] gap-8 p-6">
        <SearchFilters />

        <div>
          <h2 className="text-3xl font-bold mb-6">
            {destination ? `Hotels in ${destination}` : "All Hotels"}
          </h2>

          {filteredHotels.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-8">
              {filteredHotels.map((hotel) => (
                <HotelCard key={hotel.id} hotel={hotel} />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow p-8 text-center">
              <h3 className="text-xl font-bold mb-2">No hotels found</h3>
              <p>Try a different destination or adjust your filters.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
