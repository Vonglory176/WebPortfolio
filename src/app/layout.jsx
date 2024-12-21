import { Poppins } from "next/font/google"
import "@/styles/index.css"

// import openGraphImage from "@/assets/opengraph-image-full.png"
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
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL),

  openGraph: {
    images: { // ["/opengraph-image.png"],
      url: 'https://media.discordapp.net/attachments/937466658027618324/1316873426174218290/opengraph-image-2.png?ex=675ca173&is=675b4ff3&hm=34b47afd352959b64bcd0f991f9d25ee2381722ca5ad402c36d4754cb05a7936&=&format=webp&quality=lossless',
      width: 1200,
      height: 630,
      alt: "Skyler's Web-Portfolio Card",
    }
  },

  twitter: {
    card: "summary_large_image",
    site: "skylergconley.com", // Links to a Twitter profile (N/A)
    // title: "Skyler's Web-Portfolio | SkylerGConley.com",
    // description: "Skyler's personal website and portfolio as a Full-Stack Developer. Take a look around and see what I've been up to over the years! Updates come regularly, so check back often to see the latest progress in my journey.",
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

/*

BUGS ---------------------------------------------------------------------------

  Some images are TOO LARGE !!!!!!!!!!!!!!

  Project card backgrounds need to expand with hover-overlay

  Skill carousel not wide enough

  Generate OG-Image? https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image#image-files-jpg-png-gif


IDEAS ---------------------------------------------------------------------------

  Link modals to URLS (Can be linked to on resume)
  ADD AREA FOR DESCRIPTION AND EXTRA INFORMATION (Including learning goals) (Add desc to READMEs)
  Add filters for projects (Topics -> eCommerce, etc // Skills -> React, etc) (Maybe only highlight projects that match the filter)

  Make review system??

  Add a load animation for projects, making them appear one by one
  Add arrow key control to References and Skills


TODO ---------------------------------------------------------------------------

  Fix up Catalyst-Clone

  Update size of small projects images
  Make skill transition faster?

  Add "Axios" skill?

  Change transition opacity logic (References + Skills) to use useEffect

  Weird issue regarding min-height on sections in Discord ??
  Weird shadow/background issue in mobile when opening/closing a reference
  Weird issue with project tile height on other devices?


PROBLEMS ---------------------------------------------------------------------------

  ClientImage placeholder not working
  Skills are not static
  References are not static
  Contact is not static

  OG-Image uses discord link (Generate image? // ImageResponse)


*/