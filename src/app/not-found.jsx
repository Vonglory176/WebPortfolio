'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import SectionWrapper from '@/components/SectionWrapper'

export default function NotFound() {

  // redirect('/')

  const router = useRouter()

  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace('/')
    }, 5000)

    return () => clearTimeout(timer)
  }, [router])

  return (
    <SectionWrapper id='not-found' title='Not Found'>
      {/* <div className="m-auto space-y-5 text-center">
        <h1 className="text-3xl font-bold">Not Found</h1>
        <p>Looks like this page doesn&apos;t exist.</p>
      </div> */}

      <div className="content-wrapper flex flex-col max-w-[480px] items-center justify-center text-center gap-4"> {/* 619px */}

        <h1 className='text-3xl sm:text-4xl font-bold'>The page you are looking for does not exist<span className='text-blue-500'>.</span></h1>

        <hr className='w-full border-t-2 border-blue-500' />

        <p className='text-xl'>If you are not redirected within 5 seconds, please <Link href='/' className='text-blue-500'>click here</Link>.</p>

      </div>
    </SectionWrapper>
  );
}
