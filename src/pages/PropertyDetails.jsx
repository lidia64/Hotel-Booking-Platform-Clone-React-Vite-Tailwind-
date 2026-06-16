import { useParams } from "react-router-dom";

import hotels from "../data/properties.json";

import Header from "../components/Header";
import Gallery from "../components/Gallery";
import BookingWidget from "../components/BookingWidget";

export default function PropertyDetails(){

const { id }=
useParams();

const hotel=
hotels.find(
h=>
h.id===Number(id)
);

return(

<>

<Header/>

<div
className="
max-w-7xl
mx-auto
grid
lg:grid-cols-[2fr_400px]
gap-10
p-6
"
>

<div>

<h1
className="
text-5xl
font-bold
"
>

{hotel.name}

</h1>

<p>

📍 {hotel.location}

</p>

<Gallery
images={hotel.images}
/>

<div
className="mt-10"
>

<h2
className="
text-3xl
font-bold
"
>

Amenities

</h2>

<ul>

{
hotel.amenities.map(a=>

<li
key={a}
>

✓ {a}

</li>

)

}

</ul>

</div>

</div>

<BookingWidget/>

</div>

</>

);

}