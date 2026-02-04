import "./globals.css";
import { Shadows_Into_Light, Style_Script } from "next/font/google";

const shadowsIntoLight = Shadows_Into_Light({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-sketch",
});

const styleScript = Style_Script({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-title",
});

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
    <html
      lang="pt-BR"
      className={`${shadowsIntoLight.variable} ${styleScript.variable}`}
    >
      <body className={`${shadowsIntoLight.variable} ${styleScript.variable}`}>
        {children}
      </body>
    </html>
  );
}