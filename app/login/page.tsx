"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Film, Sparkles } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import { signInWithGoogle } from "@/app/actions/auth";
import { useRouter } from "next/navigation";


export default function LoginPage() {

  const router = useRouter();
  const supabase = createClient();


  const [email,setEmail] = useState("");
  const [password,setPassword] = useState("");
  const [loading,setLoading] = useState(false);



  async function handleLogin(){

    setLoading(true);


    const {error} =
      await supabase.auth.signInWithPassword({
        email,
        password
      });


    if(error){

      alert(error.message);

      setLoading(false);

      return;

    }


    router.push("/studio");

  }



  async function handleGoogle(){

    const url =
      await signInWithGoogle();


    if(url){

      window.location.href = url;

    }

  }



return (

<main
className="
min-h-screen
bg-black
flex
items-center
justify-center
px-6
"
>


<motion.section

initial={{
opacity:0,
y:40
}}

animate={{
opacity:1,
y:0
}}

transition={{
duration:.7
}}

className="
w-full
max-w-md
border
border-orange-500/30
bg-black
p-10
shadow-[0_0_60px_rgba(255,120,0,0.08)]
"

>


{/* LOGO */}

<div
className="
flex
justify-center
mb-8
"
>

<div
className="
border
border-orange-500/40
p-5
"
>

<Film
size={38}
className="
text-orange-400
"
/>

</div>


</div>



<h1

className="
text-center
text-3xl
font-semibold
tracking-[0.35em]
text-white
uppercase
"

>

CINEFORGE AI

</h1>



<h2

className="
mt-6
text-center
text-xl
tracking-[0.25em]
text-white
uppercase
"

>

WELCOME BACK

</h2>




<p

className="
mt-4
text-center
text-sm
text-white/50
leading-relaxed
"

>

Enter the studio where ideas become cinematic reality.

</p>




{/* GOOGLE */}

<button

onClick={handleGoogle}

className="
mt-10
w-full
border
border-orange-500/40
py-4
text-sm
tracking-[0.25em]
text-white
uppercase
transition-all
hover:bg-orange-500
hover:text-black
"

>

CONTINUE WITH GOOGLE

</button>




<div

className="
flex
items-center
gap-4
my-8
"

>

<div
className="
h-px
bg-white/10
flex-1
"
/>


<span
className="
text-xs
tracking-[0.4em]
text-white/40
"
>

OR

</span>


<div
className="
h-px
bg-white/10
flex-1
"
/>


</div>





<input

type="email"

placeholder="EMAIL ADDRESS"

value={email}

onChange={(e)=>setEmail(e.target.value)}

className="
w-full
mb-4
bg-black
border
border-white/20
px-5
py-4
text-sm
tracking-widest
text-white
placeholder:text-white/30
outline-none
transition
focus:border-orange-500
"

/>




<input

type="password"

placeholder="PASSWORD"

value={password}

onChange={(e)=>setPassword(e.target.value)}

className="
w-full
mb-6
bg-black
border
border-white/20
px-5
py-4
text-sm
tracking-widest
text-white
placeholder:text-white/30
outline-none
transition
focus:border-orange-500
"

/>





<motion.button

whileHover={{
scale:1.02
}}

whileTap={{
scale:.98
}}

onClick={handleLogin}

className="
flex
items-center
justify-center
gap-3
w-full
border
border-orange-500
py-4
text-sm
font-semibold
tracking-[0.3em]
text-white
uppercase
transition-all
hover:bg-orange-500
hover:text-black
"

>

<Sparkles size={16}/>


{
loading
?
"ENTERING..."
:
"ENTER STUDIO →"
}


</motion.button>





<p

className="
mt-8
text-center
text-sm
text-white/40
"

>

NEW CREATOR?


<a

href="/signup"

className="
ml-2
text-orange-400
tracking-widest
hover:text-orange-300
"

>

CREATE ACCOUNT →

</a>


</p>




</motion.section>


</main>

);

}