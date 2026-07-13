"use client";

import { motion } from "framer-motion";
import { Clapperboard, Sparkles, Play } from "lucide-react";


export default function Hero() {

return (

<section
className="
relative
flex
min-h-screen
items-center
justify-center
overflow-hidden
bg-black
"
>


{/* Background Video */}

<motion.video

initial={{
opacity:0,
scale:1.08
}}

animate={{
opacity:1,
scale:1
}}

transition={{
duration:2
}}

autoPlay
loop
muted
playsInline

className="
absolute
inset-0
h-full
w-full
object-cover
brightness-75
contrast-125
saturate-110
"

>

<source
src="/videos/hero/hero-section-video.mp4"
type="video/mp4"
/>

</motion.video>



{/* Dark cinematic overlay */}

<div
className="
absolute
inset-0
bg-black/45
"
/>



{/* Ember cinematic gradient */}

<div
className="
absolute
inset-0
bg-gradient-to-b
from-black/60
via-[#1A0F08]/35
to-black/75
"
/>



{/* Fire glow */}

<motion.div

animate={{
scale:[1,1.15,1],
opacity:[0.15,0.30,0.15]
}}

transition={{
duration:4,
repeat:Infinity
}}

className="
absolute
left-1/2
top-1/2
h-96
w-96
-translate-x-1/2
-translate-y-1/2
rounded-full
bg-orange-600/15
blur-[120px]
"

/>



{/* Cinematic Bottom Fade */}

<div
className="
absolute
bottom-0
h-72
w-full
bg-gradient-to-t
from-black
to-transparent
"
/>



{/* Content */}

<motion.div

initial={{
opacity:0,
y:40
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:1
}}

className="
relative
z-10
mx-auto
max-w-6xl
px-6
text-center
"

>


{/* Badge */}

<div
className="
mx-auto
mb-8
flex
w-fit
items-center
gap-2
rounded-full
border
border-orange-500/20
bg-black/40
px-5
py-2
backdrop-blur-xl
text-sm
tracking-wide
text-white/80
"
>

<Sparkles size={16}/>

AI Powered Cinema Engine

</div>




{/* Animated Title */}

<motion.h1

initial={{
opacity:0,
y:80,
filter:"blur(10px)"
}}

animate={{
opacity:1,
y:0,
filter:"blur(0px)"
}}

transition={{
duration:1.4,
delay:0.5
}}

className="
font-[var(--font-space)]
text-5xl
font-semibold
uppercase
leading-[1.05]
tracking-[-0.07em]
text-white
md:text-7xl
lg:text-8xl
"

>

Create


<motion.span

initial={{
opacity:0,
x:-40
}}

animate={{
opacity:1,
x:0
}}

transition={{
duration:1,
delay:0.9
}}

className="
block
bg-gradient-to-r
from-orange-400
via-amber-500
to-yellow-600
bg-clip-text
text-transparent
"

>

Cinematic Worlds

</motion.span>



<motion.span

initial={{
opacity:0,
y:30
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:1,
delay:1.2
}}

className="
block
"

>

From One Prompt

</motion.span>


</motion.h1>




<p
className="
mx-auto
mt-8
max-w-3xl
text-lg
leading-relaxed
text-white/70
md:text-xl
"
>

Generate commercial-grade films,
luxury advertisements,
Pixar-inspired animations,
and realistic cinematic experiences
powered by artificial intelligence.

</p>




<div
className="
mt-10
flex
flex-col
justify-center
gap-4
sm:flex-row
"
>


<button
className="
flex
items-center
justify-center
gap-3
rounded-full
bg-gradient-to-r
from-orange-500
to-amber-600
px-9
py-4
font-semibold
text-white
shadow-lg
shadow-orange-900/30
transition
hover:scale-105
"
>

<Clapperboard size={20}/>

Start Creating

</button>




<button
className="
flex
items-center
justify-center
gap-3
rounded-full
border
border-white/20
bg-white/10
px-9
py-4
text-white
backdrop-blur-xl
transition
hover:bg-white/20
"
>

<Play size={18}/>

Watch Demo

</button>


</div>


</motion.div>


</section>

);

}