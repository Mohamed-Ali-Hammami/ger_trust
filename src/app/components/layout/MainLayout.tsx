'use client';
import { ReactNode, useState } from "react";
import Navbar from "../Navbar";

interface MainLayoutProps {
  children: ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen bg-white">
      <main className="flex-1">
        <Navbar />
        <div className="container py-8">
          {children}
        </div>
      </main>
    </div>
  );
}
