import {
  BedDouble,
  CalendarDays,
  ChevronDown,
  Search,
  UserRound,
  X,
} from "lucide-react";
import { useState } from "react";
import heroImage from "../assets/hero.jpg";

const destinations = [
  {
    name: "Kigali",
    flag: "🇷🇼",
    image:
      "https://media.istockphoto.com/id/1254047479/photo/modern-kigali.webp?a=1&b=1&s=612x612&w=0&k=20&c=bM9D7b_Xe7YLMy__eBXP627kk-fvtsuy5LlG87VmI3s=",
  },
  {
    name: "Nairobi",
    flag: "🇰🇪",
    image: "https://images.unsplash.com/photo-1610026378085-15d0e8f685db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2VzJTIwb2YlMjBwYXJsaW1lbnR8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "Kampala",
    flag: "🇺🇬",
    image: "https://images.unsplash.com/photo-1610026378085-15d0e8f685db?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2VzJTIwb2YlMjBwYXJsaW1lbnR8ZW58MHx8MHx8fDA%3D",
  },
  {
    name: "London",
    flag: "🇬🇧",
    image:
      "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=700&q=80",
  },
  {
    name: "Dar es Salaam",
    flag: "🇹🇿",
    image:
      "https://source.unsplash.com/700x460/?dar-es-salaam,tanzania,city",
  },
];

const propertyTypes = [
  {
    name: "Hotels",
    dates: "Jun 20-Jun 21, 2 adults, 3 children",
    available: "44 available",
    image:
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Apartments",
    dates: "Jun 20-Jun 21, 2 adults, 3 children",
    available: "129 available",
    image:
      "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Resorts",
    dates: "Unavailable for your dates",
    available: "",
    image:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=500&q=80",
  },
  {
    name: "Villas",
    dates: "Jun 20-Jun 21, 2 adults, 3 children",
    available: "12 available",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=500&q=80",
  },
];

