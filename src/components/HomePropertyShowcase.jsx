import { Heart } from "lucide-react";
import { useState } from "react";

const uniqueProperties = [
  {
    id: "lac-tanganyika",
    type: "Hotel",
    stars: 5,
    badge: "",
    name: "Hotel Club du Lac Tanganyika",
    location: "Bujumbura, Burundi",
    rating: "8.3",
    ratingText: "Very Good",
    reviews: "177 reviews",
    price: "BHD 68",
    image:
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "lake-kivu-serena",
    type: "Hotel",
    stars: 5,
    badge: "Genius",
    name: "Lake Kivu Serena Hotel",
    location: "Gisenyi, Rwanda",
    rating: "8.7",
    ratingText: "Excellent",
    reviews: "171 reviews",
    price: "BHD 111",
    image:
      "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "friends-beach",
    type: "Resort",
    stars: 5,
    badge: "",
    name: "2 Friends Beach Hotel",
    location: "Entebbe, Uganda",
    rating: "8.6",
    ratingText: "Excellent",
    reviews: "274 reviews",
    price: "BHD 68",
    image:
      "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "ecolodge",
    type: "Guesthouse",
    stars: 3,
    badge: "Genius",
    name: "Distant Relatives Ecolodge & Backpackers",
    location: "Kilifi, Kenya",
    rating: "8.8",
    ratingText: "Excellent",
    reviews: "322 reviews",
    price: "BHD 10",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=700&q=80",
  },
];

const weekendDeals = [
  {
    id: "kigali-horizon",
    badge: "Genius",
    deal: "Getaway Deal",
    name: "KiGALI HORIZON HOMES",
    location: "Kigali, Rwanda",
    rating: "8.7",
    ratingText: "Excellent",
    reviews: "45 reviews",
    nights: "2 nights",
    oldPrice: "BHD 26",
    price: "BHD 21",
    image:
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "kivu-hilltop",
    badge: "",
    deal: "",
    name: "Kivu Hilltop beach Hotel & Apartment",
    location: "Gisenyi, Rwanda",
    rating: "8.8",
    ratingText: "Excellent",
    reviews: "6 reviews",
    nights: "2 nights",
    oldPrice: "",
    price: "BHD 33",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "saish-stay",
    badge: "Genius",
    deal: "",
    name: "SAISH Stay",
    location: "Ruhengeri, Rwanda",
    rating: "9",
    ratingText: "Wonderful",
    reviews: "225 reviews",
    nights: "2 nights",
    oldPrice: "BHD 26",
    price: "BHD 16",
    image:
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "park-inn",
    badge: "Genius",
    deal: "Limited-time Deal",
    name: "Park Inn by Radisson, Kigali",
    location: "Kigali, Rwanda",
    rating: "8.5",
    ratingText: "Very Good",
    reviews: "657 reviews",
    nights: "2 nights",
    oldPrice: "BHD 94",
    price: "BHD 66",
    image:
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791?auto=format&fit=crop&w=700&q=80",
  },
];

const lovedHomes = [
  {
    id: "stare-miasto",
    name: "Aparthotel Stare Miasto",
    location: "Old Town, Poland, Krakow",
    rating: "8.8",
    ratingText: "Excellent",
    reviews: "3,108 reviews",
    price: "BHD 70",
    image:
      "https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "nero",
    name: "NERO Boutique Hotel",
    location: "Greece, Imerovigli",
    rating: "9.6",
    ratingText: "Exceptional",
    reviews: "107 reviews",
    price: "BHD 238",
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "7seasons",
    name: "7Seasons Apartments Budapest",
    location: "06. Terezvaros, Hungary, Budapest",
    rating: "8.8",
    ratingText: "Excellent",
    reviews: "10,033 reviews",
    price: "BHD 55",
    image:
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=700&q=80",
  },
  {
    id: "numa-florence",
    name: "Numa Florence Vita",
    location: "Santa Maria Novella, Italy, Florence",
    rating: "9.0",
    ratingText: "Wonderful",
    reviews: "995 reviews",
    price: "BHD 103",
    image:
      "https://images.unsplash.com/photo-1615874694520-474822394e73?auto=format&fit=crop&w=700&q=80",
  },
];

