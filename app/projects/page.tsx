export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-32">

      <section className="max-w-6xl mx-auto">

        <p
          className="
          text-orange-400
          tracking-[0.4em]
          text-sm
          mb-6
          "
        >
          YOUR CREATIONS
        </p>


        <h1
          className="
          text-5xl
          md:text-7xl
          font-semibold
          tracking-tight
          "
        >
          PROJECTS
        </h1>


        <p
          className="
          mt-6
          text-white/60
          max-w-2xl
          "
        >
          View, manage, and continue creating your AI-generated films.
        </p>


        <div
          className="
          mt-16
          border
          border-white/10
          bg-white/[0.02]
          p-10
          "
        >

          <h2
            className="
            text-xl
            tracking-widest
            "
          >
            NO PROJECTS YET
          </h2>


          <p
            className="
            mt-4
            text-white/50
            "
          >
            Your generated films will appear here.
          </p>


          <button
            className="
            mt-8
            border
            border-orange-500
            px-8
            py-3
            tracking-widest
            hover:bg-orange-500
            hover:text-black
            transition-all
            "
          >
            CREATE FIRST FILM
          </button>

        </div>


      </section>

    </main>
  );
}