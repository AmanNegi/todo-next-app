import Image from "next/image";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Todo-App",
  description: "NextJS todo app with Pocketbase",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className + " p-6 md:p-10 lg:p-20 bg-emerald-100"}>
        {children}
        <div className="absolute bottom-2 right-2">
          <Image src="/icon.png" alt="logo" width={50} height={50} />
          {/* <img src="./icon.png" alt="" /> */}
        </div>
      </body>
    </html>
  );
}
