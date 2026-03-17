export default function MoodboardPage() {
  return (
    <main className="min-h-screen bg-[#debcbb] flex flex-col items-center px-6 md:px-8 py-16">
      
      {/* BACK BUTTON */}
      <a
        href="/"
        className="mb-8 text-sm underline text-[#5a2423] hover:opacity-70 transition"
      >
        ← Voltar
      </a>

      {/* TITLE */}
      <h1
        style={{ fontFamily: "var(--font-sketch)" }}
        className="text-5xl md:text-6xl text-[#1c5134] text-center mb-10"
      >
        Moodboard
      </h1>

      {/* IMAGES */}
      <div className="w-full max-w-3xl flex flex-col gap-10">
        <img
          src="/images/moodboard-programacao-1.jpeg"
          alt="Moodboard 1"
          className="w-full h-auto object-contain rounded-xl"
        />

        <img
          src="/images/moodboard-programacao-2.jpeg"
          alt="Moodboard 2"
          className="w-full h-auto object-contain rounded-xl"
        />
      </div>
    </main>
  );
}