import Navbar from '@/components/ui/Navbar/Navbar';
import HomePage from '@/app/pages/HomePage';
import FeaturesSection from './pages/FeaturesSection';

export default function Home() {
  return (
    <>
      <Navbar />
      <HomePage />
      <FeaturesSection />
    </>
  );
}
