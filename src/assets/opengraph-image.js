import { ImageResponse } from 'next/og'
import openGraphImage from "@/assets/opengraph-image.png"
 
export const runtime = 'edge'
 
// Image metadata
export const alt = "Skyler's Web-Portfolio Card"
export const size = {
  width: 1200,
  height: 630,
}
 
export const contentType = 'image/png'
 
// Image generation
export default async function Image() {
  // Font
  // const interSemiBold = fetch(
  //   new URL('./Inter-SemiBold.ttf', import.meta.url)
  // ).then((res) => res.arrayBuffer())
 
  return new ImageResponse(
    (
      // ImageResponse JSX element
      
      // <div
      //   style={{
      //     fontSize: 128,
      //     background: 'white',
      //     width: '100%',
      //     height: '100%',
      //     display: 'flex',
      //     alignItems: 'center',
      //     justifyContent: 'center',
      //   }}
      // >
      //   About Acme
      // </div>

      <h1>Hello World</h1>

      // <img
      //   src={openGraphImage} 
      //   alt="OpenGraph Image" 
      //   width={1200} 
      //   height={630} 
      // />
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      ...size,
      // fonts: [
      //   {
      //     name: 'Inter',
      //     data: await interSemiBold,
      //     style: 'normal',
      //     weight: 400,
      //   },
      // ],
    }
  )
}