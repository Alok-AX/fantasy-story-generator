import { Inter } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Fantasy Story Generator",
  description: "Generate personalized fantasy stories",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>{children}</body>
    </html>
  );
}
