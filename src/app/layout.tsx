import "./globals.css";
import type { Metadata } from "next";
import { Inter, Jost } from "next/font/google";
// import Navbar from '@/components/nabvar/navbar'
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/nabvar/Navbar";
import NavSearch from "@/components/mainNavSearch/NavSearch";
import Providers from "@/utils/provider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
  variable: "--font-jost",
});

export const metadata: Metadata = {
  title: "Farms Easy",
  description: "Website for Farm Products",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={jost.variable}>
      <link
        rel="stylesheet"
        type="text/css"
        href="../assets/flaticons/flaticon_farmacy.css"
      />
      <body className="font-jost">
        {/* <NavSearch/> */}
        <Providers>
          {/* <SearchHeader/> */}
          <Navbar />
          {children}
          <Footer />
          <ToastContainer />
        </Providers>
      </body>
    </html>
  );
}
