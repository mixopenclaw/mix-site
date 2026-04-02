import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Mix — Modern Starter</title>
        <meta name="description" content="A modern, responsive starter site — built for Mix. Next.js + Tailwind." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen bg-[#08090b] text-slate-200 antialiased">
        <header className="max-w-5xl mx-auto p-6 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3" aria-label="Mix home">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="rounded-md">
              <defs>
                <linearGradient id="g" x1="0" x2="1" y1="0" y2="1">
                  <stop offset="0%" stopColor="#7c5cff" />
                  <stop offset="100%" stopColor="#4b8eff" />
                </linearGradient>
              </defs>
              <rect width="24" height="24" rx="5" fill="url(#g)"></rect>
              <text x="12" y="16" textAnchor="middle" fontSize="12" fontWeight="700" fill="white">M</text>
            </svg>
            <span className="font-semibold text-lg">Mix</span>
          </a>

          <nav className="hidden md:flex gap-6 items-center text-sm" aria-label="Main navigation">
            <a href="#features" className="hover:underline">Features</a>
            <a href="#about" className="hover:underline">About</a>
            <a href="#contact" className="hover:underline">Contact</a>
            <button id="themeToggle" className="ml-2 px-3 py-1 rounded-md bg-slate-800/60 hover:bg-slate-800/80" aria-pressed="false">Dark</button>
          </nav>

          <div className="md:hidden">
            <button id="menuBtn" className="p-2 bg-slate-800/60 rounded-md">Menu</button>
          </div>
        </header>

        <main className="max-w-5xl mx-auto px-6">
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center min-h-[60vh]">
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">Bold. Fast. Deployable — a starter site for Mix.</h1>
              <p className="mt-4 text-slate-400 max-w-xl">A clean, accessible landing page prototype using Next.js + Tailwind. Mobile-first, dark-by-default, easy to customize and deploy to GitHub Pages or Vercel.</p>
              <div className="mt-6 flex gap-4">
                <a href="#contact" className="inline-block bg-primary-500 hover:bg-primary-600 text-white px-5 py-3 rounded-md shadow">Get started</a>
                <a href="#features" className="inline-block border border-slate-700 text-slate-200 px-5 py-3 rounded-md">See features</a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-slate-800/30 to-slate-900/20 p-6 rounded-2xl shadow-lg">
              <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80&auto=format&fit=crop" alt="Abstract workspace" className="rounded-lg w-full h-64 object-cover" />
            </div>
          </section>

          <section id="features" className="mt-16">
            <h2 className="text-2xl font-bold">Features</h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
              <article className="p-5 bg-slate-800/40 rounded-lg">
                <h3 className="font-semibold">Responsive</h3>
                <p className="mt-2 text-slate-400 text-sm">Mobile-first layout that adapts to any screen size.</p>
              </article>

              <article className="p-5 bg-slate-800/40 rounded-lg">
                <h3 className="font-semibold">Accessible</h3>
                <p className="mt-2 text-slate-400 text-sm">Semantic markup, keyboard-friendly focus states, and readable contrast.</p>
              </article>

              <article className="p-5 bg-slate-800/40 rounded-lg">
                <h3 className="font-semibold">Deploy-ready</h3>
                <p className="mt-2 text-slate-400 text-sm">Preview locally and deploy to Vercel with a single command.</p>
              </article>
            </div>
          </section>

          <section id="about" className="mt-12">
            <h2 className="text-2xl font-bold">About this demo</h2>
            <p className="mt-3 text-slate-400 max-w-2xl">This is a prototype intended to be a quick starting point. If you want a production-ready site I can add CI, analytics, form handling, and a full Next.js app structure.</p>
          </section>

          <section id="contact" className="mt-12 mb-24">
            <h2 className="text-2xl font-bold">Contact</h2>
            <form className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4" onSubmit={(e) => { e.preventDefault(); alert('Thanks — form demo only') }} aria-label="Contact form">
              <label className="flex flex-col">
                <span className="text-sm text-slate-400">Name</span>
                <input required className="mt-1 p-2 rounded-md bg-slate-900 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-400" />
              </label>

              <label className="flex flex-col">
                <span className="text-sm text-slate-400">Email</span>
                <input type="email" required className="mt-1 p-2 rounded-md bg-slate-900 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-primary-400" />
              </label>

              <label className="flex flex-col md:col-span-2">
                <span className="text-sm text-slate-400">Message</span>
                <textarea required className="mt-1 p-2 rounded-md bg-slate-900 border border-slate-700 h-28 focus:outline-none focus:ring-2 focus:ring-primary-400"></textarea>
              </label>

              <div className="md:col-span-2 flex gap-4">
                <button type="submit" className="bg-primary-500 text-white px-4 py-2 rounded-md">Send</button>
                <button type="button" className="border border-slate-700 text-slate-200 px-4 py-2 rounded-md" onClick={() => { const f = document.querySelector('form'); if (f) (f as HTMLFormElement).reset(); }}>Reset</button>
              </div>
            </form>
          </section>
        </main>

        <footer className="border-t border-slate-800 py-8 mt-12 text-center text-sm text-slate-500">© Mix — Built with Kodex. Deploy: GitHub + Vercel.</footer>
      </div>
    </>
  )
}
