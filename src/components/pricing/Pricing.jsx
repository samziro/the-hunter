/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { RiCheckLine } from "react-icons/ri";
import { useState } from "react";
import PricingModal from "../PriceModal";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.36, ease: "easeOut" } },
  hover: { scale: 1.03, transition: { duration: 0.2 } },
};

// Individual Pricing Card
const PricingCard = ({ plan, onBook }) => (
  <motion.article
    variants={cardVariants}
    initial="hidden"
    whileInView="visible"
    whileHover="hover"
    viewport={{ once: true, amount: 0.2 }}
    className={`flex flex-col w-full max-w-lg mx-auto md:mx-0 rounded-xl shadow-lg overflow-hidden ${
      plan.popular
        ? "ring-2 ring-yellow-400 dark:ring-yellow-600 bg-yellow-50 dark:bg-yellow-900/20"
        : "bg-slate-50 dark:bg-darkCardTheme"
    }`}
    role="region"
    aria-labelledby={`pricing-${plan.title}`}
  >
    {plan.popular && (
      <div className="bg-yellow-400 dark:bg-yellow-600 text-black dark:text-white font-semibold text-center py-1">
        Most Popular
      </div>
    )}
    <div className="p-4 flex flex-col justify-between h-full">
      <h3
        id={`pricing-${plan.title}`}
        className="text-xl md:text-2xl font-semibold text-darkFontHeading dark:text-lightFontText mb-2"
      >
        {plan.title}
      </h3>
      <p className="text-3xl md:text-4xl font-bold text-darkFontHeading dark:text-lightFontText mb-4">{plan.price}</p>

      {plan.benefits.length > 0 && (
        <ul className="space-y-2 text-sm md:text-base text-darkFontText dark:text-lightFontText mb-6">
          {plan.benefits.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <RiCheckLine className="text-yellow-500 dark:text-yellow-400 mt-1 flex-shrink-0" size={20} />
              {item}
            </li>
          ))}
        </ul>
      )}

      <button
        onClick={() => onBook(plan)}
        className="w-full py-3 mt-auto rounded-lg bg-yellow-500 hover:bg-yellow-600 text-white font-bold transition cursor-pointer"
      >
        {plan.buttonText}
      </button>
    </div>
  </motion.article>
);

// Pricing Section
const Pricing = () => {
  const pricingPlans = [
    {
      title: "Single Session",
      price: "2,500 KES",
      benefits: ["1 training session", "Personalized workout plan", "Expert guidance"],
      buttonText: "Book Now",
      popular: false,
    },
    {
      title: "6 Sessions",
      price: "13,500 KES",
      benefits: ["6 training sessions", "Save 10%", "Email support"],
      buttonText: "Book Now",
      popular: false,
    },
    {
      title: "10 Sessions",
      price: "20,000 KES",
      benefits: ["10 training sessions", "Save 20%", "Priority email support"],
      buttonText: "Get Started",
      popular: true,
    },
    {
      title: "16 Sessions",
      price: "29,000 KES",
      benefits: ["16 training sessions", "Save 27%", "Monthly check-ins"],
      buttonText: "Choose Plan",
      popular: false,
    },
    {
      title: "20 Sessions",
      price: "35,000 KES",
      benefits: ["20 training sessions", "Save 30%", "Full transformation support"],
      buttonText: "Choose Plan",
      popular: false,
    },
  ];

  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(pricingPlans[0]);

  const openModal = (plan) => {
    setSelectedPlan(plan);
    setModalOpen(true);
  };

  return (
    <section className="py-12 px-4 md:px-12 lg:px-28 Price">
      <motion.div
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {pricingPlans.map((plan, idx) => (
          <PricingCard key={plan.title + idx} plan={plan} onBook={openModal} />
        ))}
      </motion.div>

      {/* Pricing Modal */}
      <PricingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedPlan={selectedPlan}
      />
    </section>
  );
};

export default Pricing;
