export default function TaxiHero() {
  return (
    <>
       <section className="bg-[#003B95] text-white py-20">
        <div className="max-w-6xl mx-auto px-6">

          <h1 className="text-6xl font-bold mb-4">
            Book your airport taxi
          </h1>

          <p className="text-xl mb-10">
            Easy airport transfers to and from your destination
          </p>

          {/* Search */}
          <div className="bg-white rounded-xl p-5 shadow-lg flex flex-wrap gap-4">

            <input
              type="text"
              placeholder="Pick-up location"
              className="border p-4 rounded flex-1 text-black"
            />

            <input
              type="text"
              placeholder="Drop-off location"
              className="border p-4 rounded flex-1 text-black"
            />

            <input
              type="date"
              className="border p-4 rounded text-black"
            />

            <input
              type="time"
              className="border p-4 rounded text-black"
            />

            <button className="bg-blue-600 px-8 rounded text-white">
              Search
            </button>

          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="max-w-6xl mx-auto py-16 px-6">

        <h2 className="text-4xl font-bold mb-10">
          Why book airport taxis?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="shadow p-6 rounded">
            <h3 className="font-bold mb-2">
              Fixed prices
            </h3>

            <p>No hidden charges.</p>
          </div>

          <div className="shadow p-6 rounded">
            <h3 className="font-bold mb-2">
              Professional drivers
            </h3>

            <p>Trusted airport transport.</p>
          </div>

          <div className="shadow p-6 rounded">
            <h3 className="font-bold mb-2">
              Free cancellation
            </h3>

            <p>Flexible booking.</p>
          </div>

        </div>
        </section>
     
    </>
  );
}

 