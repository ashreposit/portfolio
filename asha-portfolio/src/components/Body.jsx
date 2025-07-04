import NavBar from "./NavBar";
import Hero from "./Hero";
import Footer from "./Footer";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import Skills from "./Skills";
import { useLayoutEffect, useState } from "react";
import Experience from "./Experience";
import ContactMe from "./ContactMe";
import PersonalProjects from "./PersonalProjects";

const Body = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useLayoutEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">

      <div className="sticky top-0 z-50">
        <NavBar theme={theme} setTheme={setTheme} />
      </div>

      <main>
        <section className="relative top-0 min-h-screen z-10 flex items-center justify-center bg-white dark:bg-gray-900">
          <Hero />
        </section>

        <section className="relative top-0 min-h-screen z-20 flex items-center justify-center bg-white dark:bg-gray-900">
          <AboutMe />
        </section>

        <section className="relative top-0 min-h-screen z-20 flex items-center justify-center bg-white dark:bg-gray-900">
          <Projects />
        </section>

        {/* <section className="sticky top-0 min-h-screen z-20 flex items-center justify-center bg-white dark:bg-gray-900">
          <PersonalProjects />
        </section> */}

        <section className="relative top-0 min-h-screen z-30 flex items-center justify-center bg-white dark:bg-gray-900">
          <Skills />
        </section>

        <section className="relative top-0 min-h-screen z-30 flex items-center justify-center bg-white dark:bg-gray-900">
          <Experience />
        </section>

        <section className="relative top-0 min-h-screen z-30 flex items-center justify-center bg-white dark:bg-gray-900">
          <ContactMe />
        </section>

      </main>
      <Footer />
    </div>
  );
};

export default Body;
