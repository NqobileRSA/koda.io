import React from 'react';

type Props = {};

const WhyWebsite = (props: Props) => {
  return (
    <section className="overflow-hidden relative h-full w-full ">
      <div className="absolute left-0 inset-0 -z-10 h-full w-screen bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]" />
      <div className="container mx-auto">
        <div className="flex flex-wrap items-center justify-between -mx-4">
          <div className="w-full px-4 lg:w-6/12">
            <div className="flex items-center -mx-3 sm:-mx-4 ">
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="py-3 sm:py-4">
                  <img
                    src="https://i.ibb.co/gFb3ns6/image-1.jpg"
                    alt=""
                    className="w-full object-scale-down rounded-2xl"
                  />
                </div>
                <div className="py-3 sm:py-4">
                  <img
                    src="https://i.ibb.co/rfHFq15/image-2.jpg"
                    alt=""
                    className="w-full object-scale-down rounded-2xl"
                  />
                </div>
              </div>
              <div className="w-full px-3 sm:px-4 xl:w-1/2">
                <div className="relative z-10 my-4">
                  <img
                    src="/onlineKiosk.jpg"
                    alt=""
                    className="w-[600px]  rounded-md h-[500px] object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="w-full px-4 lg:w-1/2 xl:w-5/12 z-[1]">
            <div className="mt-10 lg:mt-0">
              <span className="block mb-4 font-extrabold text-4xl text-black">
                Why You Need a Website
              </span>
              <h2 className="text-gray-700 mb-3 text-lg font-semibold ">
                Clicks to Customers: Your Website, Your Revenue Engine
              </h2>
              <p className="mb-5 text-base text-body-color dark:text-dark-6">
                In today&apos;s digital age, having a website is crucial for any
                business looking to thrive. It&apos;s your 24/7 storefront,
                portfolio, and customer service hub all rolled into one. A
                well-designed website can significantly boost your credibility
                and reach.
              </p>
              <p className="mb-8 text-base text-body-color dark:text-dark-6">
                From increasing visibility to providing valuable insights about
                your customers, a website is an invaluable tool for growth. It
                levels the playing field, allowing small businesses to compete
                with larger corporations and reach a global audience.
              </p>
              <a
                href="javascript:void(0)"
                className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent bg-black rounded-md px-7 bg-primary hover:bg-opacity-90"
              >
                Get Your Website Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWebsite;
