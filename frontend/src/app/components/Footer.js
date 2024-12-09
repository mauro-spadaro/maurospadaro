export default function Footer() {
    return (
        <footer className="bg-gray-200 text-center py-4">
            <p className="text-gray-700">
                © {new Date().getFullYear()} <strong>speaktheproductup</strong>.
            </p>
            <div className="flex justify-center space-x-4 mt-2 text-gray-600">
                <a href="https://github.com/mauro-spadaro" target="_blank" rel="noopener noreferrer" className="hover:text-black">
                    <i className="fab fa-github"></i> GitHub
                </a>
                <a href="https://www.linkedin.com/in/mauro-spadaro/" target="_blank" rel="noopener noreferrer" className="hover:text-black">
                    <i className="fab fa-linkedin"></i> LinkedIn
                </a>
            </div>
        </footer>
    );
}
