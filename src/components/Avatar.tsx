const Avatar = () => {
  return (
    <div className="flex justify-center items-start lg:items-center">
      <a href="/">
        <img
          className="rounded-full w-48 md:w-64 lg:w-72"
          src="/images/marbenz_avatar_600x800.webp"
          alt="Marcel Benzinger Avatar"
          width={300}
        />
      </a>
    </div>
  );
};

export default Avatar;
