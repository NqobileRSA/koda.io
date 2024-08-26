import React from 'react';
import WhoWeAre from './WhoWeAre';
import Banner from '@/components/ui/Banner/Banner';
import Navbar from '@/components/ui/Navbar/Navbar';
import Footer from '@/components/ui/Footer/Footer';

const page = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <WhoWeAre />
      <Footer />
    </>
  );
};

export default page;
