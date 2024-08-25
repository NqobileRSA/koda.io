import React from 'react';
import Image from 'next/image';
import { Check } from 'lucide-react';

const WhoWeAre: React.FC = () => {
  return (
    <section id="about" className="about section">
      <div className="container mx-auto sm:px-4">
        <div className="flex flex-wrap  gy-4">
          <div className="lg:w-1/2 pr-4 pl-4 content">
            <p className="who-we-are">Who We Are</p>
            <h3>Unleashing Potential with Creative Strategy</h3>
            <p className="fst-italic">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <ul>
              <li>
                <i className="bi bi-check-circle" />
                <span>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </span>
              </li>
              <li>
                <i className="bi bi-check-circle" />
                <span>
                  Duis aute irure dolor in reprehenderit in voluptate velit.
                </span>
              </li>
              <li>
                <i className="bi bi-check-circle" />
                <span>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                  aute irure dolor in reprehenderit in voluptate trideta
                  storacalaperda mastiro dolore eu fugiat nulla pariatur.
                </span>
              </li>
            </ul>
          </div>
          <div className="lg:w-1/2 pr-4 pl-4 about-images ">
            <div className="flex flex-wrap  gy-4">
              <div className="lg:w-1/2 pr-4 pl-4">
                <img src="/about.jpg" className="max-w-full h-auto" alt />
              </div>
              <div className="lg:w-1/2 pr-4 pl-4">
                <div className="flex flex-wrap  gy-4">
                  <div className="lg:w-full pr-4 pl-4">
                    <img src="/about.jpg" className="max-w-full h-auto" alt />
                  </div>
                  <div className="lg:w-full pr-4 pl-4">
                    <img src="/about.jpg" className="max-w-full h-auto" alt />
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

export default WhoWeAre;
