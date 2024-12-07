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

          <Header />
          
          <main className='bg-gray-900 text-white'>

            {/* General Layout */}

            {/* Page Content */}
            {children}

          </main>

        </SiteProvider>
      </body>
    </html>
  )
}

// ClientImage placeholder not working
// Skills are not static
// References are not static
// Contact is not static

// Project card backgrounds need to expand with hover-overlay

// Skill carousel not wide enough


/*
TODO ---
Fix up Catalyst-Clone

Update size of small projects images
Make skill transition faster?

Add "Axios" skill?

Change transition opacity logic (References + Skills) to use useEffect

Weird issue regarding min-height on sections in Discord ??
Weird shadow/background issue in mobile when opening/closing a reference
Weird issue with project tile height on other devices?

IDEAS ---

Make landing background swap between images (background 4) via timer
Add a load animation for projects, making them appear one by one
Add arrow key control to References and Skills


*/