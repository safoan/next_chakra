'use client'

import type { Metadata } from "next";
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ChakraProvider>
          <Navbar/>
          
          {children}
          <Footer/>
        </ChakraProvider>
      </body>
    </html>
  );
}
