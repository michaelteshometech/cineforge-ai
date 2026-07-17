"use server";

import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";


export async function signUpWithEmail(
  email: string,
  password: string
) {
  const supabase = await createClient();

  const { error } = await supabase.auth.signUp({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  redirect("/studio");
}


export async function signInWithEmail(
  email: string,
  password: string
) {
  const supabase = await createClient();

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) {
    throw new Error(error.message);
  }

  redirect("/studio");
}

export async function signInWithGoogle() {

const supabase = await createClient();

const { data, error } =
await supabase.auth.signInWithOAuth({

provider:"google",

options:{
redirectTo:
`${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`
}

});


if(error){
throw new Error(error.message);
}


return data.url;

}


export async function signOut() {
  const supabase = await createClient();

  await supabase.auth.signOut();

  redirect("/login");
}

export async function sendPhoneOTP(
phone:string
){

const supabase =
await createClient();


const {error} =
await supabase.auth.signInWithOtp({

phone

});


if(error)
throw new Error(error.message);

}

export async function verifyPhoneOTP(
phone:string,
token:string
){

const supabase =
await createClient();


const {error} =
await supabase.auth.verifyOtp({

phone,
token,
type:"sms"

});


if(error)
throw new Error(error.message);

}