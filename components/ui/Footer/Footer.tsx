import React from 'react';
import Link from 'next/link';
import {
  TwitterIcon,
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-gray-600 p-[50px]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="text-2xl font-bold text-gray-800">
              Koda.io
            </Link>
            <div className="mt-4">
              <p>Johannesburg</p>
              <p>GP, South Africa</p>
              <p className="mt-3">
                <strong>Phone:</strong> <span>+27 61 818 7972</span>
              </p>
              <p>
                <strong>Email:</strong> <span>Koda.io@gmail.com</span>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Useful Links</h4>
            <ul className="space-y-2">
              {['Home', 'About us', 'Services', 'Terms of service'].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="hover:text-blue-500 transition duration-300"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2">
              {[
                'Web Design',
                'Web Development',
                'Product Management',
                'Marketing',
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="hover:text-blue-500 transition duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <p className="mb-4">See our socials</p>
            <div className="flex space-x-4">
              {[TwitterIcon, FacebookIcon, InstagramIcon, LinkedinIcon].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-gray-400 hover:text-blue-500 transition duration-300"
                  >
                    <Icon size={24} />
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>
            © <span>Copyright</span> <strong className="px-1">Koda.io</strong>{' '}
            <span>All Rights Reserved</span>
          </p>
          <div className="mt-2 text-sm">
            Designed by{' '}
            <a href="@" className="text-blue-500 hover:underline">
              NqobileNgobeni
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
