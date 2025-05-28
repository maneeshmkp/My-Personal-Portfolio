import { Inter } from "next/font/google"
import localFont from "next/font/local"

export const inter = Inter({ subsets: ["latin"] })

// Load Geist font for 3D text
export const geist = localFont({
  src: "../public/fonts/Geist-Bold.woff2",
  variable: "--font-geist",
  display: "swap",
})
