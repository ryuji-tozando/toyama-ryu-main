import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-toyama-dark via-toyama-teal to-toyama-dark">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif">
            戸山流居合道会
          </h1>
          <p className="text-xl md:text-2xl text-toyama-yellow mb-8 font-sans tracking-wide">
            真正性・実践性・国際性
          </p>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed">
            動き商標で守られた伝統の技を、次世代へ
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/join#trial"
              className="px-8 py-4 bg-toyama-yellow text-toyama-dark font-bold rounded-lg hover:bg-toyama-yellow/90 transition-colors"
            >
              体験稽古申込
            </Link>
            <Link
              to="/about"
              className="px-8 py-4 bg-white/10 text-white border-2 border-white/30 font-bold rounded-lg hover:bg-white/20 transition-colors"
            >
              戸山流とは
            </Link>
          </div>
        </div>
      </section>

      {/* 3つの原則 */}
      <section className="py-24 bg-toyama-base">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-toyama-dark mb-16 font-serif">
            戸山流の三原則
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-toyama-teal mb-4">伝統性</h3>
              <p className="text-gray-700 leading-relaxed">
                誰でも始めやすいですが、奥が深い伝統の技は、生涯をかけて追求できる深さがあります。
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-toyama-teal mb-4">国際性</h3>
              <p className="text-gray-700 leading-relaxed">
                和気あいあいとした雰囲気で、年齢や性別を越えた交流が生まれます。
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-toyama-teal mb-4">実践性</h3>
              <p className="text-gray-700 leading-relaxed">
                誰でも気軽に稽古に取り組めるので、あなたのペースに合わせて、無理なく続けられます。
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
