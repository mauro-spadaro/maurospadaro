import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="bg-gray-200 py-4 text-center">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          {/* Copyright Text */}
          <p className="text-gray-600 text-sm font-medium">
            &copy; {currentYear} <span className="font-bold">maurospadaro.</span>
          </p>
  
          {/* Social Links */}
          <div className="flex space-x-4 mt-2 md:mt-0">
            <a
              href="https://github.com/mauro-spadaro"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fab fa-github text-gray-600 text-2xl hover:text-gray-800"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/mauro-spadaro/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin text-gray-600 text-2xl hover:text-gray-800"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
  