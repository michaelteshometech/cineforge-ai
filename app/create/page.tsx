export default function CreatePage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="max-w-xl text-center">
        <h1 className="text-5xl font-bold">
          Create Your Film
        </h1>

        <p className="mt-5 text-gray-400">
          Transform your ideas into cinematic videos with CineForge AI.
        </p>

        <button
          className="
          mt-8
          rounded-full
          bg-orange-500
          px-8
          py-3
          font-semibold
          text-black
          hover:bg-orange-400
          transition
          "
        >
          Generate Film
        </button>
      </div>
    </main>
  );
}