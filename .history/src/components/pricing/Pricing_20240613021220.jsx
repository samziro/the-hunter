



const PricingCard = ({ title, sessions, oldPrice, newPrice, popular }) => {
  return (
    <div
      className={`border rounded-lg  ${
        popular ? "border-4 border-gray-400" : ""
      }`}
    >
      {popular && (
        <div className="text-center bg-gray-100 text-gray-800 font-bold rounded-t-lg p-2">
          Most Popular
        </div>
      )}
      <div className="text-center p-4 leading-loose hover:shad">
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
    </div>
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
