import React from "react";
import About from "./about";
import Design from "./design";
import Experience from "./experience";
import Navigation from "./navigation";
import Software from "./software";
import Work from "./work";
import Can from "./Can";
export default function Portfolio() {
  return (
    <main className="lg:container mx-auto">
      <div className="parent sm:min-h-screen min-w-[336px] ">
        <Can />
        <Navigation />
        <About />
        <Software />
        <Design />
        <Experience />
        <Work />
      </div>
    </main>
  );
}
