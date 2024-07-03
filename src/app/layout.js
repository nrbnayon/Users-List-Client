import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "User List and Details Webpage",
  description:
    "This project is a simple Next.js application that displays a list of users and the details of the selected user. The design reference is taken from a Figma design, and data is fetched from a provided API.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
