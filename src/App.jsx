import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Classes from "./components/classes/Classes";
import Title from "./components/title/Title";
import Testimonials from "./components/testimony/Testimonials";
import Newsletter from "./components/newsletter/Newsletter";
import Pricing from "./components/pricing/Pricing";
import VideoPlayer from "./components/videoPlayer/VideoPlayer";
import Email from "./components/email/Email";
import Ready from "./components/Ready";
import Subscription from "./page/Subscription"
import { RiMoonClearLine, RiSunLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";


const App = () => {
  const [playState, setPlayState] = useState(false);
  const [theme, setTheme] = useState("light");

  // ✅ Corrected dark mode detection
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, []);

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const changeTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="bg-white dark:bg-darkTheme">
      <motion.div
        onClick={changeTheme}
        className="fixed right-12 md:right-4 top-3 md:top-3.5 z-50 cursor-pointer bg-btnDarkTheme p-1 md:p-2 rounded-full flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
      >
        {theme === "dark" ? <RiSunLine size={22} /> : <RiMoonClearLine size={22} />}
      </motion.div>

       <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <Title Title1="Transform Your Body," Title2="Beyond standard" subTitle="TRAINER BIO" />
              <About />
              <Classes setPlayState={setPlayState} />
              <Title Title1="ULTIMATE TRANSFORMATION" Title2="PROGRAM" subTitle="PRICING" />
              <Pricing />
              <Email />
              <Title Title1="Proven" Title2="Transformations" subTitle="TESTIMONIALS" />
              <Testimonials />
              <Ready />
              <Newsletter />
              <Footer />
              <VideoPlayer playState={playState} setPlayState={setPlayState} />
            </>
          }
        />
        <Route path="/subscription" element={<Subscription />} />
      </Routes>
    </div>
  );
};

export default App;
