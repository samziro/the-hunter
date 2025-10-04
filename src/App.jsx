import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Classes from "./components/classes/Classes";
import Title from "./components/title/Title";
import Testimonials from "./components/testimony/Testimonials";
import Contact from "./components/contact/Contact";
import Newsletter from "./components/newsletter/Newsletter";
import Pricing from "./components/pricing/Pricing";
import VideoPlayer from "./components/videoPlayer/VideoPlayer";
// import Sun from "./assets/sun_icon.png";
// import Moon from "./assets/moon_icon.png";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Email from "./components/email/Email";

const App = () => {

  const [playState, setPlayState] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme:light)')) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, [])
  
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const changeTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <div className="bg-white dark:bg-darkTheme ">
      {
        <motion.img
          className="w-6 h-6 right-4 top-4 md:top-5 z-50 fixed cursor-pointer mr-8 bg-btnDarkTheme -p-4 rounded-full"
          src={theme === "dark" ? <i className="ri-moon-line text-lg"></i> : <i className="ri-sun-line text-lg"></i>}
          alt={theme === "dark" ? "light-theme" : "dark-theme"}
          onClick={changeTheme}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
        />
      }

      <Navbar />
      <Hero />
      <Title Title1={"Transform Your Body,"} Title2={"Beyond standard"} subTitle={"TRAINER BIO"} />
      <About /> 
      <Classes setPlayState={setPlayState} />
      <Title Title1={"ULTIMATE TRANSFORMATION"} Title2={"PROGRAM"} subTitle={"PRICING"} />
      <Pricing />
      <Email/>
      <Title Title1={"Proven"} Title2={"Transformations"} subTitle={"TESTIMONIALS"} />
      <Testimonials />
      <Title Title1={"Ready to"} Title2={"Transform Your Life?"} subTitle={"GET IN TOUCH"} />
      <Contact />
      <Title subTitle={"News letter"} />
      <Newsletter />
      <Footer />
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
