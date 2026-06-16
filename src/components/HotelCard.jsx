import { useNavigate } from "react-router-dom";

export default function HotelCard({ hotel }) {
  const navigate = useNavigate();
  const image = hotel.images?.[0] || hotel.image;

  return (
    <div
      onClick={() => navigate(`/property/${hotel.id}`)}
      role="button"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "Enter") {
          navigate(`/property/${hotel.id}`);
        }
      }}
      className="cursor-pointer rounded-xl overflow-hidden shadow hover:scale-105 duration-300"
    >
      <img
        src={image}
        alt={hotel.name}
        className="h-64 w-full object-cover"
      />

      <div className="p-5">
        <h3 className="font-bold">{hotel.name}</h3>

        <p>{hotel.location}</p>

        <p>⭐ {hotel.rating}</p>

        <p>${hotel.price}</p>
      </div>
    </div>
  );
}
