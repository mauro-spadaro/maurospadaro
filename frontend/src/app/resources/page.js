export const metadata = {
  title: "Resources",
  description:
    "The best courses, people, and newsletters Mauro Spadaro recommends for anyone getting into product management.",
  openGraph: {
    title: "Resources | maurospadaro",
    description:
      "The best courses, people, and newsletters Mauro Spadaro recommends for anyone getting into product management.",
    url: "https://maurospadaro.com/resources",
  },
};

const COURSES = [
  {
    title: "Non Developers",
    url: "https://www.nondevelopers.co/",
    description:
      "The best course I've come across for PMs who want to understand how software is actually built — without becoming engineers. It gave me the vocabulary and mental models to talk confidently with any dev team. If you're breaking into product, start here.",
    affiliate: true,
    cta: "Check it out",
  },
];

const PEOPLE = [
  {
    name: "Ben Erez",
    url: "https://www.linkedin.com/in/benerez/",
    description:
      "Ben posts some of the sharpest PM interview prep content on LinkedIn. If you have an interview coming up, follow him and read everything he writes.",
    focus: "Interview Prep",
  },
  {
    name: "Dr. Bart",
    url: "https://www.linkedin.com/in/drbartpm/",
    description:
      "Solid fundamentals on product thinking, prioritisation, and the day-to-day craft of being a PM. Great if you're early in your product career and want to build the right habits.",
    focus: "PM Fundamentals",
  },
];

const NEWSLETTERS = [
  {
    title: "This Week in Fintech",
    url: "https://thisweekinfintech.com/",
    description:
      "The go-to weekly digest for anyone working in or around fintech. Covers funding rounds, product launches, and regulatory shifts — all in one place.",
    language: "English",
  },
  {
    title: "Lenny's Newsletter",
    url: "https://www.lennysnewsletter.com/",
    description:
      "One of the best product newsletters out there, full stop. Lenny Rachitsky writes about growth, retention, and the real mechanics behind great products. Deep dives every week.",
    language: "English",
  },
  {
    title: "Technicismi",
    url: "https://technicismi.substack.com/",
    description:
      "A sharp Italian-language newsletter on tech and digital culture. Highly recommended if you read Italian and want a perspective that's not always US-centric.",
    language: "Italian 🇮🇹",
  },
];

export default function ResourcesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <header className="container mx-auto px-4 py-16 text-center max-w-3xl">
        <h1 className="text-6xl font-extrabold mb-6 text-gray-800">Resources</h1>
        <p className="text-xl text-gray-600 leading-relaxed">
          Things I genuinely recommend.
        </p>
      </header>

      {/* Manifesto */}
      <section className="container mx-auto px-4 max-w-3xl mb-20">
        <div className="bg-[#0C1C5A] rounded-2xl p-10 text-white">
          <p className="text-2xl font-bold leading-relaxed mb-4">
            The best piece of advice I ever received about getting into product?
          </p>
          <p className="text-xl leading-relaxed text-white/80">
            <span className="text-white font-semibold">Do stuff.</span> Run a query. Play around with code.
            Start a project. Write a blog. Build a small app. Anything.
          </p>
          <p className="text-xl leading-relaxed text-white/80 mt-4">
            In today's world you have no excuse not to try something yourself.
            There is no book or course that will give you a deeper understanding of product management
            than the moment you personally experience the complexity and difficulty of building something.
            Everything else — courses, newsletters, frameworks — only makes sense once you have skin in the game.
          </p>
        </div>
      </section>

      {/* Courses */}
      <section className="container mx-auto px-4 max-w-3xl mb-20">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-10">Courses</h2>
        <div className="space-y-6">
          {COURSES.map((course) => (
            <ResourceCard
              key={course.url}
              title={course.title}
              url={course.url}
              description={course.description}
              badge={course.affiliate ? "Affiliate" : null}
              badgeColor="bg-blue-100 text-blue-800"
              cta={course.cta}
            />
          ))}
        </div>
      </section>

      {/* People */}
      <section className="container mx-auto px-4 max-w-3xl mb-20">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-10">People to Follow</h2>
        <div className="space-y-6">
          {PEOPLE.map((person) => (
            <ResourceCard
              key={person.url}
              title={person.name}
              url={person.url}
              description={person.description}
              badge={person.focus}
              badgeColor="bg-[#93C1D9]/40 text-gray-800"
              cta="Follow on LinkedIn"
            />
          ))}
        </div>
      </section>

      {/* Newsletters */}
      <section className="container mx-auto px-4 max-w-3xl mb-20">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-10">Newsletters & Blogs</h2>
        <div className="space-y-6">
          {NEWSLETTERS.map((nl) => (
            <ResourceCard
              key={nl.url}
              title={nl.title}
              url={nl.url}
              description={nl.description}
              badge={nl.language}
              badgeColor="bg-gray-200 text-gray-700"
              cta="Subscribe"
            />
          ))}
        </div>
      </section>
    </div>
  );
}

function ResourceCard({ title, url, description, badge, badgeColor, cta }) {
  return (
    <div className="bg-[#93C1D9]/20 rounded-2xl p-8 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between gap-4 flex-wrap">
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        {badge && (
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${badgeColor}`}>
            {badge}
          </span>
        )}
      </div>
      <p className="text-gray-700 text-lg leading-relaxed">{description}</p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="self-start inline-flex items-center px-5 py-2 rounded-full bg-[#0C1C5A] text-white text-sm font-semibold hover:bg-[#0C1C5A]/80 transition-colors"
      >
        {cta} →
      </a>
    </div>
  );
}
