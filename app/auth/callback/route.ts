import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

export async function GET(request: Request) {

  const { searchParams } = new URL(request.url);

  const code = searchParams.get("code");
  const error = searchParams.get("error");


  if (error) {
    return NextResponse.redirect(
      new URL("/login?error=oauth_failed", request.url)
    );
  }


  if (!code) {
    return NextResponse.redirect(
      new URL("/login?error=no_code", request.url)
    );
  }


  const supabase = await createClient();

  const { error: sessionError } =
    await supabase.auth.exchangeCodeForSession(code);


  if (sessionError) {
    return NextResponse.redirect(
      new URL("/login?error=session_failed", request.url)
    );
  }


  return NextResponse.redirect(
    new URL("/studio", request.url)
  );
}