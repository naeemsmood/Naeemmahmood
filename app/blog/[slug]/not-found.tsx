import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-black mb-4">404</h1>
          <h2 className="text-2xl font-bold text-black mb-4">Post Not Found</h2>
          <p className="text-gray-600 mb-6">
            Sorry, we couldn't find the blog post you're looking for.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
}

