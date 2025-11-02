import { Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-toyama-base py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-bold text-toyama-dark mb-12 font-serif">お問い合わせ</h1>

        <div className="space-y-8">
          <section className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-toyama-teal mb-6">連絡先</h2>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className="w-6 h-6 text-toyama-teal mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800">メール</p>
                  <a href="mailto:toyamaryuhonnbu@gmail.com" className="text-toyama-teal hover:text-toyama-dark transition-colors">
                    toyamaryuhonnbu@gmail.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-6 h-6 text-toyama-teal mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold text-gray-800">本部所在地</p>
                  <p className="text-gray-700">京都府京田辺市</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-toyama-teal mb-4">お問い合わせについて</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              稽古の見学や体験、入会に関するご質問など、お気軽にお問い合わせください。
            </p>
            <p className="text-gray-700 leading-relaxed">
              体験稽古をご希望の方は、<Link to="/join#trial" className="text-toyama-teal hover:text-toyama-dark font-semibold transition-colors">入会案内ページ</Link>の体験稽古申込フォームよりお申し込みください。
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
