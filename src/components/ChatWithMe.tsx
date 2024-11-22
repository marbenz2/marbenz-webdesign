export default function ChatWithMe() {
  return (
    <div className="fixed left-0 top-1 lg:bottom-1 lg:left-1 lg:top-auto bg-background2/60 backdrop-blur-lg z-40 rounded-r-full">
      <div className="flex py-2 px-4">
        <a
          href="https://marbenz-chat.onrender.com/"
          target="_blank"
          rel="noreferrer noopener"
          className="flex items-center gap-4 group"
        >
          <div className="size-12 aspect-square rounded-2xl bg-primary/10 group-hover:bg-contrast/40 flex items-center justify-center">
            <img
              src="/images/logo-192x192.webp"
              alt="logo"
              className="rounded-full size-8 aspect-square"
            />
          </div>
          <p className="text-muted-foreground text-md font-thin w-full self-center">
            Chatte mit mir!
          </p>
        </a>
      </div>
    </div>
  );
}
