import type { Metadata } from "next";
import "../_styles/globals.css";
import { cn } from "@app/_lib/utils";

// export const metadata: Metadata = {
//   title: "Hume AI - EVI - Next.js Starter",
//   description: "A Next.js starter using Hume AI's Empathic Voice Interface",
// };

export default function  Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
        {children}
    </div>
      
  )

}
