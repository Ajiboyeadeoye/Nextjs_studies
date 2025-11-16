// app/layout.js
import "./globals.css";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:{
    default: "",
    template: "%s | Codevolution ",
    absolute: "",


    },
  description: "Student Result Processing Portal - Adeyemi Federal University of Education, Nigeria",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
