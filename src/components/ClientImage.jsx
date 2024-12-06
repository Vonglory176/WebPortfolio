'use client'

import Image from 'next/image'

const ClientImage = ({ src, alt, className }) => {
    return (
        <Image
            src={src}
            alt={alt}
            className={`${className} opacity-0 duration-300`}
            onLoadingComplete={(image) => {
                image.classList.remove('opacity-0')
            }}
        />
    )
}

export default ClientImage