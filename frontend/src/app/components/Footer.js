import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0C1C5A] text-white mt-16">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-10">

          {/* Brand */}
          <div className="max-w-xs">
            <Link href="/" className="text-2xl font-extrabold">maurospadaro</Link>
            <p className="text-white/60 text-sm mt-3 leading-relaxed">
              Writing about product management, fintech, and tech. PM at Perk, based in Barcelona.
            </p>
            <div className="flex gap-4 mt-5">
              <a href="https://www.linkedin.com/in/mauro-spadaro/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <i className="fab fa-linkedin text-white/60 text-xl hover:text-white transition-colors" />
              </a>
              <a href="https://github.com/mauro-spadaro" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <i className="fab fa-github text-white/60 text-xl hover:text-white transition-colors" />
              </a>
              <a href="mailto:spadaro.mauro@gmail.com" aria-label="Email">
                <i className="fas fa-envelope text-white/60 text-xl hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-4">Navigation</h3>
            <ul className="space-y-2">
              {[
                { href: '/articles', label: 'Articles' },
                { href: '/resources', label: 'Resources' },
                { href: '/about', label: 'About me' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className="text-white/70 hover:text-white transition-colors text-sm">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-4">Get in touch</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:spadaro.mauro@gmail.com" className="text-white/70 hover:text-white transition-colors text-sm">
                  spadaro.mauro@gmail.com
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/mauro-spadaro/" target="_blank" rel="noopener noreferrer" className="text-white/70 hover:text-white transition-colors text-sm">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 mt-10 pt-6 text-center text-white/30 text-xs">
          &copy; {currentYear} Mauro Spadaro. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