export default function HomeSearchExperience() {
  const [dates, setDates] = useState({
    checkIn: "2026-06-20",
    checkOut: "2026-06-21",
  });

  function updateDate(event) {
    const { name, value } = event.target;
    setDates((current) => ({
      ...current,
      [name]: value,
    }));
  }

  return (
    <main className="bg-white pb-16">
      <section className="mx-auto max-w-7xl px-4 sm:px-6">
        <form className="-mt-8 grid overflow-hidden rounded-lg border-4 border-[#febb02] bg-[#febb02] text-sm shadow-lg lg:grid-cols-[1.25fr_1fr_1fr_140px]">
          <SearchField icon={<BedDouble size={24} />} className="lg:border-r-4">
            <span className="font-semibold">Kigali</span>
            <button
              type="button"
              aria-label="Clear destination"
              className="ml-auto rounded-full p-1 text-neutral-700 hover:bg-neutral-100"
            >
              <X size={20} />
            </button>
          </SearchField>

          <div className="flex min-h-16 items-center gap-3 border-[#febb02] bg-white px-5 text-left text-neutral-950 lg:border-r-4">
            <span className="text-neutral-600">
              <CalendarDays size={24} />
            </span>
            <label className="sr-only" htmlFor="check-in">
              Check-in date
            </label>
            <input
              id="check-in"
              name="checkIn"
              type="date"
              value={dates.checkIn}
              onChange={updateDate}
              className="min-w-0 flex-1 font-semibold outline-none"
            />
            <span className="text-neutral-500">-</span>
            <label className="sr-only" htmlFor="check-out">
              Check-out date
            </label>
            <input
              id="check-out"
              name="checkOut"
              type="date"
              value={dates.checkOut}
              onChange={updateDate}
              className="min-w-0 flex-1 font-semibold outline-none"
            />
          </div>

          <SearchField icon={<UserRound size={24} />} className="lg:border-r-4">
            <span className="font-semibold">2 adults - 3 children - 2 rooms</span>
            <ChevronDown size={20} className="ml-auto" />
          </SearchField>

          <button
            type="submit"
            className="flex min-h-14 items-center justify-center gap-2 bg-[#0071c2] px-6 text-lg font-semibold text-white transition hover:bg-[#005fa3]"
          >
            <Search size={22} className="lg:hidden" />
            Search
          </button>
        </form>
      </section>

      <section className="mx-auto mt-14 max-w-7xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-neutral-950">Your recent searches</h2>

        <article className="mt-5 flex max-w-md overflow-hidden rounded-lg border border-neutral-100 bg-white shadow-md">
          <div className="relative h-28 w-28 shrink-0">
            <img
              src={heroImage}
              alt="Kigali city skyline"
              className="h-full w-full object-cover"
            />
            <span className="absolute left-1 top-1 rounded bg-white p-1 text-[#0071c2] shadow-sm">
              <BedDouble size={20} />
            </span>
          </div>

          <div className="flex flex-col justify-center px-4 py-3">
            <h3 className="text-lg font-bold text-neutral-900">Kigali</h3>
            <RecentDetail icon={<CalendarDays size={18} />}>
              Sat, Jun 20-Sun, Jun 21
            </RecentDetail>
            <RecentDetail icon={<UserRound size={18} />}>5 people</RecentDetail>
          </div>
        </article>
      </section>

      <section className="mx-auto mt-10 max-w-7xl px-4 sm:px-6">
        <h2 className="text-2xl font-bold text-neutral-950">Offers</h2>
        <p className="mt-1 text-base text-neutral-600">
          Promotions, deals, and special offers for you
        </p>

        <article className="mt-6 flex items-center justify-between gap-6 rounded-lg border border-neutral-200 bg-white p-5 shadow-sm">
          <div>
            <p className="text-sm text-neutral-950">
              Escape for less with our Getaway Deals
            </p>
            <h3 className="mt-3 text-xl font-bold text-neutral-950">
              No catch. Just getaways.
            </h3>
            <p className="mt-2 text-base text-neutral-900">
              At least 15% off select stays worldwide - just book and go.
            </p>
            <button
              type="button"
              className="mt-4 rounded bg-[#0071c2] px-4 py-3 font-semibold text-white transition hover:bg-[#005fa3]"
            >
              Save with a Getaway Deal
            </button>
          </div>

          <img
            src={heroImage}
            alt="Travelers enjoying a getaway"
            className="hidden h-32 w-32 rounded object-cover sm:block"
          />
        </article>
      </section>

      <section className="mx-auto mt-10 max-w-7xl px-4 sm:px-6">
        <h2 className="text-xl font-bold text-neutral-950">Trending destinations</h2>
        <p className="mt-1 text-xs text-neutral-600">
          Travelers searching for Rwanda also booked these
        </p>

        <div className="mt-4 grid gap-4 md:grid-cols-6">
          {destinations.map((destination, index) => (
            <DestinationCard
              key={destination.name}
              destination={destination}
              className={index < 2 ? "md:col-span-3" : "md:col-span-2"}
            />
          ))}
        </div>
      </section>

      <section className="mx-auto mt-10 max-w-7xl px-4 sm:px-6">
        <h2 className="text-xl font-bold text-neutral-950">
          Browse by property type in Kigali
        </h2>

        <div className="relative mt-4">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {propertyTypes.map((property) => (
              <PropertyTypeCard key={property.name} property={property} />
            ))}
          </div>

          <button
            type="button"
            aria-label="View more property types"
            className="absolute right-0 top-16 hidden h-9 w-9 translate-x-1/2 items-center justify-center rounded-full bg-white text-lg font-semibold text-neutral-900 shadow-md lg:flex"
          >
            &gt;
          </button>
        </div>
      </section>
    </main>
  );
}

function SearchField({ children, className = "", icon }) {
  return (
    <button
      type="button"
      className={`flex min-h-16 items-center gap-3 border-[#febb02] bg-white px-5 text-left text-neutral-950 ${className}`}
    >
      <span className="text-neutral-600">{icon}</span>
      {children}
    </button>
  );
}

function RecentDetail({ children, icon }) {
  return (
    <p className="mt-1 flex items-center gap-2 text-sm text-neutral-600">
      <span className="text-neutral-600">{icon}</span>
      {children}
    </p>
  );
}

function DestinationCard({ className = "", destination }) {
  return (
    <article className={`relative h-44 overflow-hidden rounded-md ${className}`}>
      <img
        src={destination.image}
        alt={`${destination.name} destination`}
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/10 to-transparent" />
      <h3 className="absolute left-4 top-4 text-lg font-bold text-white drop-shadow">
        {destination.name} <span className="text-base">{destination.flag}</span>
      </h3>
    </article>
  );
}

function PropertyTypeCard({ property }) {
  return (
    <article>
      <img
        src={property.image}
        alt={`${property.name} in Kigali`}
        className="aspect-[5/4] w-full rounded-md object-cover"
      />
      <h3 className="mt-3 text-sm font-bold text-neutral-950">{property.name}</h3>
      <p className="mt-1 text-xs text-neutral-600">{property.dates}</p>
      {property.available && (
        <p className="mt-1 text-xs text-neutral-600">{property.available}</p>
      )}
    </article>
  );
}

