import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-20">
      {/* Hero */}
      <section className="mb-12 sm:mb-20">
        <div className="text-zinc-500 text-sm mb-3 sm:mb-4">// intro</div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
          <span className="text-emerald-400">Ryan</span> Tanenholz
        </h1>
        <div className="space-y-1.5 sm:space-y-2 text-zinc-400 text-base sm:text-lg leading-relaxed">
          <p>
            <span className="text-zinc-600">{'>'}</span> CS @ <span className="text-zinc-200">Penn</span>
          </p>
          <p>
            <span className="text-zinc-600">{'>'}</span> Frontend & DevOps @ <span className="text-zinc-200">Penn Labs</span>
          </p>
          <p>
            <span className="text-zinc-600">{'>'}</span> TA for <span className="text-zinc-200">CIS-1912</span>
          </p>
        </div>
        <div className="flex flex-wrap gap-3 sm:gap-4 mt-6 sm:mt-8">
          <a
            href="https://github.com/ryantanen"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 sm:px-4 py-2 border border-zinc-700 text-sm hover:border-emerald-400 hover:text-emerald-400 transition-colors"
          >
            github
          </a>
          <a
            href="https://linkedin.com/in/ryantanenholz"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 sm:px-4 py-2 border border-zinc-700 text-sm hover:border-emerald-400 hover:text-emerald-400 transition-colors"
          >
            linkedin
          </a>
          <a
            href="mailto:rjtanen@seas.upenn.edu"
            className="px-3 sm:px-4 py-2 border border-zinc-700 text-sm hover:border-emerald-400 hover:text-emerald-400 transition-colors"
          >
            email
          </a>
        </div>
      </section>

      {/* Work */}
      <section className="mb-12 sm:mb-20">
        <div className="text-zinc-500 text-sm mb-4 sm:mb-6">// work</div>
        <div className="grid gap-4">
          <WorkCard
            company="Crosby.ai"
            role="Software Engineer Intern"
            period="2024"
            description="Legal AI startup backed by Sequoia & Bain Capital. Built features for contract automation platform."
            link="https://crosby.ai"
          />
          <WorkCard
            company="GPT-Trainer"
            role="Software Engineer Intern"
            period="2023"
            description="AI chatbot platform. Developed custom training pipelines and chat interfaces."
            link="https://gpt-trainer.com"
          />
        </div>
      </section>

      {/* Projects */}
      <section className="mb-12 sm:mb-20">
        <div className="text-zinc-500 text-sm mb-4 sm:mb-6">// projects</div>
        <div className="grid gap-4">
          <ProjectCard
            title="colordle"
            description="Daily color guessing game. Match the target color using named colors from an 18,000+ color database."
            tech={['react', 'firebase', 'color-science']}
            link="https://colordle.ryantanen.com"
          />
          <ProjectCard
            title="penn labs"
            description="Building products that serve 25,000+ students. Frontend engineering and infrastructure work. Primarly worked on OHQ.io"
            tech={['typescript', 'react', 'devops']}
            link="https://pennlabs.org"
          />
          <ProjectCard
            title="bearable"
            description="A Lovable clone—AI-powered app builder that generates and deploys full-stack applications."
            tech={['kubernetes', 'llm', 'react']}
          />
        </div>
      </section>

      {/* Stack */}
      <section className="mb-12 sm:mb-20">
        <div className="text-zinc-500 text-sm mb-4 sm:mb-6">// stack</div>
        <div className="flex flex-wrap gap-2">
          {['TypeScript', 'React', 'Next.js', 'Node.js', 'Python', 'Docker', 'AWS', 'PostgreSQL', 'Git', 'Linux'].map((tech) => (
            <span
              key={tech}
              className="px-3 py-1.5 bg-zinc-900 border border-zinc-800 text-zinc-400 text-sm hover:border-zinc-600 transition-colors"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 pt-8 text-zinc-600 text-sm">
        <p>© {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}

function ProjectCard({
  title,
  description,
  tech,
  link,
}: {
  title: string
  description: string
  tech: string[]
  link?: string
}) {
  const content = (
    <>
      <div className="flex items-start justify-between mb-2">
        <h3 className="text-zinc-100 group-hover:text-emerald-400 transition-colors">
          {title}
        </h3>
        {link && <span className="text-zinc-600 text-sm">↗</span>}
      </div>
      <p className="text-zinc-500 text-sm mb-3">{description}</p>
      <div className="flex gap-2 flex-wrap">
        {tech.map((t) => (
          <span key={t} className="text-xs text-zinc-600">
            #{t}
          </span>
        ))}
      </div>
    </>
  )

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group block p-4 sm:p-5 border border-zinc-800 hover:border-zinc-600 bg-zinc-900/50 transition-all"
      >
        {content}
      </a>
    )
  }

  return (
    <div className="group block p-4 sm:p-5 border border-zinc-800 hover:border-zinc-600 bg-zinc-900/50 transition-all">
      {content}
    </div>
  )
}

function WorkCard({
  company,
  role,
  period,
  description,
  link,
}: {
  company: string
  role: string
  period: string
  description: string
  link?: string
}) {
  const content = (
    <>
      <div className="flex items-start justify-between mb-1">
        <h3 className="text-zinc-100 group-hover:text-emerald-400 transition-colors">
          {company}
        </h3>
        <span className="text-zinc-600 text-xs font-mono">{period}</span>
      </div>
      <p className="text-emerald-400/80 text-sm mb-2">{role}</p>
      <p className="text-zinc-500 text-sm">{description}</p>
    </>
  )

  if (link) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group block p-4 sm:p-5 border border-zinc-800 hover:border-zinc-600 bg-zinc-900/50 transition-all"
      >
        {content}
      </a>
    )
  }

  return (
    <div className="group block p-4 sm:p-5 border border-zinc-800 hover:border-zinc-600 bg-zinc-900/50 transition-all">
      {content}
    </div>
  )
}
