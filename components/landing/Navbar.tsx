"use client";

import Link from "next/link";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <nav
      className="
      absolute
      top-0
      left-0
      z-50
      w-full
      bg-transparent
      "
    >

      <div
        className="
        mx-auto
        flex
        h-24
        max-w-7xl
        items-center
        justify-between
        px-6
        "
      >


        {/* LOGO */}

        <Link 
        href="/"
        className="
        flex
        items-center
        gap-4
        "
        >

          <motion.div
          initial={{
            opacity:0,
            scale:.7,
            rotate:-180
          }}
          animate={{
            opacity:1,
            scale:1,
            rotate:0
          }}
          transition={{
            duration:1
          }}
          >

            <Image
            src="/images/logo/cineforge-logo.png"
            alt="CineForge"
            width={58}
            height={58}
            priority
            className="object-contain"
            />

          </motion.div>



          <div className="hidden sm:block">

            <h1
            className="
            text-xl
            font-semibold
            tracking-[0.35em]
            text-white
            "
            >
              CINEFORGE
            </h1>


            <p
            className="
            text-xs
            tracking-[0.5em]
            text-orange-400
            "
            >
              AI STUDIO
            </p>

          </div>


        </Link>



        {/* NAVIGATION */}


        <div
        className="
        hidden
        md:flex
        items-center
        gap-10
        "
        >


          <Link
          href="/create"
          className="
          text-sm
          tracking-widest
          text-white/70
          transition

          hover:text-orange-400
          "
          >
            STUDIO
          </Link>


          <Link
          href="/pricing"
          className="
          text-sm
          tracking-widest
          text-white/70
          transition

          hover:text-orange-400
          "
          >
            PRICING
          </Link>


          <Link
          href="/account"
          className="
          text-sm
          tracking-widest
          text-white/70
          transition

          hover:text-orange-400
          "
          >
            ACCOUNT
          </Link>



          <Link href="/create">

            <motion.button

            whileHover={{
              y:-3,
            }}

            whileTap={{
              scale:.97
            }}

            className="
            flex
            items-center
            gap-3

            border
            border-orange-500/60

            px-7
            py-3

            text-sm
            tracking-widest

            text-white

            transition-all

            hover:bg-orange-500
            hover:text-black
            hover:shadow-[0_0_35px_rgba(255,120,0,.6)]
            "

            >

              <Sparkles size={16}/>

              CREATE FILM →

            </motion.button>

          </Link>


        </div>


      </div>


    </nav>
  );
}