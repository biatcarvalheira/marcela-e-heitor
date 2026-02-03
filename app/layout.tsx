import "./globals.css";

export const metadata = {
  title: "Marcela & Heitor",
  description: "Casamento Marcela & Heitor - 2026",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