export default function HomePropertyShowcase() {
  const [favorites, setFavorites] = useState({});
  const [activeSavedTrip, setActiveSavedTrip] = useState("");

  function toggleFavorite(id) {
    const isCurrentlyFavorite = Boolean(favorites[id]);

    setFavorites((current) => {
      const next = { ...current };

      if (isCurrentlyFavorite) {
        delete next[id];
      } else {
        next[id] = true;
      }

      return next;
    });

    setActiveSavedTrip((current) => {
      if (current === id) {
        return "";
      }

      return isCurrentlyFavorite ? "" : id;
    });
  }

  return (
    <section className="bg-white pb-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <PropertySection
          title="Stay at our top unique properties"
          subtitle="From castles and villas to boats and igloos, we have it all"
          items={uniqueProperties}
          favorites={favorites}
          activeSavedTrip={activeSavedTrip}
          onToggleFavorite={toggleFavorite}
        />

        <PropertySection
          title="Deals for the weekend"
          subtitle="Save on stays for June 19 - June 21"
          items={weekendDeals}
          favorites={favorites}
          activeSavedTrip={activeSavedTrip}
          onToggleFavorite={toggleFavorite}
          className="mt-10"
          showDealInfo
        />

        <PropertySection
          title="Homes guests love"
          action="Discover homes"
          items={lovedHomes}
          favorites={favorites}
          activeSavedTrip={activeSavedTrip}
          onToggleFavorite={toggleFavorite}
          className="mt-10"
        />

        <TravelMoreCard />
        <PopularTravelers />
      </div>
    </section>
  );
}

function PropertySection({
  action,
  activeSavedTrip,
  className = "",
  favorites,
  items,
  onToggleFavorite,
  showDealInfo = false,
  subtitle,
  title,
}) {
  return (
    <section className={className}>
      <div className="mb-4 flex items-start justify-between gap-4">
        <div>
          <h2 className="text-xl font-bold text-neutral-950">{title}</h2>
          {subtitle && <p className="mt-1 text-sm text-neutral-600">{subtitle}</p>}
        </div>
        {action && (
          <a href="#" className="text-sm font-semibold text-[#006ce4]">
            {action}
          </a>
        )}
      </div>

      <div className="relative">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((property) => (
            <PropertyCard
              key={property.id}
              isFavorite={Boolean(favorites[property.id])}
              isSavedMessageOpen={activeSavedTrip === property.id}
              property={property}
              showDealInfo={showDealInfo}
              onToggleFavorite={() => onToggleFavorite(property.id)}
            />
          ))}
        </div>

        <button
          type="button"
          aria-label={`See more ${title}`}
          className="absolute right-0 top-24 hidden h-9 w-9 translate-x-1/2 items-center justify-center rounded-full bg-white text-lg font-semibold text-neutral-900 shadow-md lg:flex"
        >
          &gt;
        </button>
      </div>
    </section>
  );
}

