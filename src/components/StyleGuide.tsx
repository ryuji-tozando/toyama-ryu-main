export default function StyleGuide() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-black text-toyama-dark mb-12 text-center">
          デザインスタイルガイド
        </h2>

        <div className="space-y-16">
          <div>
            <h3 className="text-2xl font-bold text-toyama-dark mb-6">カラーパレット</h3>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
              <div className="space-y-2">
                <div className="h-24 bg-toyama-dark rounded shadow-lg" />
                <p className="text-sm font-sans font-semibold">Dark Teal</p>
                <p className="text-xs text-gray-600 font-mono">#264653</p>
              </div>
              <div className="space-y-2">
                <div className="h-24 bg-toyama-teal rounded shadow-lg" />
                <p className="text-sm font-sans font-semibold">Teal</p>
                <p className="text-xs text-gray-600 font-mono">#2A9D8F</p>
              </div>
              <div className="space-y-2">
                <div className="h-24 bg-toyama-yellow rounded shadow-lg" />
                <p className="text-sm font-sans font-semibold">Yellow</p>
                <p className="text-xs text-gray-600 font-mono">#E9C46A</p>
              </div>
              <div className="space-y-2">
                <div className="h-24 bg-toyama-orange rounded shadow-lg" />
                <p className="text-sm font-sans font-semibold">Orange</p>
                <p className="text-xs text-gray-600 font-mono">#F4A261</p>
              </div>
              <div className="space-y-2">
                <div className="h-24 bg-toyama-base rounded shadow-lg border border-gray-200" />
                <p className="text-sm font-sans font-semibold">Base</p>
                <p className="text-xs text-gray-600 font-mono">#F8F9FA</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-toyama-dark mb-6">タイポグラフィ</h3>
            <div className="space-y-6">
              <div className="border-l-4 border-toyama-teal pl-6">
                <h1 className="text-6xl font-black text-toyama-dark mb-2">見出し1</h1>
                <p className="text-sm text-gray-600 font-sans">Noto Serif JP - Black (900) - 60px</p>
              </div>
              <div className="border-l-4 border-toyama-teal pl-6">
                <h2 className="text-4xl font-bold text-toyama-dark mb-2">見出し2</h2>
                <p className="text-sm text-gray-600 font-sans">Noto Serif JP - Bold (700) - 40px</p>
              </div>
              <div className="border-l-4 border-toyama-teal pl-6">
                <h3 className="text-2xl font-bold text-toyama-dark mb-2">見出し3</h3>
                <p className="text-sm text-gray-600 font-sans">Noto Serif JP - Bold (700) - 24px</p>
              </div>
              <div className="border-l-4 border-toyama-teal pl-6">
                <p className="text-lg text-gray-700 mb-2">本文テキスト - これは本文のサンプルテキストです。読みやすさを重視した行間と文字サイズを採用しています。</p>
                <p className="text-sm text-gray-600 font-sans">Noto Serif JP - Regular (400) - 18px / Line height 150%</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-toyama-dark mb-6">ボタンスタイル</h3>
            <div className="flex flex-wrap gap-4">
              <button className="group relative px-8 py-3 bg-toyama-orange text-white font-sans font-semibold overflow-hidden transition-all duration-300 hover:scale-105">
                <span className="relative z-10">プライマリボタン</span>
                <div className="absolute inset-0 bg-toyama-yellow transform translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
              </button>

              <button className="px-8 py-3 border-2 border-toyama-dark text-toyama-dark font-sans font-semibold hover:bg-toyama-dark hover:text-white transition-all duration-300">
                セカンダリボタン
              </button>

              <button className="px-8 py-3 bg-toyama-teal text-white font-sans font-semibold hover:bg-toyama-dark transition-all duration-300">
                アクセントボタン
              </button>
            </div>
            <div className="mt-6 space-y-2 text-sm text-gray-600 font-sans">
              <p>ホバー時: スケール(1.05) / カラーアニメーション</p>
              <p>トランジション: 300ms ease</p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-toyama-dark mb-6">カードコンポーネント</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-sm shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-toyama-orange">
                <h4 className="text-xl font-bold text-toyama-dark mb-3">カードタイトル</h4>
                <p className="text-gray-600">カードの内容がここに入ります。ホバー時に影が強調されます。</p>
              </div>
              <div className="bg-white p-6 rounded-sm shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-toyama-teal">
                <h4 className="text-xl font-bold text-toyama-dark mb-3">カードタイトル</h4>
                <p className="text-gray-600">カードの内容がここに入ります。ホバー時に影が強調されます。</p>
              </div>
              <div className="bg-white p-6 rounded-sm shadow-lg hover:shadow-2xl transition-shadow duration-300 border-t-4 border-toyama-yellow">
                <h4 className="text-xl font-bold text-toyama-dark mb-3">カードタイトル</h4>
                <p className="text-gray-600">カードの内容がここに入ります。ホバー時に影が強調されます。</p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-toyama-dark mb-6">アイコンの使用</h3>
            <p className="text-gray-700 mb-4">Lucide Reactを使用し、ミニマルで洗練されたアイコンを採用</p>
            <div className="flex flex-wrap gap-8 items-center">
              <div className="bg-toyama-dark p-4 rounded-sm">
                <span className="text-toyama-yellow text-2xl">⚔</span>
              </div>
              <div className="bg-toyama-teal p-4 rounded-sm">
                <span className="text-white text-2xl">🎯</span>
              </div>
              <div className="bg-toyama-orange p-4 rounded-sm">
                <span className="text-white text-2xl">🌏</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
