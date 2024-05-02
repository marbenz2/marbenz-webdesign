import Avatar from "./components/Avatar";
import About from "./components/About";
import Skills from "./components/Skills";
import Social from "./components/Social";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

function App() {
  return (
    <main className="flex flex-col lg:flex-row w-full min-h-screen bg-background">
      <section className="flex items-center justify-center py-12 lg:py-0 w-full lg:w-1/2 2xl:w-1/3 bg-foreground/10 border-b-4 border-r-0 lg:border-b-0 lg:border-r-4">
        <Avatar />
      </section>
      <section className="flex flex-col pt-12 pb-2 lg:px-4 lg:pt-36 2xl:px-48 w-full lg:w-1/2 2xl:w-2/3 gap-16 lg:gap-0 lg:justify-between">
        <About />
        <div className="flex flex-col w-full px-2 gap-16 md:flex-row text-center md:text-start md:justify-between lg:flex-col 2xl:flex-row 2xl:justify-between items-center lg:items-start">
          <Skills />
          <Social />
        </div>
        <Projects />
        <Footer />
      </section>
    </main>
  );
}

export default App;
