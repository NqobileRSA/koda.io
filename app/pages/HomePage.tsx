import Image from 'next/image';
import Link from 'next/link';
import {
  IoHomeOutline,
  IoLaptopOutline,
  IoChatboxEllipsesOutline,
} from 'react-icons/io5';

const HeroSection: React.FC = () => {
  return (
    <section className="mx-[50px] grid lg:grid-cols-2 place-items-center pt-16 pb-8 md:pt-12 md:pb-24">
      <div className="py-6 md:order-1">
        <Image
          src={'/programming.svg'}
          alt=""
          width={600}
          height={400}
          priority
        />
      </div>
      <div>
        <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold lg:tracking-tight xl:tracking-tighter">
          Building Bridges to Your Online Success
        </h1>
        <p className="text-lg mt-4 text-slate-600 max-w-xl">
          At koda.io, we craft custom digital solutions to help small businesses
          and non-profit organizations thrive online.
        </p>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Link
            href="#"
            target="_blank"
            rel="noopener"
            className="flex gap-1 items-center justify-center bg-black text-white px-6 py-3 rounded-md hover:bg-gray-800"
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
            className="flex gap-1 items-center justify-center border border-black text-black px-6 py-3 rounded-md hover:bg-gray-100"
          >
            <IoLaptopOutline className="w-6 h-6" name="bx:bxl-github" />
            Explore Our Work
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