function PropertyCard({
  isFavorite,
  isSavedMessageOpen,
  onToggleFavorite,
  property,
  showDealInfo,
}) {
  return (
    <article className="overflow-hidden rounded-md border border-neutral-200 bg-white shadow-sm">
      <div className="relative">
        <img
          src={property.image}
          alt={property.name}
          className="aspect-[4/3] w-full object-cover"
        />
        <button
          type="button"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          aria-pressed={isFavorite}
          onClick={onToggleFavorite}
          className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-sm"
        >
          <Heart
            size={20}
            className={isFavorite ? "fill-red-600 text-red-600" : "text-neutral-800"}
          />
        </button>

        {isSavedMessageOpen && (
          <div className="absolute right-2 top-14 z-20 w-[calc(100%-1rem)] rounded-md bg-white text-sm text-neutral-950 shadow-xl sm:w-64">
            <p className="border-b border-neutral-200 px-4 py-3">
              Saved to:{" "}
              <span className="font-bold text-[#006ce4]">My next trip</span>
            </p>
            <div className="flex items-center justify-between px-4 py-3">
              <span className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full border-2 border-[#006ce4]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#006ce4]" />
                </span>
                My next trip
              </span>
              <span className="flex flex-col text-neutral-500">
                <span className="leading-3">▲</span>
                <span className="leading-3">▼</span>
              </span>
            </div>
          </div>
        )}
      </div>

      <div className="flex min-h-44 flex-col p-3">
        <div className="flex flex-wrap items-center gap-1 text-[11px] text-neutral-600">
          {property.type && <span>{property.type}</span>}
          {property.stars && (
            <span className="font-bold text-[#febb02]">{"★".repeat(property.stars)}</span>
          )}
          {property.badge && (
            <span className="rounded bg-[#004cb8] px-1.5 py-0.5 text-[10px] font-semibold text-white">
              {property.badge}
            </span>
          )}
        </div>

        {showDealInfo && property.badge && (
          <span className="mb-1 w-fit rounded bg-[#004cb8] px-1.5 py-0.5 text-[10px] font-semibold text-white">
            {property.badge}
          </span>
        )}

        <h3 className="text-base font-bold leading-tight text-neutral-950">
          {property.name}
        </h3>
        <p className="mt-1 text-xs text-neutral-600">{property.location}</p>

        <div className="mt-3 flex items-start gap-2 text-xs">
          <span className="rounded bg-[#003b95] px-1.5 py-1 font-bold text-white">
            {property.rating}
          </span>
          <span>
            <span className="block text-neutral-950">{property.ratingText}</span>
            <span className="text-neutral-600">{property.reviews}</span>
          </span>
        </div>

        {showDealInfo && property.deal && (
          <span className="mt-2 w-fit rounded bg-[#008234] px-2 py-1 text-[11px] font-semibold text-white">
            {property.deal}
          </span>
        )}

        <div className="mt-auto flex items-end justify-end gap-1 pt-5 text-right text-xs text-neutral-600">
          {showDealInfo && <span>{property.nights}</span>}
          {property.oldPrice && (
            <span className="text-red-600 line-through">{property.oldPrice}</span>
          )}
          {!showDealInfo && <span>Starting from</span>}
          <span className="text-base font-bold text-neutral-950">{property.price}</span>
        </div>
      </div>
    </article>
  );
}

function TravelMoreCard() {
  return (
    <section className="mt-10">
      <h2 className="text-xl font-bold text-neutral-950">Travel more, spend less</h2>
      <div className="mt-3 flex items-center justify-between gap-6 rounded-md border border-neutral-200 p-4">
        <div>
          <h3 className="text-sm font-bold">Sign in, save money</h3>
          <p className="mt-2 text-sm">
            Save 10% or more at participating properties - just look for the blue
            Genius label
          </p>
          <div className="mt-3 flex items-center gap-4">
            <button
              type="button"
              className="rounded bg-[#006ce4] px-4 py-2 text-sm font-semibold text-white"
            >
              Sign in
            </button>
            <button type="button" className="text-sm font-semibold text-[#006ce4]">
              Register
            </button>
          </div>
        </div>
        <div className="hidden h-20 w-20 items-center justify-center rounded-md bg-[#006ce4] text-sm font-bold text-white sm:flex">
          Genius
        </div>
      </div>
    </section>
  );
}

function PopularTravelers() {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold text-neutral-950">
        Popular with travelers from Rwanda
      </h2>
      <div className="mt-4 flex flex-wrap gap-3 text-sm">
        <button className="rounded-full border border-[#006ce4] px-4 py-2 text-[#006ce4]">
          Domestic cities
        </button>
        <button className="rounded-full px-4 py-2">International cities</button>
        <button className="rounded-full px-4 py-2">Countries</button>
      </div>
      <p className="mt-6 text-xs leading-7 text-neutral-900">
        Countries · Regions · Cities · Districts · Airports · Hotels · Places of
        interest · Vacation Homes · Apartments · Resorts · Villas · Hostels ·
        B&amp;Bs · Guest Houses · Unique places to stay · All destinations · All
        flight destinations · All car rental locations · All vacation destinations ·
        Guides · Discover · Discover monthly stays
      </p>
    </section>
  );
}
