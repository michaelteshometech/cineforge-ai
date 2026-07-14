"use client";

import Link from "next/link";

const plans = [
  {
    name: "CREATOR",
    price: "$29",
    description: "For creators building cinematic social content.",
    features: [
      "AI video generation",
      "HD exports",
      "Creative styles",
      "Personal projects",
    ],
  },

  {
    name: "PRO",
    price: "$79",
    description: "For brands and professionals creating premium content.",
    featured: true,
    features: [
      "Everything in Creator",
      "Higher generation limits",
      "4K exports",
      "Luxury commercial styles",
      "Priority rendering",
    ],
  },

  {
    name: "STUDIO",
    price: "$199",
    description: "For agencies and production teams.",
    features: [
      "Everything in Pro",
      "Team workflows",
      "Advanced projects",
      "Commercial usage",
      "Future API access",
    ],
  },
];


export default function PricingPage() {

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

      <div className="
      max-w-7xl
      mx-auto
      "
      >


        <div className="text-center">

          <p
          className="
          text-orange-400
          tracking-[0.5em]
          text-sm
          "
          >
            PRICING
          </p>


          <h1
          className="
          mt-6
          text-5xl
          md:text-7xl
          "
          >
            CREATE WITHOUT LIMITS
          </h1>


          <p
          className="
          mt-6
          text-white/50
          "
          >
            Choose the plan that powers your cinematic vision.
          </p>


        </div>




        <div
        className="
        mt-20
        grid
        md:grid-cols-3
        gap-6
        "
        >


        {plans.map((plan)=>(

          <div
          key={plan.name}
          className={`
          relative
          border
          p-8
          transition-all
          duration-500

          hover:-translate-y-3

          ${
            plan.featured
            ?
            "border-orange-500 bg-orange-500/5"
            :
            "border-white/10 bg-white/[0.02]"
          }

          `}
          >


            {
              plan.featured && (

                <div
                className="
                absolute
                top-0
                right-0
                bg-orange-500
                px-4
                py-2
                text-black
                text-xs
                tracking-widest
                "
                >
                  MOST POPULAR
                </div>

              )
            }



            <h2
            className="
            tracking-[0.3em]
            text-xl
            "
            >
              {plan.name}
            </h2>



            <div
            className="
            mt-8
            text-5xl
            font-semibold
            "
            >
              {plan.price}

              <span
              className="
              text-sm
              text-white/50
              "
              >
                /MONTH
              </span>

            </div>



            <p
            className="
            mt-6
            text-white/50
            "
            >
              {plan.description}
            </p>



            <div
            className="
            mt-8
            space-y-4
            "
            >

            {
              plan.features.map((feature)=>(

                <div
                key={feature}
                className="
                border-b
                border-white/10
                pb-3
                text-sm
                text-white/70
                "
                >
                  ✓ {feature}
                </div>

              ))
            }


            </div>



            <Link href="/create">

              <button
              className="
              mt-10
              w-full

              border
              border-orange-500/60

              py-4

              tracking-widest
              text-sm

              transition

              hover:bg-orange-500
              hover:text-black
              hover:shadow-[0_0_40px_rgba(255,120,0,.5)]
              "
              >

                START CREATING →

              </button>

            </Link>



          </div>


        ))}


        </div>


      </div>


    </main>

  );
}