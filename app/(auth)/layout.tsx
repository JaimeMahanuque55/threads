import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";

import '../globals.css';

export const metadata = {
  title: 'Threads',
  description: 'Clone da aplicacao da Meta "Threads"'
};

const inter = Inter({ subsets: ["latin"]})

export default function RootLayout({ children}: {children: React.ReactNode}) {
  return (
    <ClerkProvider>
      <html lang="pt-BR">
        <body className={`${inter.className} bg-dark-1`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
};