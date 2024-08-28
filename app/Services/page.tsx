import Banner from '@/components/ui/Banner/Banner';
import Footer from '@/components/ui/Footer/Footer';
import Navbar from '@/components/ui/Navbar/Navbar';
import React from 'react';
import Details from './Details';
import Pricing from './Pricing';

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <Navbar />
      <Banner title="Our Services" />
      <Pricing />
      <Details />
      {/* <ServiceDetails /> */}
      <Footer />
    </>
  );
};

export default page;
