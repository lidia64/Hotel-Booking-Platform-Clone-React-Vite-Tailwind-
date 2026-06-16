export default function BookingWidget(){

return(

<div
className="
bg-white
shadow
rounded-xl
p-5
sticky
top-24
"
>

<h2
className="text-2xl"
>

Reserve

</h2>

<input
type="date"
className="
border
w-full
p-3
mt-4
"
/>

<input
type="date"
className="
border
w-full
p-3
mt-3
"
/>

<button
className="
w-full
mt-5
bg-[#003580]
text-white
p-4
rounded
"
>

Reserve Now

</button>

</div>

);

}