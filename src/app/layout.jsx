import { Poppins } from "next/font/google"
import "@/styles/index.css"

import { SiteProvider } from "@/context/SiteContext"
import Header from "@/components/Header"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata = {
  title: {
    default: "Skyler's Web-Portfolio | SkylerGConley.com",
    template: "%s | SkylerGConley.com",
  },
  description: "Skyler's personal website and portfolio as a Full-Stack Developer. Take a look around and see what I've been up to over the years! Updates come regularly, so check back often to see the latest progress in my journey.",
  twitter: {
    card: "summary_large_image",
    // site: "@SkylerGConley", // Links to a Twitter profile (N/A)
  },
  // themeColor: "#1a202c",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} antialiased`} // bg-gray-900 text-white
      >
        <SiteProvider>

          {/* <div className="App"> */}

            {/* General Layout */}
            <Header />

            {/* Page Content */}
            {children}

          {/* </div> */}

        </SiteProvider>
      </body>
    </html>
  )
}
