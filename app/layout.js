import { Roboto } from "next/font/google";
import "./globals.css";
import TopNav from "@/components/organisms/topnav/TopNav";
import MidNav from "@/components/organisms/midnav/MidNav";
import BottomNav from "@/components/organisms/bottomnav/BottomNav";
import { SessionProvider } from "next-auth/react";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "500", "700", "900"],
});
export const metadata = {
  title: "PORTO",
  description: "PORTO is a ecommerce website",
};

export default function RootLayout({
  children,
  params: { session, ...params },
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-gray-50`}>
        <SessionProvider session={session}>
          <div className="bg-blue-500">
            <div className="max-w-5xl mx-auto ">
              <TopNav />
              <MidNav />
            </div>
          </div>
          <BottomNav />
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
