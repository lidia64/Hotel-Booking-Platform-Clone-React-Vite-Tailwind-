import SearchCard from "./SearchCard";
import hero from "../assets/hero.jpg";

export default function Hero(){

return(
  <>

    <section className="relative h-162.5" >

<img
src={hero}
className="absolute w-full h-full object-cover"
/>

<div
className="
absolute
inset-0
bg-black/40
"
/>

<div
className="
relative
max-w-7xl
mx-auto
pt-32
px-5
"
>

<h1
className="
text-white
text-6xl
font-bold
"
>

Discover Rwanda

</h1>

<p className="text-white mt-4text-xl">

Book hotels and experiences.

</p>

<SearchCard/>

</div>

</section>
</>

);

}