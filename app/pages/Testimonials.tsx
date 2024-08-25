'use client';
import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  image: string;
  stars: number;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Saul Goodman',
    position: 'Ceo & Founder',
    image: '/programming.svg',
    stars: 5,
    quote:
      'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.',
  },
  {
    id: 2,
    name: 'Sara Wilsson',
    position: 'Designer',
    image: '/programming.svg',
    stars: 5,
    quote:
      'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.',
  },
  {
    id: 2,
    name: 'Sara Wilsson',
    position: 'Designer',
    image: '/programming.svg',
    stars: 5,
    quote:
      'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.',
  },
  {
    id: 2,
    name: 'Sara Wilsson',
    position: 'Designer',
    image: '/programming.svg',
    stars: 5,
    quote:
      'Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.',
  },
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="bg-[#f4fafd] py-16">
      <div className=" mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 relative inline-block">
            Testimonials
          </h2>
          <p className="text-gray-600">See what our client`s say about us.</p>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1200: {
              slidesPerView: 2.5,
              spaceBetween: 10,
            },
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="bg-white rounded-lg shadow-md p-8 ml-5 relative max-w-[480px]">
                <div className="flex justify-between">
                  <div className="">
                    <h3 className="text-xl font-bold mb-1">
                      {testimonial.name}
                    </h3>
                    <h4 className="text-sm text-gray-500 mb-2">
                      {testimonial.position}
                    </h4>
                  </div>
                  <div>
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={70}
                      height={70}
                      className=" bg-gray-300 rounded-lg border-6 border-[#f4fafd]"
                    />
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.stars)].map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-yellow-400"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 italic">
                  <span className="text-4xl text-[#3498db] opacity-40">
                    &ldquo;
                  </span>
                  {testimonial.quote}
                  <span className="text-4xl text-[#3498db] opacity-40">
                    &rdquo;
                  </span>
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default TestimonialsSection;
