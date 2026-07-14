"use client";

import Link from "next/link";
import {
  Film,
  CreditCard,
  Sparkles,
  Plus,
} from "lucide-react";


export default function AccountPage() {

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
      max-w-7xl
      mx-auto
      "
      >


        {/* HEADER */}

        <div>

          <p
          className="
          text-orange-400
          tracking-[0.5em]
          text-sm
          "
          >
            CINEFORGE ACCOUNT
          </p>


          <h1
          className="
          mt-6
          text-5xl
          md:text-7xl
          "
          >
            YOUR FILM STUDIO
          </h1>


        </div>



        {/* STATS */}

        <div
        className="
        mt-16
        grid
        md:grid-cols-3
        gap-6
        "
        >


          <div
          className="
          border
          border-white/10
          bg-white/[0.02]
          p-8
          "
          >

            <CreditCard
            className="
            text-orange-400
            "
            />

            <p
            className="
            mt-6
            text-sm
            tracking-widest
            text-white/50
            "
            >
              CURRENT PLAN
            </p>


            <h2
            className="
            mt-3
            text-3xl
            "
            >
              PRO
            </h2>


          </div>




          <div
          className="
          border
          border-white/10
          bg-white/[0.02]
          p-8
          "
          >

            <Sparkles
            className="
            text-orange-400
            "
            />


            <p
            className="
            mt-6
            text-sm
            tracking-widest
            text-white/50
            "
            >
              AVAILABLE CREDITS
            </p>


            <h2
            className="
            mt-3
            text-3xl
            "
            >
              500
            </h2>


          </div>





          <div
          className="
          border
          border-white/10
          bg-white/[0.02]
          p-8
          "
          >

            <Film
            className="
            text-orange-400
            "
            />


            <p
            className="
            mt-6
            text-sm
            tracking-widest
            text-white/50
            "
            >
              FILMS CREATED
            </p>


            <h2
            className="
            mt-3
            text-3xl
            "
            >
              0
            </h2>


          </div>


        </div>




        {/* PROJECT AREA */}


        <section
        className="
        mt-16
        border
        border-white/10
        bg-white/[0.02]
        p-10
        "
        >


          <div
          className="
          flex
          items-center
          justify-between
          "
          >

            <div>

              <h2
              className="
              text-3xl
              "
              >
                YOUR PROJECTS
              </h2>


              <p
              className="
              mt-3
              text-white/50
              "
              >
                Your cinematic creations will appear here.
              </p>


            </div>


            <Link href="/create">

              <button
              className="
              flex
              items-center
              gap-3

              border
              border-orange-500/60

              px-6
              py-3

              tracking-widest
              text-sm

              hover:bg-orange-500
              hover:text-black
              transition
              "
              >

                <Plus size={16}/>

                NEW FILM

              </button>

            </Link>


          </div>




          <div
          className="
          mt-12
          border
          border-white/10
          p-12
          text-center
          text-white/40
          "
          >

            NO PROJECTS YET

            <br/>

            CREATE YOUR FIRST CINEMATIC FILM


          </div>


        </section>



      </div>


    </main>

  );
}