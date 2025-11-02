import { useState, FormEvent } from 'react';

export default function TrialLessonForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    message: '',
    consent: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formData.consent) {
      alert('個人情報の取り扱いに同意してください。');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus('idle');

    // TODO Phase 5: 実際のメール送信処理を実装
    // 送信先: toyamaryuhonnbu@gmail.com
    console.log('体験稽古申込フォーム送信:', formData);

    // 仮の送信処理（Phase 4はコンソール出力のみ）
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      // フォームをリセット
      setFormData({
        name: '',
        email: '',
        phone: '',
        preferredDate: '',
        message: '',
        consent: false,
      });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitStatus === 'success' && (
        <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded">
          お申し込みありがとうございます。折り返しご連絡いたします。
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded">
          送信中にエラーが発生しました。お手数ですが、再度お試しください。
        </div>
      )}

      <div>
        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
          お名前 <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-toyama-teal focus:border-transparent transition-colors"
          placeholder="山田 太郎"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
          メールアドレス <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-toyama-teal focus:border-transparent transition-colors"
          placeholder="example@email.com"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
          電話番号
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-toyama-teal focus:border-transparent transition-colors"
          placeholder="090-1234-5678"
        />
      </div>

      <div>
        <label htmlFor="preferredDate" className="block text-sm font-semibold text-gray-700 mb-2">
          希望日時
        </label>
        <input
          type="text"
          id="preferredDate"
          name="preferredDate"
          value={formData.preferredDate}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-toyama-teal focus:border-transparent transition-colors"
          placeholder="例: 2025年10月15日 14:00頃"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
          メッセージ・ご質問
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-toyama-teal focus:border-transparent transition-colors resize-none"
          placeholder="ご質問やご要望がございましたらご記入ください"
        />
      </div>

      <div className="flex items-start space-x-3">
        <input
          type="checkbox"
          id="consent"
          name="consent"
          checked={formData.consent}
          onChange={handleChange}
          required
          className="mt-1 w-5 h-5 text-toyama-teal border-gray-300 rounded focus:ring-toyama-teal"
        />
        <label htmlFor="consent" className="text-sm text-gray-700">
          個人情報の取り扱いに同意します <span className="text-red-500">*</span>
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-4 px-6 font-bold rounded-lg transition-colors ${
          isSubmitting
            ? 'bg-gray-400 text-gray-200 cursor-not-allowed'
            : 'bg-toyama-yellow text-toyama-dark hover:bg-toyama-yellow/90'
        }`}
      >
        {isSubmitting ? '送信中...' : '申し込む'}
      </button>

      <p className="text-sm text-gray-600 text-center">
        送信先: <a href="mailto:toyamaryuhonnbu@gmail.com" className="text-toyama-teal hover:text-toyama-dark">toyamaryuhonnbu@gmail.com</a>
      </p>
    </form>
  );
}
