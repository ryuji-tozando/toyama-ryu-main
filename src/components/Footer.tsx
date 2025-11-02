import { Sword, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-toyama-dark text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Sword className="w-10 h-10 text-toyama-yellow" />
              <div>
                <h3 className="text-2xl font-bold">戸山流居合道会</h3>
                <p className="text-toyama-yellow/80 text-sm font-sans tracking-widest">TOYAMA-RYU IAIDO</p>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed mb-4">
              特定非営利活動法人 戸山流居合道会本部。京都府京田辺市を発祥の地とし、陸軍戸山学校を源流とする実戦的居合の真髄を追求する武道団体です。
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-toyama-yellow">リンク</h4>
            <ul className="space-y-2 text-white/70">
              <li><Link to="/about" className="hover:text-toyama-yellow transition-colors">戸山流とは</Link></li>
              <li><Link to="/training" className="hover:text-toyama-yellow transition-colors">稽古・技法</Link></li>
              <li><Link to="/dojos" className="hover:text-toyama-yellow transition-colors">道場・支部</Link></li>
              <li><Link to="/join" className="hover:text-toyama-yellow transition-colors">入会案内</Link></li>
              <li><Link to="/reports" className="hover:text-toyama-yellow transition-colors">活動報告</Link></li>
              <li><Link to="/contact" className="hover:text-toyama-yellow transition-colors">お問い合わせ</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4 text-toyama-yellow">お問い合わせ</h4>
            <ul className="space-y-3 text-white/70 font-sans text-sm">
              <li className="flex items-start space-x-2">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a href="mailto:toyamaryuhonnbu@gmail.com" className="hover:text-toyama-yellow transition-colors">
                  toyamaryuhonnbu@gmail.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>京都府京田辺市</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/50 text-sm font-sans">
              &copy; 2025 戸山流居合道会. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm text-white/50 font-sans">
              <a href="#privacy" className="hover:text-toyama-yellow transition-colors">プライバシーポリシー</a>
              <a href="#terms" className="hover:text-toyama-yellow transition-colors">利用規約</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
