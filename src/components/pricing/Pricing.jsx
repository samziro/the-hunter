import "aos/dist/aos.css";
import { useEffect } from "react";
import Aos from "aos";

// eslint-disable-next-line react/prop-types
const PricingCard = ({ title, sessions, oldPrice, newPrice, popular }) => {
 
 useEffect(() => {
   Aos.init({ duration: 500 });
 }, []);
  return (
    <div
      data-Aos="zoom-in-up"
      className={`bg-slate-50 dark:bg-darkCardTheme Pricing m-4 md:m-0 rounded-lg hover:shadow-lg ${
        popular ? " dark:border-2 dark:border-neutral-700" : ""
      }`}
    >
      {popular && (
        <div className="text-center bg-lightFontText dark:bg-darkTheme font-bold text-darkFontHeading rounded-t-sm p-2 w-full">
          Most Popular
        </div>
      )}
      <div className="text-center p-4 leading-loose ">
        <h2 className="text-xl font-semibold text-lightFontHeading dark:text-darkFontHeading">
          {title}
        </h2>
        <p className="text-lightFontHeading dark:text-darkFontText">
          {sessions} sessions
        </p>
        <p className="text-xl font-semibold line-through text-lightFontHeading dark:text-darkFontText">
          {oldPrice}
        </p>
        <p className="text-2xl font-bold text-lightFontHeading dark:text-darkFontHeading">
          {newPrice}
        </p>
        <button className="py-0 px-4 mt-4 rounded-lg text-slate-100 bg-neutral-700 hover:bg-neutral-900">
          Get Started
        </button>
      </div>
    </div>
  );
};

const Pricing = () => {
  const pricingOptions = [
    {
      title: "MONTHLY MEMBERSHIP",
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
