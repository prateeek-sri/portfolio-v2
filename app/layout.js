import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/libs/ThemeContext";
import { Outfit, Poppins } from "next/font/google";
import { Toaster } from "react-hot-toast";
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "prateek ✦ developer, designer",
  description: "Modern portfolio built with Next.js and Tailwind CSS",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} ${poppins.variable} font-outfit transition-colors duration-300`}
      >
        <ThemeProvider>
          <Header />
          <main className="min-h-screen">
            {children}
            <Toaster
  position="top-center"
  reverseOrder={false}
/>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
