
import PropTypes from "prop-types";

/**
 * Title
 * - Semantic: uses a section with aria-labelledby and an H2 (not H1) since the page's hero shouldown the main H1.
 * - No nested headings.
 * - Accessible label for the subtitle and clear visual styling via Tailwind classes.
 */

const Title = ({ Title1, Title2, subTitle }) => {
  const id = `section-title-${String(Title1 + Title2).replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <section
      aria-labelledby={id}
      className="w-full py-6 font-bold flex flex-col items-center text-center"
      role="region"
    >
      {subTitle && (
        <p className="text-sm md:text-base font-semibold mb-4 px-4 py-2 rounded-full bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-700 text-darkFontHeading dark:text-lightFontText">
          {subTitle}
        </p>
      )}

      
      <h2 id={id} className="text-3xl md:text-6xl  leading-medium">
        <span className="block text-lightFontHeading dark:text-lightFontText"><h2>{Title1}</h2></span>
        {Title2 && (
          <span className="block text-darkFontHeading">
            <h2>{Title2}</h2>
          </span>
        )}
      </h2>
    </section>
  );
};

Title.propTypes = {
  Title1: PropTypes.string.isRequired,
  Title2: PropTypes.string,
  subTitle: PropTypes.string,
};

Title.defaultProps = {
  Title2: "",
  subTitle: "",
};

export default Title;
