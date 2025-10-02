/* eslint-disable react/no-unescaped-entities */
import service_image from '../../assets/services.png'

const Services = () => {
  return (
    <div>
      <div className="h-full grid grid-cols-1 gap-8 md:flex md:justify-between md:items-center md:px-28 md:py-12 ">
        <p className="leading-loose text-center text-stone-600">
          At Hunter's World, our comprehensive range of services is designed to
          cater to every aspect of your fitness journey. From personalized
          training programs crafted to your unique goals, nutritional guidance
          for a balanced lifestyle, to a supportive community fostering
          motivation, we have your holistic well-being covered.
        </p>
        <img className="w-4/5" src={service_image} alt="service-image" />
      </div>
    </div>
  );
}

export default Services
