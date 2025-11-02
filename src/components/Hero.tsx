import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(rgba(38, 70, 83, 0.4), rgba(38, 70, 83, 0.6)), url('https://images.pexels.com/photos/7988086/pexels-photo-7988086.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-toyama-dark/50" />
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
        <div className="text-center space-y-8 max-w-5xl">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
              <span className="block text-balance leading-tight">はじめてでも、</span>
              <span className="block text-balance leading-tight text-toyama-yellow">一生を懸ける価値がある。</span>
            </h1>

            <p className="text-xl md:text-2xl text-white/90 font-sans font-light tracking-wide max-w-3xl mx-auto">
              子供から80代まで。あなたの一歩を、私たちが支えます。
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <button className="group relative px-10 py-4 bg-toyama-orange text-white font-sans font-semibold text-lg tracking-wide overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl rounded-sm">
              <span className="relative z-10">まずは見学・体験から</span>
              <div className="absolute inset-0 bg-toyama-yellow transform translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
            </button>

            <button className="px-10 py-4 border-2 border-white text-white font-sans font-semibold text-lg tracking-wide hover:bg-white hover:text-toyama-dark transition-all duration-300 rounded-sm">
              詳しく知る
            </button>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-white/70" />
        </div>
      </div>
    </section>
  );
}
