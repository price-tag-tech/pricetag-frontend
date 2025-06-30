import React, { useState } from "react";
import Section from "../components/layout/Section";
import PricingCard from "../components/features/pricing/PricingCard";
import { pricingPlans, Plan } from "../components/features/pricing/Plans";
import BecomeAnAgent from "../components/BecomeAnAgent";
import PricingPaymentPage from "./PricingPaymentPage";


interface FaqItem {
  question: string;
  answer: string;
}

const faqData: FaqItem[] = [
    { question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium." },
    { question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium." },
    { question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium." },
    { question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium." },
    { question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium." },
    { question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium." },
    { question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium." },
    { question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit", answer: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium." },
];

const handleGetStartedClick = () => {
    console.log("Get started now button clicked!");
  };

const PricingPage: React.FC = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

    const handleSubscribeClick = (plan: Plan) => {
        setSelectedPlan(plan);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
        setTimeout(() => {
            setSelectedPlan(null);
        }, 300); 
    };

    return (
          <>
            <Section className="relative text-center py-24" containerClassName="max-w-6xl px-4 mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight">
                Pricetag Business <br />
              <span className="block mt-1">
                Subscription Plans
              </span>
            </h1>
            </Section>

            <Section className="bg-white py-16 lg:py-24">
            {/* Grid Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">

            {pricingPlans.map((plan, index) => (
            <PricingCard
            key={index}
            plan={plan}
            onSubscribeClick={handleSubscribeClick} 
            />

            ))}

            </div>
            </Section>

            <Section className="bg-white py-16 lg:py-24 px-8">
                {/* Section Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-16 text-left">
                Frequently Asked Questions
                </h2>

                {/* FAQ Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
                {/* Map through the FAQ data */}
                {faqData.map((item, index) => (
                <div key={index}>
                    {/* Question */}
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                     {item.question}
                    </h3>
                    {/* Answer */}
                    <p className="text-base text-gray-600 leading-relaxed">
                     {item.answer}
                    </p>
                </div>
                ))}
            </div>
            </Section>

            <BecomeAnAgent 
              heading="Become a Pricetag agent and make money on the go!"
              buttonText="Get started now"
              onButtonClick={handleGetStartedClick}
            />

            <PricingPaymentPage
              isOpen={isModalOpen}
              onClose={handleCloseModal}
              plan={selectedPlan}
            />
         </>
    );
 };
export default PricingPage;