import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <section id="about" className=" mt-12 px-10 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="wow fadeInUp">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full px-4 lg:w-1/2">
              <div className="mb-12 max-w-lg lg:mb-0">
                <h3 className="mb-5 text-3xl font-bold leading-tight text-gray-900 dark:text-white">
                  Empowering Small Businesses with Expertise and Innovation
                </h3>
                <p className="mb-10 text-lg leading-relaxed text-gray-700 dark:text-gray-400">
                  At Koda.io, our mission is to empower small business owners to
                  protect and expand their online presence. Our goal is to help
                  you navigate the digital landscape with confidence, ensuring
                  your business thrives.
                </p>

                <Link
                  href="/about"
                  className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-7 py-3 text-base font-medium text-gray-600 transition hover:border-gray-400 hover:bg-gray-100"
                >
                  Learn More About Us
                </Link>
              </div>
            </div>

            <div className="w-full px-4 lg:w-1/2">
              <div className="flex flex-wrap -mx-2 sm:-mx-4 lg:-mx-2 xl:-mx-4">
                <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                  <div className="mb-4 sm:mb-8 h-[400px] relative">
                    <Image
                      src="/business.svg"
                      alt="Empowering small businesses"
                      width={500}
                      height={500}
                      className="h-full w-full object-contain object-center"
                    />
                  </div>
                </div>

                <div className="w-full px-2 sm:w-1/2 sm:px-4 lg:px-2 xl:px-4">
                  <div className="mb-4 sm:mb-8 h-[346px] relative">
                    <Image
                      src="/career.svg"
                      alt="Growing businesses"
                      width={500}
                      height={310}
                      className="h-full w-full object-contain object-center"
                    />
                  </div>

                  <div className="relative z-10 mb-4 flex items-center justify-center overflow-hidden bg-blue-600 px-6 py-12 sm:mb-8 h-[160px]">
                    <div className="text-center">
                      <span className="block text-5xl font-extrabold text-white">
                        03
                      </span>
                      <span className="block text-lg font-semibold text-white">
                        Years of Experience
                      </span>
                      <span className="block text-base font-medium text-white text-opacity-70">
                        Dedicated to Empowering Small Businesses
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
