export const metadata = {
  title: "Projects",
  description:
    "Products and projects Mauro Spadaro has shipped — from AI-powered invoice automation to workflow tooling and this blog.",
  alternates: { canonical: "https://maurospadaro.com/projects" },
  openGraph: {
    title: "Projects | maurospadaro",
    description:
      "Products and projects Mauro Spadaro has shipped — from AI-powered invoice automation to workflow tooling and this blog.",
    url: "https://maurospadaro.com/projects",
  },
};

const PROJECTS = [
  {
    name: "Workflow Designer",
    company: "Perk",
    companyUrl: "https://www.perk.com",
    companyContext: "Perk is a spend management platform helping companies control and automate business expenses.",
    url: "https://www.perk.com/spend-solutions/workflow-designer/",
    role: "Product Manager",
    period: "Beta Jan 2024 · GA Oct 2024",
    status: "Live",
    tag: "Fintech · B2B SaaS",
    headline: "Removed engineering from the approval configuration critical path — cutting onboarding time by 50%.",
    context: "As companies scale, approval workflows become a constant source of customisation requests to engineering. The Workflow Designer gave finance and ops teams self-serve control over their entire approval logic.",
    did: "Owned the product end-to-end — from discovery through beta to general release. Defined the roadmap, led the squad, and worked closely with engineering to ship a flexible rules engine that customers could configure themselves.",
    metrics: [
      { value: "50%", label: "reduction in workflow onboarding time" },
      { value: "90%", label: "fewer support tickets in this area" },
    ],
  },
  {
    name: "Invoice Automation & Smart Coding",
    company: "Perk",
    companyUrl: "https://www.perk.com",
    companyContext: "Perk is a spend management platform helping companies control and automate business expenses.",
    url: "https://www.perk.com/spend-solutions/invoice-automation/",
    role: "Product Manager",
    period: "Throughout 2023",
    status: "Live",
    tag: "Fintech · AI · B2B SaaS",
    headline: "Scaled an AI-powered invoice product from zero to 10,000+ invoices processed and millions in spend posted to ERPs.",
    context: "Accounts payable teams manually matching invoices to GL accounts, cost objects and project codes across thousands of suppliers is slow and error-prone. Smart Coding learns from historical patterns and suggests the right coding combination automatically.",
    did: "Led the squad responsible for building Perk's Invoice product from scratch. Owned the roadmap, set squad goals, coordinated delivery across engineering and design, and drove the initial customer onboarding.",
    metrics: [
      { value: "10k+", label: "invoices processed" },
      { value: "€M+", label: "in spend posted to ERPs" },
    ],
  },
  {
    name: "maurospadaro.com",
    company: "Personal project",
    companyUrl: null,
    companyContext: null,
    url: "https://maurospadaro.com",
    role: "Designer & Developer",
    period: "2025 → 2026",
    status: "Live",
    tag: "Next.js · Personal",
    headline: "Designed and built a personal blog from scratch — because the best way to understand product is to build things yourself.",
    context: "A personal blog and portfolio to write about product management, fintech, and tech. Also a deliberate exercise in staying close to the craft of building.",
    did: "Designed the first version in Figma, built it in Webflow, then rebuilt it entirely from scratch using Next.js 14, Tailwind CSS and a markdown-based content pipeline. Handled everything solo: design, development, SEO, and deployment.",
    metrics: [
      { value: "0→1", label: "full rebuild from scratch" },
      { value: "£0", label: "infrastructure cost (Vercel free tier)" },
    ],
  },
];

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <header className="container mx-auto px-4 py-16 text-center max-w-3xl">
        <h1 className="text-6xl font-extrabold mb-6 text-gray-800">Projects</h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Products I have helped ship. A mix of professional work and personal builds.
        </p>
      </header>

      {/* Projects */}
      <section className="container mx-auto px-4 max-w-4xl pb-24 space-y-12">
        {PROJECTS.map((project) => (
          <ProjectCard key={project.name} project={project} />
        ))}
      </section>
    </div>
  );
}

function ProjectCard({ project }) {
  return (
    <div className="bg-[#93C1D9]/20 rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden">

      {/* Top bar */}
      <div className="bg-[#0C1C5A] px-10 py-5 flex items-center justify-between flex-wrap gap-3">
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-white font-extrabold text-lg">{project.name}</span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white/10 text-white/80">
            {project.tag}
          </span>
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-400/20 text-green-300">
            {project.status}
          </span>
        </div>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-white text-[#0C1C5A] text-sm font-semibold hover:bg-gray-100 transition-colors"
          >
            View project →
          </a>
        )}
      </div>

      <div className="p-10">
        {/* Meta */}
        <p className="text-sm text-gray-500 mb-6">
          {project.companyUrl ? (
            <a href={project.companyUrl} target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-700 hover:underline">
              {project.company}
            </a>
          ) : (
            <span className="font-semibold text-gray-700">{project.company}</span>
          )}
          {' · '}{project.role} · {project.period}
        </p>

        {/* Headline */}
        <p className="text-2xl font-bold text-gray-900 leading-snug mb-8">
          {project.headline}
        </p>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-4 mb-8">
          {project.metrics.map((m, i) => (
            <div key={i} className="bg-white rounded-xl p-5 text-center shadow-sm">
              <div className="text-4xl font-extrabold text-[#0C1C5A]">{m.value}</div>
              <div className="text-sm text-gray-500 mt-1">{m.label}</div>
            </div>
          ))}
        </div>

        {/* Divider sections */}
        <div className="divide-y divide-gray-200 border-t border-gray-200">
          <div className="py-5">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#0C1C5A] mb-2">Context</h3>
            <p className="text-gray-700 leading-relaxed">{project.context}</p>
          </div>
          <div className="py-5">
            <h3 className="text-xs font-bold uppercase tracking-widest text-[#0C1C5A] mb-2">What I did</h3>
            <p className="text-gray-700 leading-relaxed">{project.did}</p>
          </div>
          {project.companyContext && (
            <div className="py-4">
              <p className="text-xs text-gray-400 italic">{project.companyContext}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
