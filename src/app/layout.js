import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RiaJul Pro | Frontend Developer with React and Next.js Experience",
  description:
    "If you need a website with a good UI/UX, you can join us today.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-bodyBg text-white`}>
        {children}
      </body>
    </html>
  );
}
