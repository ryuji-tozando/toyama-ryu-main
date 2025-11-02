export default function DojosPage() {
  return (
    <div className="min-h-screen bg-toyama-base py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-toyama-dark mb-12 font-serif">道場・支部</h1>

        <div className="space-y-16">
          <section id="headquarters" className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-toyama-teal mb-6">本部道場</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              京田辺市の本部道場で稽古を行っています。
            </p>
            <p className="text-gray-700">
              TODO: 所在地・アクセスマップ、施設紹介、道場での礼儀作法と規則を記載
            </p>
          </section>

          <section id="branches" className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-toyama-teal mb-6">国内・海外支部</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              各支部の詳細については、以下のリンクをご参照ください。
            </p>
            <div className="space-y-3">
              <div className="border-l-4 border-toyama-teal pl-4">
                <a href="#" className="text-lg font-semibold text-toyama-teal hover:text-toyama-dark transition-colors">
                  京田辺支部 →
                </a>
              </div>
              <div className="border-l-4 border-toyama-teal pl-4">
                <a href="#" className="text-lg font-semibold text-toyama-teal hover:text-toyama-dark transition-colors">
                  関支部（孫六剣友会） →
                </a>
              </div>
              <div className="border-l-4 border-toyama-teal pl-4">
                <a href="#" className="text-lg font-semibold text-toyama-teal hover:text-toyama-dark transition-colors">
                  中越会 →
                </a>
              </div>
              <div className="border-l-4 border-toyama-yellow pl-4">
                <a href="#" className="text-lg font-semibold text-toyama-teal hover:text-toyama-dark transition-colors">
                  英国支部（清道館） →
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
