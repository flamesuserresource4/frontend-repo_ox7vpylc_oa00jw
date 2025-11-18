export default function Footer(){
  return (
    <footer className="relative border-t border-white/10 bg-gradient-to-b from-transparent to-black/40">
      <div className="mx-auto max-w-6xl px-6 py-10 flex items-center justify-between">
        <nav className="text-slate-300/70 text-sm space-x-6">
          <a href="#demo" className="hover:text-slate-100 transition">Demo</a>
          <a href="#" className="hover:text-slate-100 transition">Pricing</a>
          <a href="#" className="hover:text-slate-100 transition">Integrations</a>
        </nav>
        <div className="text-slate-300/70 text-sm">PYRIX AI</div>
      </div>
    </footer>
  )
}
