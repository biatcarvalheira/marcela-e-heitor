type Props = {
  id: string;
  bgMobileClass?: string;
  bgDesktopClass?: string;
  overlayClassName?: string;
  children: React.ReactNode;
};

export function Section({
  id,
  bgMobileClass,
  bgDesktopClass,
  overlayClassName,
  children,
}: Props) {
  return (
    <section
      id={id}
      className="
        relative
        min-h-screen
        flex
        items-center
        justify-center
        overflow-hidden
        bg-[#debcbb]
      "
    >
      {bgMobileClass && (
        <div className={`absolute inset-0 md:hidden ${bgMobileClass} z-0`} />
      )}

      {bgDesktopClass && (
        <div className={`absolute inset-0 hidden md:block ${bgDesktopClass} z-0`} />
      )}

      {overlayClassName && (
        <div className={`absolute inset-0 ${overlayClassName} z-10`} />
      )}

      <div className="relative z-20 w-full h-full px-12 sm:px-16 md:px-20">
        {children}
      </div>
    </section>
  );
}