import React, { useEffect, useState, Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { motion, useReducedMotion } from "framer-motion";
import { RiMoonClearLine, RiSunLine } from "react-icons/ri";

// Keep these light/eager (navbar/footer are usually small)
const Navbar = lazy(() => import("./components/navbar/Navbar"));
const Footer = lazy(() => import("./components/footer/Footer"));

// Lazy-load heavier or non-critical sections
const Hero = lazy(() => import("./components/hero/Hero"));
const About = lazy(() => import("./components/about/About"));
const Classes = lazy(() => import("./components/classes/Classes"));
const Title = lazy(() => import("./components/title/Title"));
const Testimonials = lazy(() => import("./components/testimony/Testimonials"));
const Newsletter = lazy(() => import("./components/newsletter/Newsletter"));
const Pricing = lazy(() => import("./components/pricing/Pricing"));
const VideoPlayer = lazy(() => import("./components/videoPlayer/VideoPlayer"));
const Email = lazy(() => import("./components/email/Email"));
const Ready = lazy(() => import("./components/Ready"));
const Subscription = lazy(() => import("./page/Subscription"));

// Small, reusable fallback UI for Suspense boundaries
function SectionFallback({ label = "Loading…" }) {
  return (
    <div
      role="status"
      aria-live="polite"
      className="py-12 flex items-center justify-center text-gray-500"
    >
      {label}
    </div>
  );
}

const App = () => {
  const [playState, setPlayState] = useState(false);
  const [theme, setTheme] = useState("light");
  const shouldReduceMotion = useReducedMotion();
  const location = useLocation();

  // Read persisted theme (or respect system preference)
  useEffect(() => {
    try {
      const saved = localStorage.getItem("theme");
      if (saved === "dark" || saved === "light") {
        setTheme(saved);
        return;
      }
    } catch (e) {
      // ignore storage errors
    }
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
    setTheme(prefersDark ? "dark" : "light");
  }, []);

  // Apply theme class and persist
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    try {
      localStorage.setItem("theme", theme);
    } catch (e) {}
  }, [theme]);

  // Respect reduced-motion and only animate when allowed
  const animationProps = shouldReduceMotion
    ? { initial: {}, animate: {}, transition: {} }
    : { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { delay: 0.6, duration: 0.8 } };

  // Analytics + UX: send page_view and restore scroll + focus to main when route changes
  useEffect(() => {
    // Scroll to top on navigation for single-page app consistency
    window.scrollTo(0, 0);

    // Give main content focus for screen readers and keyboard users
    const main = document.getElementById("main-content");
    if (main) {
      main.focus({ preventScroll: true });
    }

    // Google Analytics page view
    if (typeof window.gtag === "function") {
      window.gtag("config", "G-RWBRQT1BR0", { page_path: location.pathname });
    }
  }, [location]);

  const changeTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

  return (
    <div className="bg-white dark:bg-darkTheme min-h-screen text-gray-900 dark:text-white">
      {/* Skip link for keyboard users (visually hidden until focused) */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 bg-white dark:bg-gray-800 text-sm p-2 rounded shadow"
      >
        Skip to content
      </a>

      {/* Accessible theme toggle - positioned visually but keyboard accessible */}
      <motion.button
        aria-label={theme === "dark" ? "Switch to light theme" : "Switch to dark theme"}
        aria-pressed={theme === "dark"}
        onClick={changeTheme}
        className="fixed right-4 top-4 z-50 bg-btnDarkTheme p-2 rounded-full flex items-center justify-center text-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        {...animationProps}
      >
        {theme === "dark" ? <RiSunLine size={20} aria-hidden="true" /> : <RiMoonClearLine size={20} aria-hidden="true" />}
      </motion.button>

      {/* Router-driven content */}
      <Suspense fallback={<SectionFallback label="Loading navigation…" />}>
        <Navbar />
      </Suspense>

      <main id="main-content" tabIndex={-1} className="outline-none">
        <Suspense fallback={<SectionFallback label="Loading hero…" />}>
          <Hero />
        </Suspense>

        <Suspense fallback={<SectionFallback label="Loading trainer info…" />}>
          <Title Title1="Transform Your Body," Title2="Beyond standard" subTitle="TRAINER BIO" />
          <About />
        </Suspense>

        <Suspense fallback={<SectionFallback label="Loading classes…" />}>
          <Classes setPlayState={setPlayState} />
        </Suspense>

        <Suspense fallback={<SectionFallback label="Loading pricing…" />}>
          <Title Title1="TRAINING TRANSFORMATION" Title2="PROGRAM" subTitle="PRICING" />
          <Pricing />
          <Email />
        </Suspense>

        <Suspense fallback={<SectionFallback label="Loading testimonials…" />}>
          <Title Title1="Proven" Title2="Transformations" subTitle="TESTIMONIALS" />
          <Testimonials />
        </Suspense>

        <Suspense fallback={<SectionFallback label="Loading extras…" />}>
          <Ready />
          <Newsletter />
        </Suspense>

        <Suspense fallback={<SectionFallback label="Loading video player…" />}>
          <VideoPlayer playState={playState} setPlayState={setPlayState} />
        </Suspense>
      </main>

      <Suspense fallback={<SectionFallback label="Loading footer…" />}>
        <Footer />
      </Suspense>

      
    </div>
  );
};

export default App;
