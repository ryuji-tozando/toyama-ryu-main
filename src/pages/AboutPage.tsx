export default function AboutPage() {
  return (
    <div className="min-h-screen bg-toyama-base py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-toyama-dark mb-12 font-serif">戸山流とは</h1>

        {/* TODO: 以下のサブセクションを実装 */}
        <div className="space-y-16">
          <section id="mission" className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-toyama-teal mb-6">設立趣旨</h2>
            <p className="text-gray-700 leading-relaxed">
              TODO: NPO法人格、文化の継承使命、戸山流の理念と価値について記載
            </p>
          </section>

          <section id="history" className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-toyama-teal mb-6">沿革・歴史</h2>
            <p className="text-gray-700 leading-relaxed">
              TODO: 陸軍戸山学校から現代まで、流祖・森永清の遺産、発祥の地・京田辺について記載
            </p>
          </section>

          <section id="trademark" className="bg-white p-8 rounded-lg shadow-lg border-2 border-toyama-yellow">
            <h2 className="text-3xl font-bold text-toyama-teal mb-6">動き商標と真正性</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              TODO: 基礎居合・本居合・八方抜きの動き商標登録、一般社団法人 戸山流居合道との関係性、真正性の法的保証について記載
            </p>
            <div className="bg-toyama-yellow/10 p-4 rounded">
              <p className="text-sm text-gray-600">
                ※ 戦略的重要セクション - Porter差別化戦略の核心要素
              </p>
            </div>
          </section>

          <section id="greeting" className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-toyama-teal mb-6">理事長挨拶</h2>
            <p className="text-gray-700 leading-relaxed">
              TODO: ビジョンとメッセージを記載
            </p>
          </section>

          <section id="board" className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-toyama-teal mb-6">役員紹介</h2>
            <p className="text-gray-700 leading-relaxed">
              TODO: 写真 + プロフィール、組織体制を記載
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
