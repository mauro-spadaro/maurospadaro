export const metadata = {
  title: "About me",
  description: "About me page details",
};

export default function AboutMePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-200 to-white py-16">
      {/* Header Section */}
      <div className="container mx-auto px-4">
        <h1 className="text-6xl font-extrabold text-center mb-8 text-gray-800">
          Ciao, I'm Mauro
        </h1>
        <h2 className="text-3xl font-bold text-center text-gray-500 mb-12">
          Nice to meet you!
        </h2>

        {/* First Section */}
        <AboutMeSection />
        {/* About Me Details Section */}
        <AboutMeDetailsSection />
        {/* Contact Section */}
        <ContactSection />
      </div>
    </div>
  );
}

// Reusable About Me Section (unchanged)
function AboutMeSection() {
  return (
    <div className="flex flex-col md:flex-row items-stretch justify-center gap-8 mt-12">
      {/* Text Block */}
      <div className="bg-[#93C1D9]/20 rounded-xl shadow-lg p-12 max-w-md w-full flex flex-col justify-between">
        <div className="space-y-8">
          <h2 className="text-3xl font-bold text-gray-800">
            Tech and product enthusiast, I strive to solve big problems that have an impact.
          </h2>
          <p className="text-gray-800 text-xl">
            Today I am a <span className="font-bold">Product Manager</span> at{' '}
            <a href="https://yokoy.ai" className="text-red-500 underline">
              Yokoy
            </a>
            , a Swiss start-up that is leading the AI race in spend management.
          </p>
        </div>
        
        {/* Contact Me Button */}
        <div className="flex items-center gap-4 mt-8">
          <a
            href="#contact"
            className="bg-[#0C1C5A] text-white px-6 py-3 rounded-full font-bold shadow-md hover:bg-[#0C1C5A]/40 transition-colors"
          >
            Contact me
          </a>
          <a
            href="https://www.linkedin.com/in/mauro-spadaro/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin text-gray-800 text-2xl"></i>
          </a>
        </div>
      </div>

      {/* Image Block */}
      <div className="rounded-xl overflow-hidden shadow-lg max-w-md w-full">
        <img
          src="/mauro_nature.jpeg"
          alt="Mauro in nature"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

// About Me Details Section
function AboutMeDetailsSection() {
  return (
    <div className="py-5 mt-12">
      <h1 className="text-6xl font-extrabold text-center mb-16 text-gray-800">
        About me
      </h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 px-4">
        <div>
          <p className="text-gray-800 mb-8 text-lg">
            🚀 I am currently working in a Sequoia-backed Swiss start-up named <span className="font-bold">Yokoy</span> as a{' '}
            <span className="font-bold">Product Manager</span>.
          </p>
          <p className="text-gray-800 mb-8 text-lg">
            🤝 Since April 2022 I am <span className="font-bold">Community Coordinator</span> for the{' '}
            <span className="font-bold">Fintech Product Guild</span>, a community of 100+ senior fintench product 
            people, acrooss Europe and US.
          </p>
          <p className="text-gray-800 mb-8 text-lg">
            ✈️ My journey in Product started with{' '}
            <span className="font-bold">Zaefiro</span>, a no-code flight-sharing portal 
            started with a friend in 2021.
          </p>
        </div>
        <div>
          <p className="text-gray-800 mb-8 text-lg">
            👨‍🎓 Economist by education, technologist by passion. I like to try out things myself, you can have a look at my{' '}
            <span className="font-bold">Github</span> repos{' '}
            <a href="#" className="text-black underline">here</a>.
          </p>
          <p className="text-gray-800 mb-8 text-lg">
            💻 Before working in Product, I tried different things in various industries. In 2020, I contributed launching a no-profit consulting platform called{' '}
            <span className="font-bold">Thrive</span>.
          </p>
          <p className="text-gray-800 text-lg">
            🧑‍🤝‍🧑 In this website you find some of the things that <span className="font-bold">interest me</span> the most. I talk about 
            anything, from product management to personal life.
          </p>
        </div>
      </div>
    </div>
  );
}

// Contact Section
function ContactSection() {
  return (
    <div className="py-5 mt-12">
      <h1 className="text-6xl font-extrabold text-center mb-16 text-gray-800">
        Contacts
      </h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-x-16 gap-y-8 px-4">
        <div className="text-center">
          <h3 className="font-bold text-lg mb-4 text-gray-800">📧 Email</h3>
          <p className="text-gray-800 text-lg">
            If you have any question or want to chat, click{' '}
            <a href="#" className="text-black underline">
              here
            </a>
            .
          </p>
        </div>
        <div className="text-center">
          <h3 className="font-bold text-lg mb-4 text-gray-800">☕ In person</h3>
          <p className="text-gray-800 text-lg">
            Find me in Zurich! Let's grab a coffee. Reach out to me via{' '}
            <a href="#" className="text-black underline">
              mail
            </a>
            .
          </p>
        </div>
        <div className="text-center">
          <h3 className="font-bold text-lg mb-4 text-gray-800">💬 Social network</h3>
          <p className="text-gray-800 text-lg">
            Connect with me on{' '}
            <a href="https://www.linkedin.com" className="text-black underline">
              LinkedIn
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
