import type { BgAsset } from "@/content/i18n";

type Props = {
  id: string;
  bg?: BgAsset;
  children: React.ReactNode;
};

export function Section({ id, bg, children }: Props) {
  const mobileSrc = bg?.mobile || bg?.placeholder;
  const desktopSrc = bg?.desktop || bg?.placeholder;

  return (
    <section
      id={id}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {mobileSrc && (
        <div className="absolute inset-0 md:hidden">
          <img src={mobileSrc} className="w-full h-full object-cover" alt="" />
        </div>
      )}

      {desktopSrc && (
        <div className="absolute inset-0 hidden md:block">
          <img src={desktopSrc} className="w-full h-full object-cover" alt="" />
        </div>
      )}

      <div className="absolute inset-0 bg-black/25" />
      <div className="relative z-10 w-full">{children}</div>
    </section>
  );
}
