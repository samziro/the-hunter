import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
import Services from "./components/services/Services";
import Classes from "./components/classes/Classes";
import Title from "./components/title/Title";
import Testimonials from "./components/testimony/Testimonials";
import Contact from "./components/contact/Contact";
import Newsletter from "./components/newsletter/Newsletter";
import Pricing from "./components/pricing/Pricing";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Title Title={"About Me"} />
      <About />
      <Title Title={"Our Services"} />
      <Services />
      <Title Title={"What I Offer"} />
      <Classes />
      <Title Title={"Pricing"} />
      <Pricing/>
      <Title Title={"What Our Clients Say"} />
      <Testimonials />
      <Title Title={"Get In Touch With Us"} />
     
      <Title Title={"News letter"} />
      <Newsletter/>
      <Footer />
    </div>
  );
};

export default App;
