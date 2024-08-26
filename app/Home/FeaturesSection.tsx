import {
  IoApps,
  IoTrendingUpSharp,
  IoShuffle,
  IoOptionsSharp,
  IoSpeedometerSharp,
  IoChatboxEllipsesSharp,
} from 'react-icons/io5';
import { FaCodeMerge } from 'react-icons/fa6';
import Link from 'next/link';

interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactElement;
}

const features: FeatureItem[] = [
  {
    title: 'Custom Web Development',
    description:
      'We can craft custom web solutions tailored to your specific needs.',
    icon: <IoOptionsSharp size={30} />,
  },
  {
    title: 'SEO Optimization',
    description:
      'We optimize your website for search engines to rank higher in search results.',
    icon: <IoTrendingUpSharp size={30} />,
  },
  {
    title: 'User-Centric Design',
    description:
      'We create intuitive and visually appealing interfaces for a seamless user experience.',
    icon: <IoShuffle size={30} />,
  },
  {
    title: 'Website Upgrade',
    description:
      'We can upgrade your website to improve its performance and user experience.',
    icon: <IoSpeedometerSharp size={30} />,
  },
  {
    title: 'Technology immigration',
    description:
      'We can help you migrate your website to a new technology stack.',
    icon: <FaCodeMerge size={30} />,
  },
  {
    title: 'Chatbot intergration',
    description: 'We can help you integrate your chatbot into your website.',
    icon: <IoChatboxEllipsesSharp size={30} />,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <section className="pt-16 md:mt-0 px-[50px] pb-[100px] relative">
      <div className="absolute left-0 inset-0 -z-10 h-full w-screen bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      <h2 className="text-4xl lg:text-5xl font-bold lg:tracking-tight">
        Our web solutions
      </h2>
      <p className="text-lg mt-4 text-slate-600">
        See how we can help your business grow.
      </p>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 mt-16 gap-16">
        {features.map((item) => (
          <div key={item.title} className="flex gap-4 items-start">
            <div className="bg-gray-900 text-white rounded-full p-2 shrink-0">
              {item.icon}
            </div>
            <div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-slate-500 mt-2 leading-relaxed">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <Link href="/Services" className=" ">
        <div className=" w-[250px] p-3 flex items-center justify-center border border-white text-white bg-black text-bold mt-5 gap-2 rounded-md hover:bg-white hover:text-black">
          <span className="">Learn More</span>
          <svg
            className="w-4"
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </Link>
    </section>
  );
};

export default FeaturesSection;
