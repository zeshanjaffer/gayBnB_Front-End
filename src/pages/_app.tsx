import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/router";
import Layout from "@/components/layout"; // Dashboard Layout
import Navbar from "@/components/navbar"; // Main Menu
import Footer from "@/components/footer"; // Footer
import { Nunito_Sans } from "next/font/google";

const nunitoSans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
  variable: "--font-nunito-sans",
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  // Check if it's a dashboard page (starts with "/dashboard")
  const isDashboardPage = router.pathname.startsWith("/dashboard");

  return (
    <>
      {isDashboardPage ? (
        // Dashboard Pages → Show Sidebar + Topbar (No Navbar, No Footer)
        
        <Layout>
          <Component {...pageProps} />
        </Layout>
      ) : (
        // All Other Pages (Show Navbar + Footer)
        <>
          {/* <Navbar /> */}
          <main className="flex-grow ">
            <Component {...pageProps} />
          </main>
          {/* <Footer /> */}
        </>
      )}
    </>
  );
}
