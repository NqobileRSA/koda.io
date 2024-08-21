import {
  IoApps,
  IoDocumentText,
  IoShuffle,
  IoLink,
  IoCaretDown,
  IoPeople,
} from 'react-icons/io5';

interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactElement;
}

const features: FeatureItem[] = [
  {
    title: 'Custom Web Development',
    description:
      'We craft tailored digital solutions to help small businesses thrive online.',
    icon: <IoApps size={30} />,
  },
  {
    title: 'SEO Optimization',
    description:
      'Our expertise ensures your website ranks higher and attracts more customers.',
    icon: <IoDocumentText size={30} />,
  },
  {
    title: 'User-Centric Design',
    description:
      'We create intuitive and visually appealing interfaces for a seamless user experience.',
    icon: <IoShuffle size={30} />,
  },
  {
    title: 'Technology Partnerships',
    description:
      'We collaborate with leading tech companies to bring innovative solutions to our clients.',
    icon: <IoLink size={30} />,
  },
  {
    title: 'Growth-Driven Approach',
    description:
      'Our goal is to help small businesses grow and succeed in the online landscape.',
    icon: <IoCaretDown size={30} />,
  },
  {
    title: 'Community Support',
    description:
      'We believe in empowering small businesses and supporting the local community.',
    icon: <IoPeople size={30} />,
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <div className="mt-16 md:mt-0 mx-[50px]">
      <h2 className="text-4xl lg:text-5xl font-bold lg:tracking-tight">
        Expert Web Development Solutions
      </h2>
      <p className="text-lg mt-4 text-slate-600">
        At koda.io, we`re dedicated to helping small businesses succeed online.
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
    </div>
  );
};

export default FeaturesSection;
