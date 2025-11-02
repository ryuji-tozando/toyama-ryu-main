import { Shield, Target, Users, BookOpen } from 'lucide-react';

const principles = [
  {
    icon: Shield,
    title: '誰でも始められる',
    description: '子供から80代まで、年齢・性別・体力を問わず参加可能。初心者には基礎から丁寧に指導します。',
  },
  {
    icon: Target,
    title: '奥深く極められる',
    description: '陸軍戸山学校を源流とする伝統の技は、生涯をかけて追求できる深さがあります。',
  },
  {
    icon: Users,
    title: '仲間と成長できる',
    description: '世界40カ国以上の会員と繋がり、年齢や国境を越えた交流が生まれます。',
  },
  {
    icon: BookOpen,
    title: '続けやすい環境',
    description: '体系的なカリキュラムと、あなたのペースに合わせた丁寧な指導で、無理なく続けられます。',
  },
];

const timeline = [
  { year: '1925年', event: '陸軍戸山学校にて、軍刀術として体系化' },
  { year: '1945年', event: '終戦後、民間武道として継承が開始' },
  { year: '1970年', event: '全日本戸山流居合道連盟設立' },
  { year: '1990年代', event: '海外への普及が本格化' },
  { year: '現在', event: '世界40カ国以上で稽古が行われる' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-toyama-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-toyama-dark mb-6">
            戸山流とは
          </h2>
          <div className="w-24 h-1 bg-toyama-orange mx-auto mb-8" />
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            年齢や経験は関係ありません。
            <br />
            初心者から達人まで、共に学び、共に成長する場所です。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
          {principles.map((principle) => (
            <div
              key={principle.title}
              className="bg-white p-8 rounded-sm shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
            >
              <div className="bg-toyama-dark p-4 rounded-sm inline-block mb-6 group-hover:bg-toyama-teal transition-colors duration-300">
                <principle.icon className="w-8 h-8 text-toyama-yellow" />
              </div>
              <h3 className="text-2xl font-bold text-toyama-dark mb-4">
                {principle.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {principle.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-sm shadow-xl p-8 md:p-12">
          <h3 className="text-4xl font-bold text-toyama-dark mb-12 text-center">
            歴史の系譜
          </h3>
          <div className="space-y-8">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="flex items-start space-x-6 group"
              >
                <div className="flex-shrink-0 w-32">
                  <span className="inline-block bg-toyama-orange text-white px-4 py-2 rounded font-sans font-bold text-sm tracking-wide group-hover:bg-toyama-yellow transition-colors duration-300">
                    {item.year}
                  </span>
                </div>
                <div className="flex-1 border-l-4 border-toyama-teal/30 pl-6 pb-8 group-hover:border-toyama-teal transition-colors duration-300">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    {item.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 bg-toyama-dark rounded-sm p-8 md:p-12 text-center">
          <p className="text-2xl md:text-3xl text-white leading-relaxed font-light">
            「まずは気軽に、一歩踏み出してみませんか。
            <br />
            <span className="text-toyama-yellow font-normal">あなたの旅を、私たちが支えます。</span>」
          </p>
        </div>
      </div>
    </section>
  );
}
