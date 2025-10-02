import React from 'react'

const PricingCard = ({ title, price, description, buttonText }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 p-4">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-4 font-bold text-xl text-center border-b border-gray-200">
          {title}
        </div>
        <div className="px-6 py-4 text-center">
          <p className="text-3xl font-bold">{price}</p>
          <p className="text-gray-500">{description}</p>
        </div>
        <div className="px-6 pt-4 pb-2 border-t border-gray-200">
          <a
            href="#"
            className="inline-block px-6 py-2.5 text-center font-bold text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            {buttonText}
          </a>
        </div>
      </div>
    </div>
  )
}

const Pricing = () => {
  const pricingData = [
    {
      title: 'Basic',
      price: '$120.00',
      description: '12 sessions',
      buttonText: 'Buy Now',
    },
    {
      title: 'Complete Edition',
      price: '$160.00',
      description: '16 sessions',
      buttonText: 'Buy Now',
    },
    {
      title: 'Premium',
      price: '$200.00',
      description: '20 sessions',
      buttonText: 'Buy Now',
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Pricing</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {pricingData.map((data) => (
          <PricingCard key={data.title} {...data} />
        ))}
      </div>
    </div>
  )
}

export default Pricing
