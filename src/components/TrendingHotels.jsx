import hotels from "../data/properties.json";
import HotelCard from "./HotelCard";

export default function TrendingHotels(){

return(

<section
className="
max-w-7xl
mx-auto
py-20
px-5
"
>

<h2
className="
text-4xl
font-bold
mb-10
"
>

Trending Hotels

</h2>

<div
className="
grid
md:grid-cols-3
gap-8
"
>

{
hotels.map(h=>

<HotelCard
key={h.id}
hotel={h}
/>

)

}

</div>

</section>

);

}