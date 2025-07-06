"use client"


import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-white flex flex-col items-center justify-center px-6">
      <h1 className="text-7xl font-extrabold text-pink-600 animate-pulse">404</h1>
      <p className="text-2xl mt-4 text-gray-300">Oops! Page Not Found</p>
      <p className="text-md mt-2 text-gray-400 text-center max-w-md">
        The page you're looking for doesn't exist or has been moved. Don’t worry,
        you can always go back to the homepage.
      </p>
      <Link
        href="/"
        className="mt-6 bg-pink-600 hover:bg-pink-700 transition-colors text-white py-2 px-6 rounded-full text-sm font-medium"
      >
        Go Back Home
      </Link>
      <div className="mt-10 text-gray-600 text-sm">
        <code className="bg-gray-800 px-2 py-1 rounded">
          /app/not-found.tsx
        </code>
      </div>
    </div>
  );
}
