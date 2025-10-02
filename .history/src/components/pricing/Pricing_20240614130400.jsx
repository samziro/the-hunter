/* eslint-disable react/prop-types */
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";


const PricingCard = ({ title, sessions, oldPrice, newPrice, popular }) => {
   const ref = useRef(null);
   const { scrollYProgress } = useScroll({
     target: ref,
     offset: ["0 1", "1.33 1"],
   });

   const scaleProgress = useTransform(scrollYProgress, [0.6, 1], [0.6, 1]);
   const opacityProgress = useTransform(scrollYProgress, [0.6, 1], [0.6, 1]);
  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      transition={{ delay: 0, duration: 0.5, type: "spring"}}
      className={`border m-4 md:m-0 rounded-lg hover:shadow-lg  ${
        popular ? "border-4 border-slate-100" : ""
      }`}
    >
      {popular && (
        <div className="text-center bg-gray-100 text-gray-800 font-bold rounded-t-sm p-2 ">
          Most Popular
        </div>
      )}
      <div className="text-center p-4 leading-loose ">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-500">{sessions} sessions</p>
        <p className="text-xl font-semibold line-through text-gray-500">
          {oldPrice}
        </p>
        <p className="text-2xl font-bold">{newPrice}</p>
        <button className="py-2 px-4 mt-4 rounded-lg text-slate-100 bg-neutral-700 hover:bg-neutral-900">
          Buy Now
        </button>
      </div>
    </motion.div>
  );
};

const Pricing = () => {
  const pricingOptions = [
    {
      title: "Basic",
      sessions: "12 sessions",
      oldPrice: "$120.00",
      newPrice: "$115.00",
      popular: false,
    },
    {
      title: "Complete Edition",
      sessions: "16 sessions",
      oldPrice: "$160.00",
      newPrice: "$145.00",
      popular: true,
    },
    {
      title: "Premium",
      sessions: "20 sessions",
      oldPrice: "$200.00",
      newPrice: "$175.00",
      popular: false,
    },
  ];

  return (
    <div className="py-12 md:px-28 ">
      <div className="  md:grid md:grid-cols-3 md:gap-8">
        {pricingOptions.map((option, index) => (
          <PricingCard
            key={index}
            title={option.title}
            sessions={option.sessions}
            oldPrice={option.oldPrice}
            newPrice={option.newPrice}
            popular={option.popular}
          />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
