import TrialLessonForm from '../components/forms/TrialLessonForm';

export default function JoinPage() {
  return (
    <div className="min-h-screen bg-toyama-base py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-toyama-dark mb-12 font-serif">入会案内</h1>

        <div className="max-w-4xl mx-auto">
          <section className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-3xl font-bold text-toyama-teal mb-6">まずは体験稽古へ</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              戸山流居合道会では、入会をご検討の方にまず体験稽古への参加をおすすめしています。
            </p>
            <p className="text-gray-700 leading-relaxed">
              道着や道具は不要で、手ぶらでお越しいただけますので、お気軽にお問い合わせください。
            </p>
          </section>

          <section id="trial" className="bg-toyama-yellow/10 p-8 rounded-lg shadow-lg border-2 border-toyama-yellow">
            <h2 className="text-3xl font-bold text-toyama-teal mb-6">体験稽古申込</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              京田辺市の本部での稽古の体験をご希望の方は、下記フォームよりお申し込みください。
            </p>
            <TrialLessonForm />
          </section>
        </div>
      </div>
    </div>
  );
}
