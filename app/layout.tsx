import Image from "next/image";
import { Inter } from "next/font/google";
import "./globals.css";

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
        </div>
      </body>
    </html>
  );
}
