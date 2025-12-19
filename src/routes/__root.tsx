import { Link, Outlet, createRootRoute } from '@tanstack/react-router'

export const Route = createRootRoute({
  component: RootLayout,
})

function RootLayout() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-mono">
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-800 bg-zinc-950/90 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
          <Link to="/" className="text-sm hover:text-emerald-400 transition-colors">
            <span className="text-zinc-500">~/</span>ryan
          </Link>
          <div className="flex gap-4 sm:gap-6 text-sm">
            <Link
              to="/"
              className="text-zinc-400 hover:text-emerald-400 transition-colors [&.active]:text-emerald-400"
              activeOptions={{ exact: true }}
            >
              ./home
            </Link>
            <Link
              to="/blog"
              className="text-zinc-400 hover:text-emerald-400 transition-colors [&.active]:text-emerald-400"
            >
              ./blog
            </Link>
          </div>
        </div>
      </nav>
      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  )
}
