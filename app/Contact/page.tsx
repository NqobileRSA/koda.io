import Banner from '@/components/ui/Banner/Banner';
import Navbar from '@/components/ui/Navbar/Navbar';
import React from 'react';
import Contact from './Contact';
import Footer from '@/components/ui/Footer/Footer';
import FAQ from './FAQ';

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <Navbar />
      <Banner title="Get in touch" />
      <Contact />
      <FAQ />
      <Footer />
    </>
  );
};

export default page;
