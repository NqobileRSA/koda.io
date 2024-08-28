import BreadCrumbs from '@/components/ui/BreadCrumbs/BreadCrumbs';
import Image from 'next/image';
import Link from 'next/link';
import {
  IoHomeOutline,
  IoLaptopOutline,
  IoChatboxEllipsesOutline,
} from 'react-icons/io5';

const HeroSection: React.FC = () => {
  return (
    <>
      <div className="hero min-h-[95vh] relative flex items-center justify-center ">
        <Image
          src="/laptop.jpg"
          alt="Hero Image"
          width={0}
          height={0}
          layout="fill"
          className="absolute inset-0 w-full h-full object-cover object-center z-1"
        />
        <div className="absolute inset-0 bg-black opacity-50 z-2" />
        <div className="container relative z-3 text-center">
          <h2
            className="text-4xl lg:text-6xl font-bold uppercase mb-4 text-white"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            DESIGN. DEPLOY. GROW.
          </h2>
          <p
            className="text-lg  text-gray-100 mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            We are here to help you build your online presence.
          </p>
          <div
            className="flex mt-4 items-center justify-center gap-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <Link
              href="#"
              target="_blank"
              rel="noopener"
              className="flex gap-1 items-center justify-center bg-black text-white font-500 px-6 py-3 rounded-md hover:invert"
            >
              <IoChatboxEllipsesOutline
                className="w-6 h-6"
                name="bx:bxs-cloud-download"
              />
              Let`s Build Together
            </Link>
            <Link
              href="#"
              target="_blank"
              rel="noopener"
              className="flex gap-1 items-center justify-center border border-white bg-white text-black px-6 py-3 rounded-md hover:bg-none hover:invert"
            >
              <IoLaptopOutline className="w-6 h-6" name="bx:bxl-github" />
              Explore Our Work
            </Link>
          </div>
        </div>
      </div>
      <BreadCrumbs page="Home" />
    </>
  );
};

export default HeroSection;
