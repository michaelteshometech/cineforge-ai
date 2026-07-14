"use client";

import {
  Film,
  Sparkles,
  Camera,
  Smartphone,
  Clapperboard,
  Wand2,
} from "lucide-react";

import Link from "next/link";

import Hero from "@/components/landing/Hero";

const features = [
  {
    title: "AI FILMS",
    description: "Create cinematic stories from a single idea.",
    icon: Film,
  },
  {
    title: "LUXURY COMMERCIALS",
    description: "Generate premium advertisements built for brands.",
    icon: Sparkles,
  },
  {
    title: "AI DIRECTOR",
    description: "Transform concepts into complete film workflows.",
    icon: Clapperboard,
  },
  {
    title: "UGC CONTENT",
    description: "Create social videos designed to perform.",
    icon: Smartphone,
  },
  {
    title: "PRODUCT VISUALS",
    description: "Showcase products with cinematic precision.",
    icon: Camera,
  },
  {
    title: "CREATIVE WORLDS",
    description: "Build unforgettable visual experiences.",
    icon: Wand2,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      <Hero />


      <section className="px-6 py-32 max-w-7xl mx-auto">

        <p className="
        text-orange-400
        text-sm
        tracking-[0.5em]
        ">
          CAPABILITIES
        </p>

        <h2 className="
        mt-6
        text-4xl
        md:text-6xl
        tracking-tight
        ">
          THE FUTURE OF
          <br/>
          FILM CREATION
        </h2>


        <div className="
        mt-16
        grid
        md:grid-cols-3
        gap-6
        ">

          {features.map((feature)=>{

            const Icon = feature.icon;

            return (

              <div
              key={feature.title}
              className="
              group
              relative
              overflow-hidden
              border
              border-white/10
              bg-white/[0.02]
              p-8
              transition-all
              duration-500

              hover:-translate-y-3
              hover:border-orange-500/60
              "
              >

                <div
                className="
                absolute
                inset-0
                bg-gradient-to-br
                from-orange-500/0
                via-orange-500/0
                to-orange-500/20
                opacity-0
                transition
                duration-500

                group-hover:opacity-100
                "
                />


                <Icon
                className="
                relative
                h-10
                w-10
                text-white/60
                transition-all
                duration-500

                group-hover:text-orange-400
                group-hover:drop-shadow-[0_0_30px_rgba(255,120,0,.9)]
                "
                />


                <h3 className="
                relative
                mt-8
                text-xl
                tracking-[0.2em]
                ">
                  {feature.title}
                </h3>


                <p className="
                relative
                mt-5
                text-white/50
                ">
                  {feature.description}
                </p>


              </div>

            )

          })}


        </div>

      </section>



      <section className="
      border-t
      border-white/10
      px-6
      py-32
      ">

      <div className="max-w-7xl mx-auto">

      <h2 className="
      text-4xl
      md:text-6xl
      ">
      FROM IDEA
      <br/>
      TO CINEMA
      </h2>


      <div className="
      mt-16
      grid
      md:grid-cols-5
      gap-5
      ">

      {[
        "PROMPT",
        "AI DIRECTOR",
        "STORYBOARD",
        "GENERATION",
        "FINAL FILM",
      ].map((step,index)=>(

        <div
        key={step}
        className="
        border
        border-white/10
        bg-white/[0.02]
        p-6

        hover:border-orange-400/50
        transition
        "
        >

        <span className="
        text-orange-400
        tracking-widest
        ">
          0{index+1}
        </span>

        <p className="
        mt-6
        tracking-[0.2em]
        text-sm
        ">
          {step}
        </p>

        </div>

      ))}


      </div>

      </div>

      </section>



      <section className="
      px-6
      py-32
      text-center
      ">

      <h2 className="
      text-5xl
      md:text-7xl
      ">
      CREATE YOUR FIRST FILM
      </h2>


      <p className="
      mt-6
      text-white/50
      ">
      Turn your vision into cinematic reality.
      </p>


      <Link
  href="/create"
  className="
  mt-10
  inline-flex
  border
  border-orange-500/60
  px-10
  py-4
  tracking-widest

  hover:bg-orange-500
  hover:text-black
  transition
  "
>
  START CREATING →
</Link>


      </section>


    </main>
  );
}