const Avatar = () => {
  return (
    <div className="flex w-full justify-center items-start lg:items-center h-full">
      <a href="/">
        <img
          className="rounded-full h-fit w-48 md:w-64 lg:w-72"
          src="/images/marbenz_avatar_600x800.webp"
          alt="Marcel Benzinger Avatar"
          width={300}
        />
      </a>
    </div>
  );
};

export default Avatar;
