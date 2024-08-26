import Navbar from '@/components/ui/Navbar/Navbar';
import HomePage from '@/app/Home/HomePage';
import FeaturesSection from './Home/FeaturesSection';
import AboutPage from './Home/AboutPage';
import Testimonials from './Home/Testimonials';
import Footer from '@/components/ui/Footer/Footer';
import Roadmap from './Home/Roadmap';
import WhyWebsite from './Home/WhyWebsite';
import BreadCrumbs from '@/components/ui/BreadCrumbs/BreadCrumbs';

export default function Home() {
  return (
    <>
      <Navbar />
      <HomePage />
      <FeaturesSection />
      <AboutPage />
      <WhyWebsite />
      <Roadmap />
      <Testimonials />
      <Footer />
    </>
  );
}
