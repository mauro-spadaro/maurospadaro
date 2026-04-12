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
    url: "https://www.perk.com/spend-solutions/workflow-designer/",
    role: "Product Manager — Full product ownership",
    period: "Beta Jan 2024 · GA Oct 2024",
    status: "Live",
    what: "As companies grow, approval processes get complex fast. The Workflow Designer gives finance and ops teams full flexibility to define, customise and manage approval workflows — without engineering involvement.",
    did: "Owned the product end-to-end: from discovery and scoping through to beta and general release. Worked closely with the engineering squad on delivery, reduced dependency bottlenecks, and helped onboard customers faster by giving them self-serve control over their approval logic.",
    outcomes: [
      "Reduced engineering bottlenecks on approval configuration",
      "Accelerated customer onboarding",
      "Increased product competitiveness in enterprise deals",
    ],
    tag: "Fintech · B2B SaaS",
  },
  {
    name: "Invoice Automation & Smart Coding",
    company: "Perk",
    companyUrl: "https://www.perk.com",
    url: "https://www.perk.com/spend-solutions/invoice-automation/",
    role: "Product Manager — Full product ownership",
    period: "Throughout 2023",
    status: "Live",
    what: "Accounts payable teams manually matching invoices to the right GL account, cost object and project code — across thousands of suppliers and documents — is slow and error-prone. Smart Coding is an AI algorithm that learns from your historical patterns and suggests the right coding combination automatically.",
    did: "Led the squad responsible for building and scaling Perk's Invoice product from zero to production. Defined goals, owned the roadmap, coordinated delivery and drove the initial customer onboarding. Took the product from concept to more than 10,000 invoices processed and millions in spend posted to ERPs.",
    outcomes: [
      "10,000+ invoices processed",
      "Millions in spend posted to ERPs",
      "Successfully onboarded initial customer cohort",
    ],
    tag: "Fintech · AI · B2B SaaS",
  },
  {
    name: "maurospadaro.com",
    company: "Personal project",
    companyUrl: null,
    url: "https://maurospadaro.com",
    role: "Designer & Developer — Solo",
    period: "End of 2025 → 2026",
    status: "Live",
    what: "A personal blog and portfolio to write about product management, fintech, and tech. Also a hands-on way to stay close to the craft of building digital products.",
    did: "Designed the first version in Figma, built it in Webflow, then rebuilt it entirely from scratch using Next.js 14, Tailwind CSS and a markdown-based CMS. Handled everything: design, frontend development, SEO, deployment on Vercel, and the content strategy.",
    outcomes: [
      "Fully custom Next.js build with no CMS dependency",
      "Static site with automated deploys via Vercel",
      "SEO-optimised with structured data, sitemap and OG images",
    ],
    tag: "Next.js · Personal",
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
    <div className="bg-[#93C1D9]/20 rounded-2xl p-10 shadow-sm hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
        <div>
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
              {project.status}
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-gray-200 text-gray-700">
              {project.tag}
            </span>
          </div>
          <h2 className="text-3xl font-extrabold text-gray-900">{project.name}</h2>
          <p className="text-gray-500 text-sm mt-1">
            {project.companyUrl ? (
              <a href={project.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline font-medium text-gray-700">
                {project.company}
              </a>
            ) : (
              <span className="font-medium text-gray-700">{project.company}</span>
            )}
            {' · '}{project.role} · {project.period}
          </p>
        </div>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="self-start inline-flex items-center px-5 py-2 rounded-full bg-[#0C1C5A] text-white text-sm font-semibold hover:bg-[#0C1C5A]/80 transition-colors whitespace-nowrap"
          >
            View project →
          </a>
        )}
      </div>

      <div className="divide-y divide-gray-200 border-t border-gray-200 mt-8">
        {/* What */}
        <div className="py-6">
          <h3 className="text-sm font-bold text-[#0C1C5A] mb-3">🎯 The problem</h3>
          <p className="text-gray-700 text-lg leading-relaxed">{project.what}</p>
        </div>

        {/* What I did */}
        <div className="py-6">
          <h3 className="text-sm font-bold text-[#0C1C5A] mb-3">🔧 What I did</h3>
          <p className="text-gray-700 text-lg leading-relaxed">{project.did}</p>
        </div>

        {/* Outcomes */}
        <div className="py-6">
          <h3 className="text-sm font-bold text-[#0C1C5A] mb-4">📈 Outcomes</h3>
          <ul className="space-y-3">
            {project.outcomes.map((outcome, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-700 text-base">
                <span className="bg-[#0C1C5A] text-white text-xs font-bold px-2 py-0.5 rounded-full mt-0.5 shrink-0">→</span>
                {outcome}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
