import cv from "../downloads/cv.pdf";

const Footer = () => {
  return (
    <footer className="flex w-full px-4 py-2 gap-2 justify-between">
      <div className="flex flex-col w-fit text-start">
        <h3 className="text-md md:text-xl font-semibold">Wohnort</h3>
        <p className="text-xs md:text-sm font-thin text-muted-foreground">
          Metzingen
        </p>
      </div>
      <div className="flex flex-col w-fit text-start">
        <h3 className="text-md md:text-xl font-semibold">Kontakt</h3>
        <p className="text-xs md:text-sm font-thin text-muted-foreground">
          <a href="mailto:hello@marbenz.de">hello@marbenz.de</a>
        </p>
      </div>
      <div className="flex flex-col w-fit text-start">
        <h3 className="text-md md:text-xl font-semibold">CV</h3>
        <p className="text-xs md:text-sm font-thin text-muted-foreground">
          <a href={cv} download="benzinger_cv.pdf">
            Download
          </a>
        </p>
      </div>
      <div className="flex flex-col w-fit text-start">
        <h3 className="text-md md:text-xl font-semibold">Copyright</h3>
        <p className="text-xs md:text-sm font-thin text-muted-foreground">
          {new Date().getFullYear()} - MarBenz
        </p>
      </div>
    </footer>
  );
};

export default Footer;
