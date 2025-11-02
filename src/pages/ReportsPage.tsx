export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-toyama-base py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-toyama-dark mb-12 font-serif">活動報告</h1>

        <div className="space-y-16">
          <section id="news" className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-toyama-teal mb-6">最新情報・ニュース</h2>
            <p className="text-gray-700 leading-relaxed">
              TODO: 活動報告、歴史や理念に関するコラムを記載
            </p>
          </section>

          <section id="events" className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-toyama-teal mb-6">イベント・講習会</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-toyama-yellow pl-6 py-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">試斬講習会</h3>
                <p className="text-gray-700">戸山流の真髄である「斬れる居合」を実践する試斬講習会を定期的に開催しています。</p>
              </div>
              <div className="border-l-4 border-toyama-yellow pl-6 py-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">錬成大会</h3>
                <p className="text-gray-700">会員の技術向上と交流を目的とした錬成大会を開催しています。</p>
              </div>
              <div className="border-l-4 border-toyama-yellow pl-6 py-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">石清水八幡宮 奉納演武</h3>
                <p className="text-gray-700">京都の石清水八幡宮にて奉納演武を行っています。</p>
              </div>
              <div className="border-l-4 border-toyama-yellow pl-6 py-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">京田辺市月読神社 演武</h3>
                <p className="text-gray-700">戸山流発祥の地である京田辺市の月読神社にて演武を行っています。</p>
              </div>
              <div className="border-l-4 border-toyama-yellow pl-6 py-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">関市刃物まつり 演武</h3>
                <p className="text-gray-700">岐阜県関市の刃物まつりにて演武を披露しています。</p>
              </div>
            </div>
          </section>

          <section id="gallery" className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-toyama-teal mb-6">ギャラリー</h2>
            <p className="text-gray-700 leading-relaxed">
              TODO: 高品質な写真・映像ギャラリー（行事ごとに分類）
            </p>
          </section>

          <section id="media" className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-toyama-teal mb-6">メディア掲載</h2>
            <p className="text-gray-700 leading-relaxed">
              TODO: 新聞・TV・雑誌等の掲載実績を記載
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
