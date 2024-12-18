import { Inter } from "next/font/google";
import "@styles/globals.css";
// import ".styles/globals.css";
// import "./globals.css";


const inter = Inter({
  subsets: ["latin"],
  weights: ["400", "600", "700"],
});

export const metadata = {
  title: "Dimen - Home Page",
  description: "Dimen Home Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
