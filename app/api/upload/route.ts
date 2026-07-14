import { NextResponse } from "next/server";

export async function POST(req: Request) {

  try {

    const body = await req.json();

    const {
      prompt,
      style,
      duration,
      ratio,
    } = body;


    console.log({
      prompt,
      style,
      duration,
      ratio,
    });


    /*
      VIDEO GENERATION API CALL
      WILL GO HERE
    */


    return NextResponse.json({

      success:true,

      message:"Generation started",

      jobId:"cineforge-demo-job"

    });


  } catch(error){


    return NextResponse.json(

      {
        success:false,
        error:"Generation failed"
      },

      {
        status:500
      }

    );

  }

}