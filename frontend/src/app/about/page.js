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
    <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12">
      {/* Text Block */}
      <div className="bg-red-100 rounded-lg shadow-lg p-8 max-w-md w-full text-center md:text-left flex flex-col justify-center h-full">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          Tech and product enthusiast, I strive to solve big problems that have an impact.
        </h2>
        <p className="text-gray-600 text-lg mb-6">
          Today I am a <span className="font-bold text-gray-800">Product Manager</span> at{' '}
          <a href="https://yokoy.ai" className="text-red-500 underline">
            Yokoy
          </a>
          , a Swiss start-up that is leading the AI race in spend management.
        </p>
        {/* Contact Me Button */}
        <div className="flex items-center justify-center md:justify-start space-x-4">
          <a
            href="#contact"
            className="bg-red-500 text-white px-6 py-3 rounded-lg font-medium shadow-md hover:bg-red-600 transition"
          >
            Contact me
          </a>
          <a
            href="https://www.linkedin.com/in/mauro-spadaro/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin text-gray-600 text-4xl hover:text-gray-800"></i>
          </a>
        </div>
      </div>

      {/* Image Block */}
      <div className="rounded-lg overflow-hidden shadow-lg max-w-md w-full">
        <img
          src="/mauro_nature.jpeg" // Replace with the correct path to your image
          alt="Mauro in nature"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}

// About Me Details Section
function AboutMeDetailsSection() {
  return (
    <div className="py-5 mt-12">
        <h1 className="text-6xl font-extrabold text-center mb-8 text-gray-800">
          About me
        </h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4">
        <div>
          <p className="text-gray-800 mb-4">
            🚀 I am currently working in a Sequoia-backed Swiss start-up named <strong>Yokoy</strong> as a <strong>Product Manager</strong>.
          </p>
          <p className="text-gray-800 mb-4">
            🤝 Since April 2022 I am <strong>Community Coordinator</strong> for the <strong>Fintech Product Guild</strong>, a community of 100+ senior fintech product people across Europe and the US.
          </p>
          <p className="text-gray-800 mb-4">
            ✈️ My journey in Product started with <strong>Zaefiro</strong>, a no-code flight-sharing portal started with a friend in 2021.
          </p>
        </div>
        <div>
          <p className="text-gray-800 mb-4">
            👨‍🎓 Economist by education, technologist by passion. I like to try out things myself, you can have a look at my <strong>Github</strong> repos <a href="#" className="text-red-500 underline">here</a>.
          </p>
          <p className="text-gray-800 mb-4">
            💻 Before working in Product, I contributed to launching <strong>Thrive</strong>, a non-profit consulting platform, in 2020.
          </p>
          <p className="text-gray-800">
            🧑‍🤝‍🧑 In this website you will find topics that <strong>interest me</strong>, from product management to personal life.
          </p>
        </div>
      </div>
    </div>
  );
}

// Contact Section
function ContactSection() {
  return (
    <div className="py-5 mt-3">
      <h1 className="text-6xl font-extrabold text-center mb-8 text-gray-800">
          Contacts
        </h1>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
        <div className="text-center">
          <h3 className="font-bold text-lg mb-2 text-gray-800">📧 Email</h3>
          <p className="text-gray-800">
            If you have any question or want to chat, click{' '}
            <a href="#" className="text-red-500 underline">
              here
            </a>
            .
          </p>
        </div>
        <div className="text-center">
          <h3 className="font-bold text-lg mb-2 text-gray-800">☕ In person</h3>
          <p className="text-gray-800">
            Find me in Zurich! Let’s grab a coffee. Reach out to me via{' '}
            <a href="#" className="text-red-500 underline">
              mail
            </a>
            .
          </p>
        </div>
        <div className="text-center">
          <h3 className="font-bold text-lg mb-2 text-gray-800">💬 Social network</h3>
          <p className="text-gray-800">
            Connect with me on{' '}
            <a href="https://www.linkedin.com" className="text-red-500 underline">
              LinkedIn
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
