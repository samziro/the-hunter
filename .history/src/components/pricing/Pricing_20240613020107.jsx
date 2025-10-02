



const PricingCa = ({ title, sessions, oldPrice, newPrice, popular }) => {
  return (
    <div
      className={`border rounded-lg p-6 ${
        popular ? "border-4 border-gray-400" : ""
      }`}
    >
      {popular && (
        <div className="text-center bg-gray-100 text-gray-800 font-bold rounded-t-lg p-2">
          Most Popular
        </div>
      )}
      <div className="text-center">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-gray-500">{sessions} sessions</p>
        <p className="text-xl font-semibold line-through text-gray-500">
          {oldPrice}
        </p>
        <p className="text-2xl font-bold">{newPrice}</p>
        <button className="mt-4 py-2 px-4 rounded-lg text-white bg-gray-700 hover:bg-gray-900">
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
    <div className="py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Pricing</h1>
      <div className="flex justify-center space-x-8">
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
