import Avatar from "./components/Avatar";
import About from "./components/About";
import Skills from "./components/Skills";
import Social from "./components/Social";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Title from "./components/Title";

function App() {
  return (
    <main className="flex flex-col">
      <div className="flex flex-col lg:flex-row w-full min-h-screen bg-background">
        <section className="flex w-full lg:w-1/3 bg-foreground/10 border-b-4 border-r-0 lg:border-b-0 lg:border-r-4">
          <div className="flex lg:h-screen w-full items-center justify-center p-12">
            <Avatar />
          </div>
        </section>
        <section className="flex flex-col items-center w-full lg:w-2/3">
          <div className="flex flex-col w-full max-w-5xl lg:min-h-screen gap-24 justify-between lg:gap-64 p-16">
            <Title />
            <About />
            <div className="flex flex-col md:flex-row lg:flex-col 2xl:flex-row gap-24 md:justify-between 2xl:justify-between">
              <Skills />
              <Social />
            </div>
          </div>
          <div className="flex flex-col lg:min-h-screen justify-center w-full max-w-5xl p-16">
            <Projects />
          </div>
          <Footer />
        </section>
      </div>
    </main>
  );
}

export default App;
