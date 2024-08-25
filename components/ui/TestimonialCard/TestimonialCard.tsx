import React from 'react';
import Image from 'next/image';

export type TestimonialProps = {
  name: string;
  position: string;
  image: string;
  rating: number;
  comment: string;
};

const TestimonialCard: React.FC<TestimonialProps> = ({
  name,
  position,
  image,
  rating,
  comment,
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md relative mt-12 mx-4">
      <div className="absolute top-5 left-[-30px] p-2 bg-black">
        <Image
          src={image}
          alt={name}
          width={90}
          height={90}
          className="rounded-lg border-6 border-gray-100"
        />
      </div>
      <h3 className="text-lg font-bold mt-12">{name}</h3>
      <h4 className="text-sm text-gray-600 mb-2">{position}</h4>
      <div className="flex mb-2">
        {[...Array(rating)].map((_, i) => (
          <svg
            key={i}
            className="w-5 h-5 text-yellow-400 fill-current"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      <p className="text-gray-700 italic">
        <span className="text-3xl text-blue-300">&ldquo;</span>
        {comment}
        <span className="text-3xl text-blue-300">&rdquo;</span>
      </p>
    </div>
  );
};

export default TestimonialCard;
