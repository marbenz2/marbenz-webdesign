import { TypeAnimation } from "react-type-animation";

const Title = () => {
  return (
    <div className="flex flex-col w-fit self-center lg:self-start">
      <div className="flex flex-col md:flex-row md:gap-4 lg:flex-col lg:gap-0 2xl:flex-row 2xl:gap-4">
        <h1 className="text-6xl lg:text-7xl lg:text-start text-contrast z-50">
          Marcel
        </h1>
        <h1 className="text-6xl lg:text-7xl lg:text-start text-contrast z-50">
          Benzinger
        </h1>
      </div>
      <div className="flex pl-1 lg:pl-2 -mt-3 md:-mt-3 lg:-mt-4 self-start z-40">
        <TypeAnimation
          sequence={[
            "",
            2000,
            "Webdesigner",
            2000,
            "Webentwickler",
            2000,
            "Webdeveloper",
            2000,
          ]}
          wrapper="p"
          speed={5}
          className="text-muted-foreground font-thin text-2xl lg:text-4xl"
          repeat={Infinity}
        />
      </div>
    </div>
  );
};

export default Title;
