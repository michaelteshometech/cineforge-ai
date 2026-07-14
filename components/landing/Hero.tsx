"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";

export default function Hero() {
  return (
    <section
      className="
      relative
      min-h-screen
      flex
      items-center
      justify-center
      overflow-hidden
      bg-black
      "
    >

      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="
        absolute
        inset-0
        w-full
        h-full
        object-cover
        z-0
        "
      >
        <source
          src="/videos/hero/hero-section-video.mp4"
          type="video/mp4"
        />
      </video>


      {/* Dark Cinematic Overlay */}
      <div
        className="
        absolute
        inset-0
        bg-black/60
        z-10
        "
      />


      {/* Gradient Cinematic Fade */}
      <div
        className="
        absolute
        inset-0
        bg-gradient-to-b
        from-black/40
        via-black/60
        to-black
        z-10
        "
      />


      {/* Orange Light Effect */}
      <div
        className="
        absolute
        top-1/3
        left-1/2
        -translate-x-1/2
        h-[500px]
        w-[500px]
        bg-orange-500/20
        blur-[150px]
        z-10
        "
      />


      {/* Hero Content */}
      <div
        className="
        relative
        z-20
        max-w-6xl
        px-6
        text-center
        "
      >

        <p
          className="
          text-orange-400
          tracking-[0.5em]
          text-xs
          md:text-sm
          mb-8
          "
        >
          AI FILM PRODUCTION STUDIO
        </p>


        <h1
          className="
          text-white
          text-5xl
          md:text-7xl
          lg:text-8xl
          font-semibold
          tracking-tight
          leading-[0.95]
          "
        >
          CREATE
          <br />
          CINEMATIC
          <br />
          WORLDS WITH AI
        </h1>


        <p
          className="
          mt-8
          max-w-2xl
          mx-auto
          text-lg
          md:text-xl
          text-white/70
          "
        >
          Transform a single idea into professional films,
          commercials, and visual experiences powered by AI.
        </p>


        <div
          className="
          mt-12
          flex
          flex-col
          md:flex-row
          justify-center
          gap-5
          "
        >

          <Link
            href="/create"
            className="
            group
            flex
            items-center
            justify-center
            gap-3
            px-8
            py-4
            bg-orange-500
            text-black
            font-semibold
            tracking-widest
            border
            border-orange-400
            transition-all
            duration-500
            hover:bg-orange-400
            hover:shadow-[0_0_40px_rgba(255,120,0,0.8)]
            "
          >
            START CREATING

            <ArrowRight
              className="
              h-5
              w-5
              transition-transform
              group-hover:translate-x-1
              "
            />

          </Link>


          <button
            className="
            flex
            items-center
            justify-center
            gap-3
            px-8
            py-4
            border
            border-white/20
            bg-white/5
            text-white
            tracking-widest
            backdrop-blur-xl
            transition-all
            duration-500
            hover:border-orange-400
            hover:text-orange-400
            "
          >

            <Play className="h-5 w-5" />

            WATCH DEMO

          </button>

        </div>


        <div
          className="
          mt-20
          text-white/40
          text-xs
          tracking-[0.4em]
          "
        >
          SCROLL TO EXPLORE
        </div>

      </div>

    </section>
  );
}