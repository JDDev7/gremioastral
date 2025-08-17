import type { Metadata } from "next";
import "./globals.css";
import Lenis from "./lenis";

export const metadata: Metadata = {
  title: "Gremio Astral",
  description: "Vive grandiosas aventuras en Dilmund! Gremio Astral es una comunidad española de rol en mesa y virtual donde puedes crear tus propias campañas o unirte a las de otros jugadores.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        <Lenis>
        {children}
        </Lenis>
      </body>
    </html>
  );
}
