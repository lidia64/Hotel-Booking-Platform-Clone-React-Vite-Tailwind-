const footerGroups = [
  {
    title: "Support",
    links: ["Manage your trips", "Customer Service help", "Safety Resource Center"],
  },
  {
    title: "Discover",
    links: [
      "Genius loyalty program",
      "Seasonal and holiday deals",
      "Travel articles",
      "Booking.com for Business",
      "Car rental",
      "Flight finder",
    ],
  },
  {
    title: "Terms and settings",
    links: [
      "Privacy Notice",
      "Terms of Service",
      "Accessibility Statement",
      "Partner dispute",
      "Modern Slavery Statement",
      "Human Rights Statement",
    ],
  },
  {
    title: "Partners",
    links: [
      "Extranet login",
      "Partner help",
      "List your property",
      "Become an affiliate",
      "Supply Partner Inquiry",
    ],
  },
  {
    title: "About",
    links: [
      "About Booking.com",
      "How We Work",
      "Sustainability",
      "Press center",
      "Careers",
      "Investor relations",
      "Corporate contact",
      "Content guidelines and reporting",
    ],
  },
];

const partners = ["Booking.com", "priceline", "KAYAK", "agoda", "OpenTable"];

export default function Footer() {
  return (
    <footer className="bg-[#f5f5f5] text-neutral-950">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {footerGroups.map((group) => (
            <FooterGroup key={group.title} group={group} />
          ))}
        </div>

        <div className="mt-9 flex items-center gap-8 text-sm font-semibold">
          <button type="button" className="flex items-center gap-3">
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm">
              🇺🇸
            </span>
          </button>
          <button type="button">BHD</button>
        </div>

        <div className="mt-8 border-t border-neutral-200 pt-6 text-center text-xs text-neutral-700">
          <p>
            Booking.com Transport Ltd is part of Booking Holdings Inc., the world
            leader in online travel and related services.
          </p>
          <p className="mt-1">Copyright © 1996-2026 Booking.com™. All rights reserved.</p>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {partners.map((partner) => (
            <span
              key={partner}
              className={`text-sm font-bold ${getPartnerClassName(partner)}`}
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}

function FooterGroup({ group }) {
  return (
    <section>
      <h2 className="text-sm font-bold">{group.title}</h2>
      <ul className="mt-4 space-y-3">
        {group.links.map((link) => (
          <li key={link}>
            <a href="#" className="text-sm leading-snug hover:underline">
              {link}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

function getPartnerClassName(partner) {
  if (partner === "KAYAK") {
    return "bg-[#ff5a1f] px-1.5 py-0.5 tracking-[0.2em] text-white";
  }

  if (partner === "agoda") {
    return "text-neutral-700";
  }

  if (partner === "OpenTable") {
    return "text-neutral-700";
  }

  if (partner === "priceline") {
    return "text-[#0071c2]";
  }

  return "text-[#003b95]";
}
