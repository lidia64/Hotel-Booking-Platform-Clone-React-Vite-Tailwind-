import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {

const [open,setOpen]=useState(false);

return (

<header className="bg-[#003580] sticky top-0 z-50">

<div className="max-w-7xl mx-auto">

<div className="flex justify-between items-center p-5">

<Link
to="/"
className="text-white text-3xl font-bold"
>
StayRwanda
</Link>

<nav className="hidden md:flex gap-8">

<Link className="text-white">
Hotels
</Link>

<Link className="text-white">
Deals
</Link>

<Link className="text-white">
Explore
</Link>

<Link className="text-white">
About
</Link>

</nav>

<div className="hidden md:flex gap-3">

<button
className="bg-white px-5 py-2 rounded"
>
Sign In
</button>

<button
className="bg-[#febb02] px-5 py-2 rounded"
>
Register
</button>

</div>

<button
onClick={()=>setOpen(!open)}
className="md:hidden text-white text-3xl"
>

☰

</button>

</div>

{
open && (

<div className="bg-white p-5 space-y-3">

<p>Hotels</p>
<p>Deals</p>
<p>Explore</p>
<p>About</p>

</div>

)

}

</div>

</header>

);

}