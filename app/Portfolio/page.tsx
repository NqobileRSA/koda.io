import Banner from '@/components/ui/Banner/Banner';
import Footer from '@/components/ui/Footer/Footer';
import Navbar from '@/components/ui/Navbar/Navbar';
import React from 'react';
import Portfolio from './Portfolio';

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <Navbar />
      <Banner title="Portfolio" />
      <Portfolio />
      <Footer />
    </>
  );
};

export default page;
