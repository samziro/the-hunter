/* eslint-disable react/prop-types */


const Title = ({Title1, Title2,subTitle}) => {
  return (
    <div className={`h-full font-bold grid grid-cols-1 justify-items-center align-items-center pt-6 text-lg md:text-3xl md:pt-8 `}>
      <p className="text-lg font-bold text-center text-darkFontHeading mb-4 shadow-xl dark:shadow-glow ring-1 ring-gold rounded-full backdrop-blur-sm py-2 px-6">{subTitle}</p>
      <h1 className="text-6xl font-bold text-center dark:text-lightFontText ">{Title1} <span className="text-[#eebd2b]"><h1>{Title2}</h1></span></h1>

    </div>
  );
}

export default Title
