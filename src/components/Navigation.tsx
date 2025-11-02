import { Menu, X, Sword } from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { label: '戸山流とは', href: '#about' },
  { label: '稽古内容', href: '#training' },
  { label: '道場案内', href: '#locations' },
  { label: 'グローバル', href: '#global' },
  { label: '入門案内', href: '#join' },
  { label: 'お問い合わせ', href: '#contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-toyama-dark/95 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-3">
            <Sword className="w-8 h-8 text-toyama-yellow" />
            <div className="flex flex-col">
              <span className="text-white font-bold text-xl tracking-tight">戸山流居合道会</span>
              <span className="text-toyama-yellow/80 text-xs font-sans tracking-widest">TOYAMA-RYU IAIDO</span>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 text-white/90 hover:text-toyama-yellow font-sans text-sm tracking-wide transition-colors duration-200 hover:bg-white/5 rounded"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white hover:text-toyama-yellow transition-colors"
            aria-label="メニュー"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-toyama-dark/98 border-t border-white/10">
          <div className="px-4 py-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-3 text-white/90 hover:text-toyama-yellow hover:bg-white/5 rounded transition-colors"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
