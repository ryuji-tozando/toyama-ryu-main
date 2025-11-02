import { Heart, Users as Users2, TrendingUp, Calendar } from 'lucide-react';

const welcomePoints = [
  {
    icon: Heart,
    title: '初心者大歓迎',
    description: '経験ゼロから始める方がほとんど。基礎から丁寧に指導します。',
  },
  {
    icon: Users2,
    title: '幅広い年齢層',
    description: '小学生からシニアまで、様々な世代が共に学んでいます。',
  },
  {
    icon: TrendingUp,
    title: '自分のペースで',
    description: '週1回から無理なく。ライフスタイルに合わせて続けられます。',
  },
  {
    icon: Calendar,
    title: '見学・体験歓迎',
    description: 'まずは雰囲気を感じてください。体験稽古も随時受付中。',
  },
];

const ageGroups = [
  { range: '小中学生', count: '50+', description: '礼儀と集中力を育む' },
  { range: '20-40代', count: '200+', description: '心身の鍛錬と自己研鑽' },
  { range: '50-60代', count: '150+', description: '生涯学習としての武道' },
  { range: '70代以上', count: '30+', description: '健康維持と仲間づくり' },
];

export default function WelcomeSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-toyama-dark mb-6">
            あなたも今日から始められます
          </h2>
          <div className="w-24 h-1 bg-toyama-orange mx-auto mb-8" />
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            「自分には難しいかも...」そんな不安は必要ありません。
            <br />
            戸山流は、誰もが気軽に始められ、深く学べる居合道です。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {welcomePoints.map((point) => (
            <div
              key={point.title}
              className="bg-toyama-base p-6 rounded-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-white p-3 rounded-sm inline-block mb-4 shadow-md">
                <point.icon className="w-6 h-6 text-toyama-teal" />
              </div>
              <h3 className="text-lg font-bold text-toyama-dark mb-2">
                {point.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-toyama-teal to-toyama-dark rounded-sm p-8 md:p-12 mb-16">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            様々な年代の方が活動しています
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {ageGroups.map((group) => (
              <div
                key={group.range}
                className="text-center bg-white/10 backdrop-blur-sm p-6 rounded-sm hover:bg-white/20 transition-colors duration-300"
              >
                <div className="text-4xl font-bold text-toyama-yellow mb-2">
                  {group.count}
                </div>
                <div className="text-xl font-bold text-white mb-2">
                  {group.range}
                </div>
                <div className="text-sm text-white/80 font-sans">
                  {group.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-toyama-base rounded-sm p-8 md:p-12">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-toyama-dark mb-8 text-center">
              よくあるご質問
            </h3>
            <div className="space-y-6">
              {[
                {
                  q: '全くの初心者ですが大丈夫ですか？',
                  a: 'はい、大丈夫です。会員の約70%が未経験からスタートしています。基礎から丁寧に指導しますので、安心してご参加ください。',
                },
                {
                  q: '体力に自信がないのですが...',
                  a: '居合道は激しい運動ではなく、正確な動作と集中力を養う武道です。ご自身のペースで無理なく続けられます。',
                },
                {
                  q: '週に何回くらい稽古すればいいですか？',
                  a: '週1回から参加できます。多くの会員は週1〜2回のペースで、仕事や家庭と両立しながら続けています。',
                },
                {
                  q: '何歳まで続けられますか？',
                  a: '年齢制限はありません。80代で現役の会員もいらっしゃいます。生涯を通じて学び続けられる武道です。',
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-sm shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <h4 className="text-lg font-bold text-toyama-dark mb-3 flex items-start">
                    <span className="text-toyama-orange mr-2">Q.</span>
                    {faq.q}
                  </h4>
                  <p className="text-gray-700 leading-relaxed pl-6">
                    <span className="text-toyama-teal font-bold mr-2">A.</span>
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <button className="group relative px-12 py-5 bg-toyama-orange text-white font-sans font-bold text-xl tracking-wide overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl rounded-sm">
            <span className="relative z-10">まずは見学・体験から始める</span>
            <div className="absolute inset-0 bg-toyama-yellow transform translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
          </button>
          <p className="mt-6 text-gray-600 font-sans">
            お電話・メールでお気軽にお問い合わせください
          </p>
        </div>
      </div>
    </section>
  );
}
