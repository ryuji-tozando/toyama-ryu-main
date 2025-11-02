export default function EnglishPage() {
  return (
    <div className="min-h-screen bg-toyama-base py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-toyama-dark mb-8 font-serif">English Site</h1>
        <div className="bg-white p-12 rounded-lg shadow-lg text-center">
          <h2 className="text-3xl font-bold text-toyama-teal mb-6">Coming Soon</h2>
          <p className="text-xl text-gray-700 leading-relaxed max-w-2xl mx-auto">
            The English version of this website is currently under development.
            Please check back later for updates.
          </p>
          <p className="text-gray-600 mt-8">
            For inquiries in English, please contact us at:{' '}
            <a href="mailto:toyamaryuhonnbu@gmail.com" className="text-toyama-teal hover:text-toyama-dark font-semibold transition-colors">
              toyamaryuhonnbu@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
