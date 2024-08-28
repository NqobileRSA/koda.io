'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import PortfolioDetails from '@/components/ui/PortfolioDetails/PortfolioDetails';

type PortfolioItem = {
  id: number;
  category: string;
  imageUrl: string;
  title: string;
  description: string;
  client: string;
  projectDate: string;
  projectUrl: string;
};

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    category: 'App',
    imageUrl: 'https://via.placeholder.com/400x300',
    title: 'App 1',
    description: 'This is a description for App 1',
    client: 'Client A',
    projectDate: '2024-01-01',
    projectUrl: 'https://example.com/app1',
  },
  {
    id: 2,
    category: 'Website',
    imageUrl: 'https://via.placeholder.com/400x300',
    title: 'App 1',
    description: 'This is a description for App 1',
    client: 'Client A',
    projectDate: '2024-01-01',
    projectUrl: 'https://example.com/app1',
  },
  {
    id: 3,
    category: 'Website',
    imageUrl: 'https://via.placeholder.com/400x300',
    title: 'App 1',
    description: 'This is a description for App 1',
    client: 'Client A',
    projectDate: '2024-01-01',
    projectUrl: 'https://example.com/app1',
  },
];

const Portfolio: React.FC = () => {
  const [filter, setFilter] = useState('*');
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);

  const filteredItems =
    filter === '*'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === filter);

  const handleItemClick = (item: PortfolioItem) => {
    setSelectedItem(item);
  };

  const handleBackToPortfolio = () => {
    setSelectedItem(null);
  };

  if (selectedItem) {
    return (
      <PortfolioDetails
        title={selectedItem.title}
        description={selectedItem.description}
        images={[selectedItem.imageUrl]} // You might want to add more images for each item
        category={selectedItem.category}
        client={selectedItem.client}
        projectDate={selectedItem.projectDate}
        projectUrl={selectedItem.projectUrl}
        // onBack={handleBackToPortfolio}
      />
    );
  }

  return (
    <section id="portfolio" className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl font-light text-gray-700 mb-4">Portfolio</h2>
          <p className="text-gray-600">
            Necessitatibus eius consequatur ex aliquid fuga eum quidem sint
            consectetur velit
          </p>
        </div>

        <ul
          className="flex flex-wrap justify-center mb-8"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          {['*', 'App', 'Website', 'branding'].map((category) => (
            <li
              key={category}
              onClick={() => setFilter(category)}
              className={`cursor-pointer px-4 py-2 text-lg ${
                filter === category ? 'text-blue-500' : 'text-gray-700'
              } hover:text-blue-500 transition-colors`}
            >
              {category === '*'
                ? 'All'
                : category.charAt(0).toUpperCase() + category.slice(1)}
            </li>
          ))}
        </ul>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer"
              onClick={() => handleItemClick(item)}
            >
              <Image
                src={item.imageUrl}
                alt={item.title}
                width={400}
                height={300}
                className="w-full h-auto transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <span className="text-2xl">{item.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
