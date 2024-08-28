'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  IoApps,
  IoTrendingUpSharp,
  IoShuffle,
  IoOptionsSharp,
  IoSpeedometerSharp,
  IoChatboxEllipsesSharp,
} from 'react-icons/io5';
import { FaCodeMerge } from 'react-icons/fa6';

interface FeatureItem {
  title: string;
  description: string;
  details: string[];
  icon: React.ReactElement;
}

const features: FeatureItem[] = [
  {
    title: 'Custom Web Development',
    description:
      'We craft custom web solutions tailored to your specific needs.',
    details: [
      'Responsive design for all devices',
      'Integration with third-party APIs',
      'Custom CMS development',
      'E-commerce functionality',
      'Progressive Web App (PWA) development',
    ],
    icon: <IoOptionsSharp size={30} />,
  },
  {
    title: 'SEO Optimization',
    description:
      'We optimize your website for search engines to rank higher in search results.',
    details: [
      'Keyword research and optimization',
      'On-page SEO improvements',
      'Technical SEO audits',
      'Content strategy development',
      'Local SEO optimization',
    ],
    icon: <IoTrendingUpSharp size={30} />,
  },
  {
    title: 'User-Centric Design',
    description:
      'We create intuitive and visually appealing interfaces for a seamless user experience.',
    details: [
      'User research and persona development',
      'Wireframing and prototyping',
      'UI/UX design',
      'Accessibility compliance',
      'User testing and iterative design',
    ],
    icon: <IoShuffle size={30} />,
  },
  {
    title: 'Website Upgrade',
    description:
      'We can upgrade your website to improve its performance and user experience.',
    details: [
      'Performance optimization',
      'Mobile responsiveness',
      'Security enhancements',
      'CMS upgrades',
      'Third-party integrations',
    ],
    icon: <IoSpeedometerSharp size={30} />,
  },
  {
    title: 'Technology Migration',
    description:
      'We can help you migrate your website to a new technology stack.',
    details: [
      'Data migration',
      'Platform transition (e.g., WordPress to Headless CMS)',
      'Cloud migration',
      'Legacy system modernization',
      'Performance tuning post-migration',
    ],
    icon: <FaCodeMerge size={30} />,
  },
  {
    title: 'Chatbot Integration',
    description: 'We can help you integrate your chatbot into your website.',
    details: [
      'Custom chatbot development',
      'AI-powered conversation flows',
      'Integration with customer support systems',
      'Multi-language support',
      'Analytics and performance tracking',
    ],
    icon: <IoChatboxEllipsesSharp size={30} />,
  },
];

const Details: React.FC = () => {
  const [activeService, setActiveService] = useState(0);

  return (
    <section className="py-16 bg-white text-gray-700">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
            {/* Services List */}
            <div className="bg-white shadow-md p-6 mb-8">
              <h4 className="text-xl font-bold mb-4 pb-4 border-b border-gray-200">
                Services List
              </h4>
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <a
                    href="#details"
                    key={index}
                    onClick={() => setActiveService(index)}
                    className={`w-full flex items-center p-3 transition ${
                      index === activeService
                        ? 'bg-blue-500 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-blue-100'
                    }`}
                  >
                    <i
                      className={`mr-2 ${
                        index === activeService ? 'text-white' : 'text-blue-500'
                      }`}
                    >
                      {feature.icon}
                    </i>
                    <span>{feature.title}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/3 px-4" id="details">
            {/* <Image
                src="/assets/img/services.jpg"
                alt="Our Services"
                width={800}
                height={400}
                className="w-full h-auto mb-6"
              /> */}
            <h3 className="text-2xl font-bold mb-4">
              Comprehensive Web Solutions for Your Business
            </h3>
            <p className="mb-4">
              At our company, we offer a wide range of web services designed to
              help your business thrive in the digital world. From custom web
              development to SEO optimization, we have the expertise to take
              your online presence to the next level.
            </p>
            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-2 flex items-center">
                <i className="text-blue-500 mr-2">
                  {features[activeService].icon}
                </i>
                <span>{features[activeService].title}</span>
              </h4>
              <p className="mb-2">{features[activeService].description}</p>
              <ul className="list-disc pl-6">
                {features[activeService].details.map((detail, detailIndex) => (
                  <li key={detailIndex}>{detail}</li>
                ))}
              </ul>
            </div>
            <p className="mb-4">
              Our team of experienced professionals is committed to delivering
              high-quality solutions that meet your specific needs and exceed
              your expectations.
            </p>
            <p>
              Whether you&#39;re looking to build a new website from scratch,
              improve your existing site&#39;s performance, or integrate
              advanced features like chatbots, we have the skills and expertise
              to help you achieve your goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
