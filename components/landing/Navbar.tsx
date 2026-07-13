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
        {/* Logo */}

        <Link href="/" className="flex items-center gap-4">

          <motion.div
            initial={{
              rotate: -360,
              opacity: 0,
              scale: 0.7,
            }}
            animate={{
              rotate: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.4,
              ease: [0.22, 1, 0.36, 1],
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
                font-[var(--font-space)]
                text-xl
                font-semibold
                uppercase
                tracking-[0.30em]
                text-white
              "
            >
              CINEFORGE
            </h1>

            <p
              className="
                text-xs
                uppercase
                tracking-[0.45em]
                text-orange-400
              "
            >
              AI STUDIO
            </p>

          </div>

        </Link>

        {/* Navigation */}

        <div
          className="
            hidden
            items-center
            gap-10
            md:flex
            font-[var(--font-inter)]
          "
        >

          <Link
            href="/studio"
            className="
              text-sm
              text-white/70
              transition-all
              duration-300
              hover:text-orange-400
            "
          >
            Studio
          </Link>

          <Link
            href="/projects"
            className="
              text-sm
              text-white/70
              transition-all
              duration-300
              hover:text-orange-400
            "
          >
            Projects
          </Link>

          <Link
            href="/pricing"
            className="
              text-sm
              text-white/70
              transition-all
              duration-300
              hover:text-orange-400
            "
          >
            Pricing
          </Link>

          <motion.button
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className="
              flex
              items-center
              gap-2
              rounded-full
              bg-gradient-to-r
              from-orange-500
              via-amber-500
              to-orange-600
              px-6
              py-3
              font-semibold
              text-white
              shadow-lg
              shadow-orange-900/40
              transition
            "
          >
            <Sparkles size={16} />

            Create Film
          </motion.button>

        </div>
      </div>
    </nav>
  );
}