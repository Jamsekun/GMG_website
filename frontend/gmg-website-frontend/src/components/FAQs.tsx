import { useState } from "react";
import FeatherIcon from "feather-icons-react";

const faqs = [
  {
    question: "What makes your coffee special?",
    answer:
      "We source only high-quality beans, roasted to perfection for a rich, smooth flavor. Every cup is brewed fresh to ensure consistency and taste.",
  },
  {
    question: "Do you use eco-friendly car wash methods?",
    answer:
      "Yes. We use water-saving techniques and biodegradable cleaning products to keep your car spotless while caring for the environment.",
  },
  {
    question: "Can I enjoy coffee while waiting for my car wash?",
    answer:
      "Absolutely! Our coffee shop and car wash are designed to complement each other. Relax with a latte or snack while our staff takes care of your vehicle.",
  },
  {
    question: "Do you offer membership or loyalty perks?",
    answer:
      "Yes. With a minimum purchase of PHP 200.00, you can get a free member card that unlocks discounts, exclusive offers, and priority service.",
  },
  {
    question: "Where are you located?",
    answer:
      "We’re conveniently located in Bacoor, Cavite. Our space is designed to be a welcoming community hub where you can recharge and connect.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="min-h-screen bg-[#FFEAD4] px-8 md:px-16 lg:px-32 py-16 text-gray-800 flex flex-col items-center justify-center">
      <h1 className="text-3xl lg:text-4xl font-bold text-center mb-12">
        Frequently Asked <span className="text-amber-600">Questions</span>
      </h1>

      <div className="max-w-3xl mx-auto flex flex-col gap-4 w-full">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left font-semibold text-white hover:text-amber-500 focus:outline-none transition-colors duration-300 bg-secondary-dark"
              >
                {faq.question}
                <FeatherIcon
                  icon="chevron-down"
                  className={`text-amber-500 w-5 h-5 transform transition-transform duration-300 ${
                    isOpen ? "rotate-180" : "rotate-0"
                  }`}
                />
              </button>

              {/* Animated answer */}
              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  isOpen
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-4 text-sm text-gray-700 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default FAQs;
