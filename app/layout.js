import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | LinkedIn",
    default: "LinkedIn",
  },
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className='min-h-screen flex flex-col'>
          {/* Toaster */}

          {/* Header */}
          <header className='border-b top-0 sticky bg-white z-10'>
            <Header />
          </header>

          <div className='bg-[#f4F2ED] flex-1 w-full'>
            <main>{children}</main>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
