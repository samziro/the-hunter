import { motion, useViewportScrollY } from "framer-motion";
import { useRef } from "react";

const Testimonials = () => {
  const testimonialData = [
    // ... your testimonial data
  ];

  const itemsRef = useRef([]);

  const { scrollY } = useViewportScrollY();

  const animation = {
    opacity: [0, 1],
    scale: [0.95, 1],
    transition: { duration: 0.5, ease: "easeInOut" },
  };

  return (
    <div className="values h-full">
      <div className="grid grid-cols-1 gap-4 md:grid md:grid-cols-3 md:justify-items-center md:align-items-center md:gap-4 md:px-28 py-8">
        {testimonialData.map((item, index) => {
          itemsRef.current[index] = itemsRef.current[index] || useRef(null);
          return (
            <motion.div
              key={item.heading}
              ref={itemsRef.current[index]}
              variants={animation}
              initial="hidden"
              animate="visible"
              viewport={{ once: true }}
              className="shadow-lg rounded-lg p-4 bg-white"
              style={{
                scrollY: `calc(var(--scrollY) - ${index * 100}px)`, // adjust offset as needed
              }}
            >
              <h1 className="font-semibold text-lg mb-2">{item.heading}</h1>
              <p className="leading-loose text-stone-600">{item.description}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;
