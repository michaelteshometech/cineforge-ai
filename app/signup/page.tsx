"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Film, Sparkles, Mail, Phone, Clapperboard } from "lucide-react";
import { useRouter } from "next/navigation";
import { signInWithGoogle } from "@/app/actions/auth";
import { createClient } from "@/lib/supabase/client";


export default function SignupPage(){

const router = useRouter();

const supabase = createClient();


const [step,setStep] = useState(1);

const [method,setMethod] = useState("");

const [creation,setCreation] = useState("");

const [loading,setLoading] = useState(false);


const [contact,setContact] = useState("");

const [otp,setOtp] = useState("");

const [otpSent,setOtpSent] = useState(false);



function nextStep(){

setStep((prev)=>prev+1);

}




async function handleGoogle(){

const url = await signInWithGoogle();

if(url){

window.location.href=url;

}

}




async function sendOTP(){


if(!contact){

alert(
method==="email"
?
"Please enter your email address."
:
"Please enter your phone number."
);

return;

}



if(method==="email" && !contact.includes("@")){

alert("Please enter a valid email address.");

return;

}



if(method==="phone" && contact.length < 10){

alert("Please enter a valid phone number.");

return;

}



setLoading(true);



const {error}=await supabase.auth.signInWithOtp(

method==="email"

?

{
email:contact
}

:

{
phone:contact
}

);



if(error){

alert(error.message);

setLoading(false);

return;

}



setOtpSent(true);

setLoading(false);


}

async function verifyOTP(){

if(!otp){

alert("Enter your verification code.");

return;

}


setLoading(true);


let result;


if(method === "email"){

result = await supabase.auth.verifyOtp({

email: contact,

token: otp,

type: "email"

});


}else{


result = await supabase.auth.verifyOtp({

phone: contact,

token: otp,

type: "sms"

});


}



if(result.error){

alert(result.error.message);

setLoading(false);

return;

}



nextStep();

setLoading(false);


}



function finish(){


setLoading(true);


setTimeout(()=>{

router.push("/studio");

},800);


}



const steps=[

{
title:"CREATE YOUR ACCOUNT",
subtitle:"How will you enter CineForge?"
},

{
title:"VERIFY IDENTITY",
subtitle:"Secure your creator profile."
},

{
title:"WHAT ARE YOU CREATING?",
subtitle:"Customize your CineForge experience."
},

{
title:"WELCOME TO CINEFORGE",
subtitle:"Your studio is ready."
}

];





return (

<main

className="
min-h-screen
bg-gradient-to-b
from-black
via-orange-950/10
to-black
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
bg-black/70
backdrop-blur-xl
p-10
shadow-[0_0_60px_rgba(255,120,0,0.08)]
"

>




<div className="
flex
justify-center
mb-8
">

<div className="
border
border-orange-500/40
p-5
">

<Film
size={38}
className="text-orange-400"
/>

</div>

</div>




<h1

className="
text-center
text-3xl
font-semibold
tracking-[0.35em]
uppercase
text-white
"

>

CINEFORGE AI

</h1>




<div className="
mt-8
text-center
">

<p className="
text-xs
tracking-[0.4em]
uppercase
text-orange-400
">

STEP {step} OF 4

</p>


<h2 className="
mt-5
text-xl
tracking-[0.25em]
uppercase
text-white
">

{steps[step-1].title}

</h2>


<p className="
mt-4
text-sm
text-white/50
">

{steps[step-1].subtitle}

</p>


</div>






<AnimatePresence mode="wait">



{step===1 && (

<motion.div

key="one"

initial={{opacity:0,x:50}}

animate={{opacity:1,x:0}}

exit={{opacity:0,x:-50}}

className="
mt-10
space-y-4
"

>


<button

onClick={handleGoogle}

className="
w-full
border
border-orange-500/40
py-4
text-white
uppercase
tracking-[0.25em]
hover:bg-orange-500
hover:text-black
transition
"

>

CONTINUE WITH GOOGLE

</button>



<button

onClick={()=>{

setMethod("email");

nextStep();

}}

className="
w-full
flex
justify-center
items-center
gap-3
border
border-white/20
py-4
text-white
uppercase
tracking-[0.25em]
hover:border-orange-500
transition
"

>

<Mail size={16}/>

EMAIL

</button>




<button

onClick={()=>{

setMethod("phone");

nextStep();

}}

className="
w-full
flex
justify-center
items-center
gap-3
border
border-white/20
py-4
text-white
uppercase
tracking-[0.25em]
hover:border-orange-500
transition
"

>

<Phone size={16}/>

PHONE

</button>


</motion.div>

)}


{/* STEP 2 */}

{step===2 && (

<motion.div

key="two"

initial={{opacity:0,x:50}}

animate={{opacity:1,x:0}}

exit={{opacity:0,x:-50}}

className="mt-10"

>


{!otpSent ? (

<>

<input

placeholder={
method==="email"
?
"EMAIL ADDRESS"
:
"PHONE NUMBER"
}

value={contact}

onChange={(e)=>setContact(e.target.value)}

className="
w-full
bg-black
border
border-white/20
px-5
py-4
text-white
outline-none
focus:border-orange-500
"

/>


<button

onClick={sendOTP}

className="
mt-6
w-full
border
border-orange-500
py-4
text-white
uppercase
tracking-[0.3em]
hover:bg-orange-500
hover:text-black
transition
"

>

{
loading
?
"SENDING..."
:
"SEND CODE →"
}

</button>

</>

)

:

(

<>

<input

placeholder="ENTER OTP"

value={otp}

onChange={(e)=>setOtp(e.target.value)}

className="
w-full
bg-black
border
border-white/20
px-5
py-4
text-white
outline-none
focus:border-orange-500
"

/>


<button

onClick={verifyOTP}

className="
mt-6
w-full
border
border-orange-500
py-4
text-white
uppercase
tracking-[0.3em]
hover:bg-orange-500
hover:text-black
transition
"

>

{
loading
?
"VERIFYING..."
:
"VERIFY IDENTITY →"
}

</button>


</>

)}


</motion.div>

)}



{/* STEP 3 */}

{step===3 && (

<motion.div

key="three"

initial={{opacity:0,x:50}}

animate={{opacity:1,x:0}}

exit={{opacity:0,x:-50}}

className="
mt-10
space-y-4
"

>


{[
"FILMS",
"SOCIAL CONTENT",
"COMMERCIALS",
"AI LEARNING"

].map(item=>(

<button

key={item}

onClick={()=>{

setCreation(item);

nextStep();

}}

className="
w-full
border
border-white/20
py-4
text-white
uppercase
tracking-[0.25em]
hover:bg-orange-500
hover:text-black
hover:border-orange-500
transition
"

>

{item}

</button>


))}


</motion.div>

)}





{/* STEP 4 */}

{step===4 && (

<motion.div

key="four"

initial={{opacity:0,scale:.95}}

animate={{opacity:1,scale:1}}

className="
mt-10
text-center
"

>


<Clapperboard

size={42}

className="
mx-auto
text-orange-400
"

/>


<p className="
mt-6
text-white/70
">

Your studio is ready.

</p>


<button

onClick={finish}

className="
mt-8
w-full
border
border-orange-500
py-4
text-white
uppercase
tracking-[0.3em]
hover:bg-orange-500
hover:text-black
transition
"

>

<Sparkles
size={16}
className="inline mr-2"
/>

ENTER STUDIO →

</button>


</motion.div>

)}



</AnimatePresence>



<p className="
mt-10
text-center
text-white/40
text-sm
">

ALREADY A CREATOR?


<a

href="/login"

className="
ml-2
text-orange-400
tracking-widest
"

>

LOGIN →

</a>


</p>



</motion.section>


</main>

)

}