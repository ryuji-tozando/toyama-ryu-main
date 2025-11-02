import { Routes, Route } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import TrainingPage from '../pages/TrainingPage';
import DojosPage from '../pages/DojosPage';
import JoinPage from '../pages/JoinPage';
import ReportsPage from '../pages/ReportsPage';
import ContactPage from '../pages/ContactPage';
import EnglishPage from '../pages/EnglishPage';

export const routes = [
  { path: '/', label: 'ホーム', element: <HomePage /> },
  { path: '/about', label: '戸山流とは', element: <AboutPage /> },
  { path: '/training', label: '稽古・技法', element: <TrainingPage /> },
  { path: '/dojos', label: '道場・支部', element: <DojosPage /> },
  { path: '/join', label: '入会案内', element: <JoinPage /> },
  { path: '/reports', label: '活動報告', element: <ReportsPage /> },
  { path: '/contact', label: 'お問い合わせ', element: <ContactPage /> },
  { path: '/en/*', label: 'English', element: <EnglishPage /> },
];

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Route>
    </Routes>
  );
}
