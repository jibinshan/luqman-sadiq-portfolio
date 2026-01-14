import type { Metadata } from "next";
import { Cormorant_Garamond, Montserrat } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { Providers } from "@/components/providers";
import { SmoothScroll } from "@/components/smooth-scroll";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Luqman Sadiq | The Realtor",
  description: "Architect of Strategic Transactions. Specific expertise in capital mobilization and luxury real estate dominance.",
  icons: {
    icon: "/fav.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${cormorant.variable} ${montserrat.variable} antialiased bg-[#0A0A0A] text-[#F9F9F9] selection:bg-[#F9F9F9] selection:text-[#0A0A0A]`}
      >
        <Providers>
          <SmoothScroll>
            {children}
            <Toaster position="bottom-right" toastOptions={{
              style: {
                background: '#F9F9F9',
                color: '#0A0A0A',
                fontFamily: 'var(--font-montserrat)',
              },
            }} />
          </SmoothScroll>
        </Providers>
      </body>
    </html>
  );
}
