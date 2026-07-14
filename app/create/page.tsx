"use client";

import { useState } from "react";

import {
  Film,
  Sparkles,
  Car,
  Palette,
  Clapperboard,
  Smartphone,
  ImagePlus,
  X,
} from "lucide-react";


const styles = [
  {
    name: "CINEMATIC",
    icon: Film,
  },
  {
    name: "LUXURY",
    icon: Sparkles,
  },
  {
    name: "AUTOMOTIVE",
    icon: Car,
  },
  {
    name: "UGC",
    icon: Smartphone,
  },
  {
    name: "ANIMATION",
    icon: Palette,
  },
  {
    name: "DOCUMENTARY",
    icon: Clapperboard,
  },
];


const durations = [
  "10 SEC",
  "30 SEC",
  "60 SEC",
  "CUSTOM",
];


const ratios = [
  "16:9",
  "9:16",
  "1:1",
];


export default function CreatePage() {


  const [selectedStyle,setSelectedStyle] =
  useState("CINEMATIC");


  const [duration,setDuration] =
  useState("30 SEC");


  const [customMode,setCustomMode] =
  useState(false);


  const [customDuration,setCustomDuration] =
  useState(5);


  const [ratio,setRatio] =
  useState("16:9");


  const [loading,setLoading] =
  useState(false);


  const [references,setReferences] =
  useState<File[]>([]);



  function generateFilm(){

    setLoading(true);

  }



  function handleUpload(
    files: FileList | null
  ){

    if(!files) return;


    const newFiles =
    Array.from(files);


    setReferences((prev)=>[
      ...prev,
      ...newFiles,
    ]);

  }



  function removeReference(
    index:number
  ){

    setReferences((prev)=>
      prev.filter((_,i)=>i !== index)
    );

  }





return (

<main
className="
min-h-screen
bg-black
text-white
px-6
py-32
"
>


<div
className="
max-w-6xl
mx-auto
"
>


<p
className="
text-orange-400
tracking-[0.5em]
text-sm
"
>
CINEFORGE STUDIO
</p>



<h1
className="
mt-6
text-5xl
md:text-7xl
"
>
CREATE YOUR FILM
</h1>



<p
className="
mt-6
text-white/50
max-w-xl
"
>
Transform your idea into a cinematic experience powered by AI.
</p>





{/* PROMPT */}


<section
className="
mt-16
border
border-white/10
bg-white/[0.02]
p-8
"
>


<label
className="
text-sm
tracking-widest
text-white/60
"
>
DESCRIBE YOUR VISION
</label>



<div
className="
relative
mt-5
"
>


<textarea
placeholder="
Example: Monaco F1 night race commercial with rain reflections, luxury cars, cinematic lighting...
"
className="
w-full
h-40
bg-black
border
border-white/10
p-5
pr-16
outline-none

focus:border-orange-500

transition
"
/>



<input

id="reference-upload"

type="file"

multiple

accept="image/*,video/*"

className="hidden"


onChange={(e)=>
handleUpload(e.target.files)
}

/>



<label

htmlFor="reference-upload"

className="
absolute
bottom-4
right-4

h-10
w-10

flex
items-center
justify-center

border
border-white/10

bg-white/[0.03]

cursor-pointer

transition-all
duration-300

hover:border-orange-400

hover:text-orange-400

hover:shadow-[0_0_25px_rgba(255,120,0,0.7)]
"

>


<ImagePlus
size={20}
/>


</label>


</div>
{
references.length > 0 && (

<div
className="
mt-5
flex
flex-wrap
gap-3
"
>

{
references.map((file,index)=>(

<div
key={index}

className="
flex
items-center
gap-3

border
border-white/10

bg-white/[0.03]

px-4
py-2

text-xs
tracking-widest
"
>

<span
className="
text-white/70
"
>
{file.name}
</span>


<button

onClick={()=>
removeReference(index)
}

className="
text-white/40

hover:text-orange-400

transition
"

>

<X
size={14}
/>

</button>


</div>

))

}

</div>

)

}


</section>







{/* STYLE */}


<section
className="
mt-10
"
>


<p
className="
text-sm
tracking-widest
text-white/60
"
>
SELECT STYLE
</p>



<div
className="
grid
md:grid-cols-3
lg:grid-cols-6
gap-4
mt-5
"
>


{
styles.map((style)=>{


const Icon = style.icon;


const active =
selectedStyle === style.name;



return (

<button

key={style.name}

onClick={()=>
setSelectedStyle(style.name)
}


className={`

border

p-5

text-left

transition-all


${
active

?

"border-orange-500 bg-orange-500/10"

:

"border-white/10 bg-white/[0.02]"

}


hover:border-orange-400

`}

>


<Icon

className="
h-7
w-7
text-white/60
"

/>



<p
className="
mt-5
text-xs
tracking-widest
"
>

{style.name}

</p>


</button>

)

})

}


</div>


</section>








{/* SETTINGS */}



<section

className="
mt-10
grid
md:grid-cols-2
gap-6
"

>



{/* DURATION */}



<div

className="
border
border-white/10
p-6
"

>


<p
className="
text-sm
tracking-widest
text-white/60
"
>
DURATION
</p>



<div

className="
flex
flex-wrap
gap-3
mt-5
"

>


{
durations.map((item)=>(


<button

key={item}


onClick={()=>{


if(item==="CUSTOM"){

setCustomMode(true);

}

else{

setCustomMode(false);

setDuration(item);

}


}}



className={`

border

px-5

py-3

text-xs

tracking-widest

transition


${
(duration===item && !customMode)

||

(item==="CUSTOM" && customMode)

?

"border-orange-500 text-orange-400 bg-orange-500/10"

:

"border-white/10"

}


hover:border-orange-400

`}

>


{item}


</button>


))

}


</div>





{
customMode && (

<div
className="
mt-8
"
>


<div

className="
flex
justify-between

text-xs

tracking-widest

text-white/50
"

>

<span>
1 MIN
</span>


<span
className="
text-orange-400
"
>
{customDuration} MINUTES
</span>


<span>
30 MIN
</span>


</div>




<input

type="range"

min="1"

max="30"

value={customDuration}


onChange={(e)=>
setCustomDuration(
Number(e.target.value)
)
}


className="
mt-5
w-full
accent-orange-500
"

/>



</div>

)

}



</div>







{/* RATIO */}



<div

className="
border
border-white/10
p-6
"

>


<p
className="
text-sm
tracking-widest
text-white/60
"
>
ASPECT RATIO
</p>



<div

className="
flex
gap-3
mt-5
"

>


{
ratios.map((item)=>(


<button

key={item}

onClick={()=>
setRatio(item)
}


className={`

border

px-5

py-3

text-xs



${
ratio===item

?

"border-orange-500 text-orange-400"

:

"border-white/10"

}

`}

>

{item}

</button>


))

}


</div>


</div>



</section>







{/* GENERATE */}



<button

onClick={generateFilm}


className="

mt-12

w-full

border

border-orange-500

py-5

tracking-[0.3em]


hover:bg-orange-500

hover:text-black


transition

"

>


{
loading

?

"CREATING YOUR FILM..."

:

"GENERATE FILM →"

}


</button>





{
loading && (

<div

className="
mt-8
border
border-orange-500/40
p-10
text-center
tracking-widest
"

>

<p
className="
text-orange-400
"
>
GENERATING FILM
</p>



<div

className="
mt-6
space-y-4
text-white/50
"

>

<p>
✓ ANALYZING CONCEPT
</p>

<p>
✓ BUILDING STORYBOARD
</p>

<p>
✓ GENERATING SCENES
</p>

<p>
✓ RENDER QUEUED
</p>


</div>


</div>

)

}





</div>


</main>

);

}
