import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-scroll";

/**
 * Testimonials — semantic, accessible, AOS-friendly
 */

const testimonialData = [
  {
    heading: "Lisa B.",
    description:
      "I'm so glad I found The.Fit.Hunter. The variety of classes and the expertise of the instructors are unmatched. Whether it's yoga, strength training, or cardio, they have it all covered!",
  },
  {
    heading: "Michael S.",
    description:
      "As a busy professional, finding time for fitness was always a challenge. The.Fit.Hunter's flexible class schedules and virtual training options have been a lifesaver. I'm in the best shape of my life!",
  },
  {
    heading: "David P.",
    description:
      "I can't say enough good things about The.Fit.Hunter. The holistic approach they take to health and fitness is truly transformative. I've not only lost weight but gained confidence and a new outlook on life!",
  },
  {
    heading: "Emily L.",
    description:
      "The personal training sessions here are top-notch. The trainers are not only skilled but also motivating. They push you to reach your full potential while ensuring your safety and well-being.",
  },
  {
    heading: "John D.",
    description:
      "The nutrition advice I received from The.Fit.Hunter team has been a game-changer for me. They provided personalized meal plans that were easy to follow and delicious.",
  },
  {
    heading: "Samantha",
    description:
      "I've been attending classes here for a while now, and I'm incredibly impressed with the quality of instruction and the friendly atmosphere. They truly care about your progress.",
  },
];

const Testimonials = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    Aos.init({
      duration: 800,
      once: true,
      disable: () => prefersReducedMotion,
    });
  }, []);

  const handleJoinNow = () => {
    // fire analytics (if gtag available)
    try {
      if (typeof window !== "undefined" && typeof window.gtag === "function") {
        window.gtag("event", "cta_click", {
          event_category: "testimonials",
          event_label: "join_now_from_testimonials",
        });
      }
    } catch (e) {
      // ignore analytics errors
    }

    navigate("/subscription", { state: { source: "testimonials" } });
  };

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="py-8"
      role="region"
    >
      <h2 id="testimonials-heading" className="sr-only">
        Client Testimonials
      </h2>

      <div
        className="Testimonials mx-4 md:mx-0 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6 md:px-28"
        role="list"
      >
        {testimonialData.map((item) => (
          <article
            key={item.heading}
            className="shadow-lg rounded-lg p-4 bg-slate-50 dark:bg-darkCardTheme"
            data-aos="zoom-in-up"
            role="listitem"
            aria-label={`Testimonial from ${item.heading}`}
          >
            <blockquote className="text-sm leading-relaxed text-lightFontHeading dark:text-lightFontText">
              “{item.description}”
            </blockquote>
            <figcaption className="mt-3 text-sm font-semibold text-lightFontHeading dark:text-lightFontText">
              — {item.heading}
            </figcaption>
          </article>
        ))}
      </div>

      <div className="see-more mt-8 grid place-items-center">
        <Link to="Price">
          <button
          type="button"
          onClick={handleJoinNow}
          className="py-4 px-8 rounded cursor-pointer text-2xl text-lightFontText bg-btnDarkTheme font-extrabold focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-btnDarkTheme"
          aria-label="Join our community and view subscription options"
        >
          JOIN THE COMMUNITY
        </button>
        </Link>
      </div>
    </section>
  );
};

export default Testimonials;
