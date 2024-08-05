import { about } from "../data/about";

const About = () => {
  return (
    <div className="relative self-center">
      <span className="text-contrast/40 font-mono absolute -top-8 lg:-top-16 -left-8 lg:-left-16 text-9xl lg:text-[256px]">
        &ldquo;
      </span>
      <h2 className="relative text-start text-muted-foreground text-lg lg:text-2xl font-thin w-full self-center leading-relaxed">
        {about}
      </h2>
    </div>
  );
};

export default About;
