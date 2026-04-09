import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-9xl font-extrabold text-gray-800 mb-4">404</h1>
      <p className="text-2xl font-bold text-gray-700 mb-2">Page not found</p>
      <p className="text-gray-500 text-lg mb-10">
        Looks like this page doesn&apos;t exist. Maybe it never did.
      </p>
      <div className="flex gap-4">
        <Link
          href="/"
          className="px-6 py-3 rounded-full bg-[#0C1C5A] text-white font-semibold hover:bg-[#0C1C5A]/80 transition-colors"
        >
          Go home
        </Link>
        <Link
          href="/articles"
          className="px-6 py-3 rounded-full bg-white border border-gray-300 text-gray-600 shadow hover:bg-gray-100 transition"
        >
          Read articles
        </Link>
      </div>
    </div>
  );
}
