export default function Gallery({
images
}){

return(

<div
className="
grid
md:grid-cols-3
gap-4
"
>

{
images.map((img,index)=>

<img

key={index}

src={img}

className="
h-72
w-full
object-cover
rounded
"

/>

)

}

</div>

);

}