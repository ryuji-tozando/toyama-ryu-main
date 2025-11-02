import { Outlet } from 'react-router-dom';
import { Menu, X, Sword } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { routes } from '../routes/AppRouter';
import Footer from '../components/Footer';

export default function MainLayout() {
  const [isOpen, setIsOpen] = useState(false);

  // English route を除外したナビゲーション用routes
  const navRoutes = routes.filter(route => route.path !== '/en/*');

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header / Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-toyama-dark/95 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link to="/" className="flex items-center space-x-3">
              <Sword className="w-8 h-8 text-toyama-yellow" />
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl tracking-tight">戸山流居合道会</span>
                <span className="text-toyama-yellow/80 text-xs font-sans tracking-widest">TOYAMA-RYU IAIDO</span>
              </div>
            </Link>

            <div className="hidden lg:flex items-center space-x-1">
              {navRoutes.map((route) => (
                <Link
                  key={route.path}
                  to={route.path}
                  className="px-4 py-2 text-white/90 hover:text-toyama-yellow font-sans text-sm tracking-wide transition-colors duration-200 hover:bg-white/5 rounded"
                >
                  {route.label}
                </Link>
              ))}
              <Link
                to="/en"
                className="ml-4 px-4 py-2 bg-toyama-yellow text-toyama-dark font-sans text-sm font-bold tracking-wide rounded hover:bg-toyama-yellow/90 transition-colors"
              >
                EN
              </Link>
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
              {navRoutes.map((route) => (
                <Link
                  key={route.path}
                  to={route.path}
                  className="block px-4 py-3 text-white/90 hover:text-toyama-yellow hover:bg-white/5 rounded transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {route.label}
                </Link>
              ))}
              <Link
                to="/en"
                className="block px-4 py-3 bg-toyama-yellow text-toyama-dark font-bold rounded hover:bg-toyama-yellow/90 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                English
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-1 pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
