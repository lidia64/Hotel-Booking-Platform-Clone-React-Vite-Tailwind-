export default function AttractionsHero() {
    return(
        <section className="bg-[#003B95] text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
            <h1 className="text-6xl font-bold mb-4">
            Explore top attractions
            </h1>
            <p className="text-xl mb-10">   
            Discover must-see sights and hidden gems around the world with us
            </p>
            {/* Search */}  
            <div className="bg-white rounded-xl p-5 shadow-lg flex flex-wrap gap-4">
                <input
                type="text"
                placeholder="Search for attractions"
                className="border p-4 rounded flex-1 text-black"
                />  
                <input
                type="text"
                placeholder="Location"
                className="border p-4 rounded flex-1 text-black"
                />  
                <input
                type="date"
                className="border p-4 rounded text-black"
                /> 
                <button className="bg-blue-600 px-8 rounded text-white">
                Search
                </button>   
            </div>
        </div>
        </section>
    );
}