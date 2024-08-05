const Social = () => {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-lg md:text-2xl font-semibold ">Socialmedia</h2>
      <div className="flex gap-4">
        <a
          href="https://github.com/marbenz2/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src="/images/github.svg" alt="GitHub Icon" width={40} />
        </a>
        <a
          href="https://www.linkedin.com/in/marcel-benzinger-a9a57211b/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src="/images/linkedin.svg" alt="LinkedIn Icon" width={40} />
        </a>
        <a
          href="https://www.xing.com/profile/Marcel_Benzinger/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src="/images/xing.svg" alt="Xing Icon" width={40} />
        </a>
        <a href="mailto:hello@marbenz.de">
          <img src="/images/mail.svg" alt="Mail Icon" width={40} />
        </a>
      </div>
    </div>
  );
};

export default Social;
