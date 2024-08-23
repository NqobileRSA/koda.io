import Navbar from '@/components/ui/Navbar/Navbar';
import HomePage from '@/app/pages/HomePage';
import FeaturesSection from './pages/FeaturesSection';
import AboutPage from './pages/AboutPage';

export default function Home() {
  return (
    <>
      <Navbar />
      <HomePage />
      <FeaturesSection />
      <AboutPage />
    </>
  );
}
