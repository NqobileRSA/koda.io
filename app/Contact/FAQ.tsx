import React from 'react';

interface FAQItem {
  category: string;
  questions: {
    question: string;
    answer: string;
  }[];
}

const faqs: FAQItem[] = [
  {
    category: 'Technical',
    questions: [
      {
        question: 'What might be your first question?',
        answer:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      },
      {
        question: 'What might be your second question?',
        answer:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      },
      {
        question: 'What might be your third question?',
        answer:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      },
    ],
  },
  {
    category: 'Billing',
    questions: [
      {
        question: 'What might be your first billing question?',
        answer:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      },
      {
        question: 'What might be your second billing question?',
        answer:
          'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.',
      },
    ],
  },
];

const FAQ: React.FC = () => {
  return (
    <div className="py-4 max-w-screen-lg mx-auto">
      <div className="text-center mb-16">
        <p className="mt-4 text-sm leading-7 text-gray-500 font-regular">
          F.A.Q
        </p>
        <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
          Frequently Asked <span className="text-indigo-600">Questions</span>
        </h3>
      </div>

      {faqs.map((faqItem, index) => (
        <div key={index} className="px-10 sm:px-16 sm:flex items-start mb-10">
          <h3 className="py-3 font-bold text-lg text-gray-900 w-3/12">
            {faqItem.category}
          </h3>
          <div className="w-9/12">
            {faqItem.questions.map((item, qIndex) => (
              <div key={qIndex} className="flex items-start mb-8">
                <div className="hidden sm:flex items-center justify-center p-3 mr-3 rounded-full bg-indigo-500 text-white border-4 border-white text-xl font-semibold">
                  <svg
                    width="24px"
                    fill="white"
                    height="24px"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g data-name="Layer 2">
                      <g data-name="menu-arrow">
                        <rect
                          width="24"
                          height="24"
                          transform="rotate(180 12 12)"
                          opacity="0"
                        ></rect>
                        <path d="M17 9A5 5 0 0 0 7 9a1 1 0 0 0 2 0 3 3 0 1 1 3 3 1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-1.1A5 5 0 0 0 17 9z"></path>
                        <circle cx="12" cy="19" r="1"></circle>
                      </g>
                    </g>
                  </svg>
                </div>
                <div className="text-md">
                  <h1 className="text-gray-900 font-semibold mb-2">
                    {item.question}
                  </h1>
                  <p className="text-gray-500 text-sm">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
