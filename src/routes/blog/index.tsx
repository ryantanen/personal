import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/blog/')({
  component: Blog,
})

const posts = [
  {
    slug: 'building-colordle',
    title: 'Building Colordle',
    date: '2025-12-19',
    excerpt: 'Delta-E, LAB color space, and why matching colors is harder than you think.',
    tags: ['react', 'color-science'],
  },
]

function Blog() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <section className="mb-8 sm:mb-12">
        <div className="text-zinc-500 text-sm mb-3 sm:mb-4">// blog</div>
        <h1 className="text-2xl sm:text-3xl font-bold mb-2">Posts</h1>
        <p className="text-zinc-500 text-sm sm:text-base">Notes on building things.</p>
      </section>

      <section className="space-y-1">
        {posts.map((post) => (
          <Link
            key={post.slug}
            to="/blog/$slug"
            params={{ slug: post.slug }}
            className="group flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 p-3 sm:p-4 -mx-3 sm:-mx-4 hover:bg-zinc-900/50 transition-colors cursor-pointer border-l-2 border-transparent hover:border-emerald-400 block"
          >
            <time className="text-zinc-600 text-xs sm:text-sm shrink-0 font-mono">
              {post.date}
            </time>
            <div className="min-w-0">
              <h2 className="text-zinc-200 group-hover:text-emerald-400 transition-colors text-sm sm:text-base">
                {post.title}
              </h2>
              <p className="text-zinc-500 text-xs sm:text-sm mt-1 hidden sm:block">
                {post.excerpt}
              </p>
              <div className="flex gap-2 mt-1.5 sm:mt-2">
                {post.tags.map((tag) => (
                  <span key={tag} className="text-xs text-zinc-600">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </section>

      <div className="mt-10 sm:mt-16 p-3 sm:p-4 border border-dashed border-zinc-800 text-zinc-600 text-xs sm:text-sm">
        <span className="text-zinc-500">$</span> more posts coming soon...
      </div>
    </div>
  )
}
