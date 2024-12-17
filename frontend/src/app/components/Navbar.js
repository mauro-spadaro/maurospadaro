import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="bg-red-800 text-white px-6 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold">
                <Link href="/">speaktheproductup</Link>
            </div>
            <div className="flex space-x-4">
                <Link href="/articles" className="relative px-4 py-2 rounded-full text-white hover:bg-gray-400 transition duration-300">
                    Articles ✍️
                </Link>
                <Link href="/about" className="relative px-4 py-2 rounded-full text-white hover:bg-gray-400 transition duration-300">
                    About me 👨‍💻
                </Link>
            </div>
        </nav>
    );
}
