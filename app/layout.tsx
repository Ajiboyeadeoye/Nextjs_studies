// app/layout.js
import "./globals.css";
import { Metadata } from "next";
import React from "react";


export const metadata: Metadata = {
  title:{
    default: "",
    template: "%s | Codevolution ",
    absolute: "",


    },
  description: "Student Result Processing Portal - Adeyemi Federal University of Education, Nigeria",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
