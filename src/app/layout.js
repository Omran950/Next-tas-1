import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar"; // Importing Sidebar

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "NextJs App",
  description: "NextJs App",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen flex flex-col bg-gray-100 text-gray-800 ${geistSans.variable} ${geistMono.variable}`}
      >
        <header className="sticky top-0 z-50 bg-white shadow-md w-full">
          <Header />
        </header>

        <div className="flex flex-1 ">
          <Sidebar />

          <main className="flex-grow ml-64 p-6">
            <div className=" p-6">{children}</div>
          </main>
        </div>

        <footer className="bg-gray-900 text-white py-6 mt-8">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
