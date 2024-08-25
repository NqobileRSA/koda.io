import Navbar from '@/components/ui/Navbar/Navbar';
import HomePage from '@/app/pages/HomePage';
import FeaturesSection from './pages/FeaturesSection';
import AboutPage from './pages/AboutPage';
import Testimonials from './pages/Testimonials';
import Footer from '@/components/ui/Footer/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <HomePage />
      <FeaturesSection />
      <AboutPage />
      <Testimonials />
      <Footer />
    </>
  );
}
