import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Choose what you need
  display: "swap", // Optional: helps prevent layout shift
});

export const metadata: Metadata = {
  title: "Parafia Opatrzności Bożej w Jodłówce Wałkach  ",
  description:
    "Strona internetowa o parafii Opatrzności Bożej w Jodłówce Wałkach",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Nav></Nav>
        <main className="flex-1">{children}</main>
        <Footer></Footer>
      </body>
    </html>
  );
}
