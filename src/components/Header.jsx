import {
  Bed,
  Plane,
  Car,
  Landmark,
  CircleHelp,
  // Taxi,
} from "lucide-react";

export default function Navbar() {
  return (
    <nav className="bg-[#003B95] pb-14 text-white">
      <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6">
        
        <div className="flex flex-wrap items-center justify-between gap-4">
          
          <h1 className="text-xl font-bold sm:text-3xl">Reservation
          </h1>

          <div className="flex flex-wrap items-center gap-3 text-sm sm:gap-5">
            <button className="font-semibold">USD</button>

            <button className="text-3xl"></button>

            <button>
              <CircleHelp size={22} />
            </button>

            <button className="font-semibold">
              List your property
            </button>

            <button className="rounded bg-white px-4 py-2 font-semibold text-[#003B95]">
              Register
            </button>

            <button className="rounded bg-white px-4 py-2 font-semibold text-[#003B95]">
              Sign in
            </button>
          </div>
        </div>

        {/* Bottom Menu */}
        <div className="mt-7 flex flex-wrap items-center gap-3 text-sm sm:gap-5">

          <NavItem icon={<Bed />} text="Stays" active />

          <NavItem icon={<Plane />} text="Flights" />

          <NavItem icon={<Car />} text="Car rental" />

          <NavItem icon={<Landmark />} text="Attractions" />

          <button className="flex items-center gap-2 rounded-full border border-white px-4 py-2">
            {/* <Taxi size={22} /> */}
            Airport taxis
          </button>

        </div>

        <div className="mt-12">
          <h2 className="text-3xl font-bold sm:text-4xl">Find your next stay</h2>
          <p className="mt-3 text-lg sm:text-xl">
            Search deals on hotels, homes, and much more...
          </p>
        </div>
      </div>
    </nav>
  );
}

function NavItem({ icon, text, active }) {
  return (
    <button
      className={`
        flex items-center gap-2 rounded-full px-4 py-2
        transition
        ${
          active
            ? "border border-white"
            : "hover:bg-blue-800"
        }
      `}
    >
      {icon}
      <span>{text}</span>
    </button>
  );
}
