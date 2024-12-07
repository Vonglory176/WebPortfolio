// This setting ensures that the route is treated as a static file, which is necessary for static exports.
export const dynamic = "force-static" 

// This property specifies the interval (in seconds) at which the static file should be revalidated. Adjust the value based on how frequently you expect the content to change.
export const revalidate = 60 // Revalidate every 60 seconds

export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin", "/privacy", "/not-found"],
      },
    ],
    sitemap: `${process.env.NEXT_PUBLIC_BASE_URL}/sitemap.xml`,
  }
}