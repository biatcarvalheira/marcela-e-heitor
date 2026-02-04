type Props = {
  id: string;
  bgMobileClass?: string;
  bgDesktopClass?: string;
  children: React.ReactNode;
};

export function Section({
  id,
  bgMobileClass,
  bgDesktopClass,
  children,
}: Props) {
  return (
    <section
      id={id}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Mobile background */}
      {bgMobileClass && (
        <div className={`absolute inset-0 md:hidden ${bgMobileClass}`} />
      )}

      {/* Desktop background */}
      {bgDesktopClass && (
        <div className={`absolute inset-0 hidden md:block ${bgDesktopClass}`} />
      )}

      {/* Content */}
      <div className="relative z-10 w-full">
        {children}
      </div>
    </section>
  );
}