import cv from "../downloads/cv.pdf";

const Footer = () => {
  return (
    <footer className="flex w-full px-2 gap-2 justify-between">
      <div className="flex flex-col w-fit text-start">
        <h3 className="text-md md:text-xl font-semibold">Wohnort</h3>
        <p className="text-xs md:text-sm text-muted-foreground">Metzingen</p>
      </div>
      <div className="flex flex-col w-fit text-start">
        <h3 className="text-md md:text-xl font-semibold">Kontakt</h3>
        <p className="text-xs md:text-sm text-muted-foreground">
          <a href="mailto:info@marbenz.de">info@marbenz.de</a>
        </p>
      </div>
      <div className="flex flex-col w-fit text-start">
        <h3 className="text-md md:text-xl font-semibold">CV</h3>
        <p className="text-xs md:text-sm text-muted-foreground">
          <a href={cv} download="benzinger_cv.pdf">
            Download
          </a>
        </p>
      </div>
      <div className="flex flex-col w-fit text-start">
        <h3 className="text-md md:text-xl font-semibold">Copyright</h3>
        <p className="text-xs md:text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} - MarBenz
        </p>
      </div>
    </footer>
  );
};

export default Footer;
