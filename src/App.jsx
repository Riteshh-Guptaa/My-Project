import React from "react";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Services from "./Components/Services";
import Hero from "./Components/Hero";

const App = () => {
  return (
    <div className="poppins-extralight flex justify-center">
      <div className="flex flex-col container ">
        <section>
          <Hero />
        </section>

        <section>
          <Services />
        </section>
        <section>
          <Portfolio />
        </section>
        <section>
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default App;
