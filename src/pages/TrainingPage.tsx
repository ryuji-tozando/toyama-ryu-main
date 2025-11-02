export default function TrainingPage() {
  return (
    <div className="min-h-screen bg-toyama-base py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-toyama-dark mb-12 font-serif">稽古・技法</h1>

        <div className="space-y-16">
          <section id="curriculum" className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-toyama-teal mb-6">稽古内容</h2>
            <p className="text-gray-700 leading-relaxed">
              TODO: 形、組太刀、試斬、稽古の流れと体系について記載
            </p>
          </section>

          <section id="techniques" className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-toyama-teal mb-6">技法解説</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-toyama-yellow pl-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">基礎居合（動き商標）</h3>
                <p className="text-gray-700">TODO: 基礎居合の詳細を記載</p>
              </div>
              <div className="border-l-4 border-toyama-yellow pl-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">本居合（動き商標）</h3>
                <p className="text-gray-700">TODO: 本居合の詳細を記載</p>
              </div>
              <div className="border-l-4 border-toyama-yellow pl-4">
                <h3 className="text-xl font-bold text-gray-800 mb-2">八方抜き（動き商標）</h3>
                <p className="text-gray-700">TODO: 八方抜きの詳細を記載</p>
              </div>
              <p className="text-gray-700 leading-relaxed mt-4">
                TODO: 実践性、立居合の優位性について記載
              </p>
            </div>
          </section>

          <section id="beginners" className="bg-toyama-yellow/10 p-8 rounded-lg shadow-lg border-2 border-toyama-yellow">
            <h2 className="text-3xl font-bold text-toyama-teal mb-6">初心者向けガイド</h2>
            <p className="text-gray-700 leading-relaxed">
              TODO: 「誰でも始めやすい」訴求強化、よくある不安への回答、必要な準備・心構えについて記載
            </p>
          </section>

          <section id="schedule" className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-toyama-teal mb-6">稽古スケジュール</h2>
            <p className="text-gray-700 leading-relaxed">
              TODO: 各支部の稽古日時、カレンダー形式で表示
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
