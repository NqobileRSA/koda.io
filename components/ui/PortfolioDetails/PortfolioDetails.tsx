import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface PortfolioDetailsProps {
  title: string;
  description: string;
  images: string[];
  category: string;
  client: string;
  projectDate: string;
  projectUrl: string;
}

const PortfolioDetails: React.FC<PortfolioDetailsProps> = ({
  title,
  description,
  images,
  category,
  client,
  projectDate,
  projectUrl,
}) => {
  return (
    <main className="bg-white text-gray-800">
      {/* Portfolio Details Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true }}
            className="mb-8"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={image}
                  alt={`Portfolio ${index + 1}`}
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="lg:flex lg:justify-between">
            <div className="lg:w-8/12 mb-8 lg:mb-0">
              <h2 className="text-2xl font-bold mb-4">{title}</h2>
              <p className="mb-4">{description}</p>

              <div className="bg-gray-100 p-6 rounded-lg mb-6">
                <p className="italic mb-4">
                  <span className="text-blue-500 text-2xl">&quot;</span>
                  Export tempor illum tamen malis malis eram quae irure esse
                  labore quem cillum quid cillum eram malis quorum velit fore
                  eram velit sunt aliqua noster fugiat irure amet legam anim
                  culpa.
                  <span className="text-blue-500 text-2xl">&quot;</span>
                </p>
                <div className="flex items-center">
                  <Image
                    src="/assets/img/testimonials/testimonials-2.jpg"
                    alt="Sara Wilsson"
                    width={60}
                    height={60}
                    className="rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-bold">Sara Wilsson</h3>
                    <h4 className="text-gray-600">Designer</h4>
                  </div>
                </div>
              </div>

              <p className="mb-4">
                Impedit ipsum quae et aliquid doloribus et voluptatem quasi.
                Perspiciatis occaecati earum et magnam animi. Quibusdam non qui
                ea vitae suscipit vitae sunt. Repudiandae incidunt cumque minus
                deserunt assumenda tempore. Delectus voluptas necessitatibus
                est.
              </p>
            </div>

            <div className="lg:w-3/12">
              <div className="bg-gray-100 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4 pb-4 border-b border-gray-300 relative">
                  Project information
                  <span className="absolute bottom-0 left-0 w-12 h-1 bg-blue-500"></span>
                </h3>
                <ul className="space-y-4">
                  <li>
                    <strong className="block text-sm text-gray-500 uppercase">
                      Category
                    </strong>
                    {category}
                  </li>
                  <li>
                    <strong className="block text-sm text-gray-500 uppercase">
                      Client
                    </strong>
                    {client}
                  </li>
                  <li>
                    <strong className="block text-sm text-gray-500 uppercase">
                      Project date
                    </strong>
                    {projectDate}
                  </li>
                  <li>
                    <strong className="block text-sm text-gray-500 uppercase">
                      Project URL
                    </strong>
                    <a
                      href={projectUrl}
                      className="text-blue-500 hover:underline"
                    >
                      {projectUrl}
                    </a>
                  </li>
                </ul>
                <a
                  href={projectUrl}
                  className="inline-block mt-6 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default PortfolioDetails;
