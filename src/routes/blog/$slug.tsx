import { createFileRoute, Link } from '@tanstack/react-router'

export const Route = createFileRoute('/blog/$slug')({
  component: BlogPost,
})

const posts: Record<string, { title: string; date: string; content: string }> = {
  'building-colordle': {
    title: 'Building Colordle',
    date: '2025-12-19',
    content: `When I started building Colordle, I thought comparing colors would be simple. Take two hex values, calculate the difference, done. I was very wrong.

## The Problem with RGB

RGB is how computers store colors, but it's terrible for comparing them. A difference of 10 in the red channel doesn't "feel" the same as a difference of 10 in blue. Human perception is weird.

## Enter LAB Color Space

LAB (or CIELAB) was designed to be perceptually uniform. The "L" is lightness, "A" is green-red, and "B" is blue-yellow. Equal distances in LAB space correspond to equal perceived differences.

But even LAB isn't perfect. That's where Delta-E comes in.

## Delta-E: The Gold Standard

Delta-E is the standard metric for color difference. There are multiple versions:

- **CIE76**: Simple Euclidean distance in LAB space
- **CIE94**: Accounts for how we perceive chroma and hue differently
- **CIEDE2000**: The current standard, with corrections for blue hues and neutral colors

Colordle uses CIEDE2000. A Delta-E of 1.0 is roughly the threshold of human perception. Anything less is essentially identical.

## The Color List Problem

I have a list of 20,000+ named colors that players can guess from. But here's the thing: if any of those could be the daily answer, the game would be impossibly hard. Obscure colors like "Xanadu" or "Feldgrau" would frustrate players.

So the actual answers come from a much smaller curated list of recognizable colors. Players can still guess any of the 20k+ colors, but the target is always something reasonable. This keeps the game challenging but fair.`,
  },
}

function BlogPost() {
  const { slug } = Route.useParams()
  const post = posts[slug]

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
        <div className="text-zinc-500 text-sm mb-4">// 404</div>
        <h1 className="text-2xl font-bold mb-4">Post not found</h1>
        <Link to="/blog" className="text-emerald-400 hover:underline">
          back to blog
        </Link>
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      <Link
        to="/blog"
        className="text-zinc-500 text-sm hover:text-emerald-400 transition-colors inline-block mb-8"
      >
        back to blog
      </Link>

      <article>
        <header className="mb-8 sm:mb-12">
          <time className="text-zinc-600 text-sm font-mono">{post.date}</time>
          <h1 className="text-2xl sm:text-3xl font-bold mt-2">{post.title}</h1>
        </header>

        <div className="prose prose-invert prose-zinc max-w-none">
          {post.content.split('\n\n').map((paragraph, i) => {
            if (paragraph.startsWith('## ')) {
              return (
                <h2 key={i} className="text-xl font-bold mt-8 mb-4 text-zinc-100">
                  {paragraph.replace('## ', '')}
                </h2>
              )
            }
            if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
              return (
                <p key={i} className="text-zinc-300 font-medium my-4">
                  {paragraph.replace(/\*\*/g, '')}
                </p>
              )
            }
            if (paragraph.startsWith('- ')) {
              const items = paragraph.split('\n').filter(line => line.startsWith('- '))
              return (
                <ul key={i} className="list-disc list-inside text-zinc-400 my-4 space-y-1">
                  {items.map((item, j) => (
                    <li key={j}>
                      {item.replace('- ', '').split(/(\*\*.*?\*\*)/).map((part, k) => {
                        if (part.startsWith('**') && part.endsWith('**')) {
                          return (
                            <strong key={k} className="text-zinc-200 font-medium">
                              {part.replace(/\*\*/g, '')}
                            </strong>
                          )
                        }
                        return part
                      })}
                    </li>
                  ))}
                </ul>
              )
            }
            return (
              <p key={i} className="text-zinc-400 leading-relaxed my-4">
                {paragraph.split(/(\*\*.*?\*\*)/).map((part, j) => {
                  if (part.startsWith('**') && part.endsWith('**')) {
                    return (
                      <strong key={j} className="text-zinc-200 font-medium">
                        {part.replace(/\*\*/g, '')}
                      </strong>
                    )
                  }
                  return part
                })}
              </p>
            )
          })}
        </div>
      </article>
    </div>
  )
}
