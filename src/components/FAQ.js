'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqs = [
    {
      question: "Who can participate in Patent-a-thon 1.0?",
      answer: "All undergraduate and graduate students from recognized universities and colleges can participate."
    },
    {
      question: "What is the team size limit?",
      answer: "Teams can have 2-4 members. Solo participation is also allowed."
    },
    {
      question: "Do I need prior patent experience?",
      answer: "No prior patent experience required. We'll provide workshops and mentorship on patent filing."
    },
    {
      question: "What should I bring to the event?",
      answer: "Bring your laptop, chargers, and any hardware you might need. Food and refreshments will be provided."
    },
    {
      question: "How will intellectual property be handled?",
      answer: "Participants retain full ownership of their innovations. We provide guidance on patent protection."
    },
    {
      question: "Is there any registration fee?",
      answer: "No, the event is completely free for all participants."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-900">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-green-400 transition-all duration-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left bg-transparent hover:bg-gray-800/30 transition-colors duration-200 flex items-center justify-between"
              >
                <span className="font-semibold text-white pr-4">
                  {faq.question}
                </span>
                {openFAQ === index ? (
                  <ChevronUp className="w-5 h-5 text-green-400 flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openFAQ === index && (
                <div className="px-8 py-6 bg-gray-800/30 border-t border-gray-700">
                  <p className="text-gray-300 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
