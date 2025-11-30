"use client";

import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ErrorWrapper } from "../app/error-wrapper"



export function SidebarV3() {
  return (
    <aside className="w-64 min-h-screen bg-white shadow-lg p-4 space-y-4 border-r">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Dashboard</h2>
      <nav className="space-y-2">
        <Link href="/dashboard" className="block p-2 rounded hover:bg-blue-50 text-gray-700">Home</Link>
        <Link href="/results" className="block p-2 rounded hover:bg-blue-50 text-gray-700">Results</Link>
        <Link href="/profile" className="block p-2 rounded hover:bg-blue-50 text-gray-700">Profile</Link>
        <Link href="/settings" className="block p-2 rounded hover:bg-blue-50 text-gray-700">Settings</Link>
      </nav>
    </aside>
  );
}

export default function LandingHero({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      
      {/* HEADER */}
      <header
        style={{
          backgroundColor: "lightblue",
          padding: "1rem",
        }}
        className="w-full"
      >
        <p className="text-gray-800 font-semibold">Header</p>
      </header>

      {/* ERROR WRAPPER */}
      <ErrorWrapper>
        {children}
      </ErrorWrapper>

      {/* HERO SECTION */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20 text-center flex-grow">
        <div className="max-w-3xl mx-auto px-6">
          <GraduationCap className="w-16 h-16 text-blue-600 mx-auto mb-4" />

          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Adeyemi Federal University of Education
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            Welcome to the Student Result Processing Portal.
          </p>

          <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg text-lg">
            Check Result
          </Button>

          <div className="mt-6 space-y-2">
            <Link href="/blog" className="block text-blue-600 hover:underline">
              Visit our Blog
            </Link>

            <div className="flex justify-center gap-4 text-blue-600">
              <Link href="/articles/breaking-news-123?lang=eng" className="hover:underline">
                Read in English
              </Link>
              <Link href="/articles/breaking-news-123?lang=fr" className="hover:underline">
                Read in French
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          backgroundColor: "lightgray",
          padding: "1rem",
        }}
        className="w-full text-center"
      >
        <p className="text-gray-700">Footer</p>
      </footer>
    </div>
  );
}
