/* eslint-disable react/prop-types */
import { useEffect } from "react";
import PropTypes from "prop-types";
import Aos from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import { RiCheckLine } from "react-icons/ri";
import { Link } from "react-router-dom";

/* =========================
   PricingCard
   ========================= */
const cardVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.36, ease: "easeOut" } },
  hover: { scale: 1.03, transition: { duration: 0.18 } },
};

const PricingCard = ({ title, price, elements = [], buttonText, popular }) => {
  return (
    <motion.article
      data-aos="zoom-in-up"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, amount: 0.2 }}
      className={`h-full flex flex-col w-full  max-w-xl mx-auto md:mx-0 bg-slate-50 dark:bg-darkCardTheme rounded-lg overflow-hidden shadow-sm
        ${popular ? "ring-2 ring-yellow-400 dark:ring-neutral-600" : ""}`}
      role="region"
      aria-labelledby={`pricing-${title}`}
    >
      {popular && (
        <div className="bg-yellow-400 text-black font-semibold text-center py-1">
          Most Popular
        </div>
      )}

      <div className="p-6 h-full flex flex-col justify-between">
        <p
          id={`pricing-${title}`}
          className="text-lg md:text-xl font-semibold text-lightFontHeading dark:text-darkFontHeading"
        >
          {title}
        </p>

        <p className="mt-3 text-2xl md:text-3xl font-bold text-lightFontHeading dark:text-darkFontText">
          {price}
        </p>

        {elements && elements.length > 0 && (
          <ul className="mt-4 text-left text-sm md:text-base text-lightFontHeading dark:text-darkFontText space-y-1">
            {elements.map((el, idx) => (
              <li key={idx} className="flex gap-4"><RiCheckLine className="text-btnDarkTheme mt-1 flex-shrink-0" size={20} /> {el}</li>
            ))}
          </ul>
        )}
        
        <Link to= "/Subscription">
          <button
          type="button"
          className="mt-6 inline-block px-6 py-2 rounded-lg bg-btnDarkTheme text-lightFontHeading font-bold hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-btnDarkTheme"
        >
          {buttonText}
        </button>
        </Link>
        
      </div>
    </motion.article>
  );
};

PricingCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string,
  elements: PropTypes.arrayOf(PropTypes.string),
  buttonText: PropTypes.string,
  popular: PropTypes.bool,
};

PricingCard.defaultProps = {
  price: "Contact for price",
  elements: [],
  buttonText: "Choose Plan",
  popular: false,
};

/* =========================
   Pricing (parent)
   - initializes AOS once
   - sets up responsive grid
   - uses framer motion container for stagger
   ========================= */
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const Pricing = () => {
  useEffect(() => {
    // Initialize AOS once for this section (or move to App.jsx for app-wide)
    Aos.init({ duration: 500, once: true });
  }, []);

  const pricingOptions = [
    {
      title: "Single Session",
      price: "2,500 KES",
      elements: ["1 training session", "Personalized workout plan", "Expert guidance"],
      buttonText: "Book Now",
      popular: false,
    },
    {
      title: "6 Sessions",
      price: "13,500 KES",
      elements: ["6 training sessions", "Save 10%", "Email support"],
      buttonText: "Book Now",
      popular: false,
    },
    {
      title: "10 Sessions",
      price: "20,000 KES",
      elements: ["10 training sessions", "Save 20%", "Priority email support"],
      buttonText: "Get Started",
      popular: true,
    },
    {
      title: "16 Sessions",
      price: "29,000 KES",
      elements: ["16 training sessions", "Save 27%", "Monthly check-ins"],
      buttonText: "Choose Plan",
      popular: false,
    },
    {
      title: "20 Sessions",
      price: "35,000 KES",
      elements: ["20 training sessions", "Save 30%", "Full transformation support"],
      buttonText: "Maximize Results",
      popular: false,
    },
  ];

  return (
    <section className="py-12 px-4 md:px-12 lg:px-28 Price">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 items-start"
      >
        {pricingOptions.map((opt, idx) => (
          <PricingCard
            key={opt.title + idx}
            title={opt.title}
            price={opt.price}
            elements={opt.elements}
            buttonText={opt.buttonText}
            popular={opt.popular}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default Pricing;
