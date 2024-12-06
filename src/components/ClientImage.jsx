'use client'

import { useRef } from 'react'
import Image from 'next/image'

const ClientImage = ({ src, alt, className, priority = false, placeholder = '' }) => {
    const imageRef = useRef(null)

    let attributes = {}

    if (priority) attributes.priority = true

    if (placeholder) {
        attributes.placeholder = 'blur'
        attributes.blurDataURL = placeholder
    }

    return (
        <Image
            ref={imageRef}
            src={src}
            alt={alt}
            className={`${className} opacity-0 duration-300`}
            // priority={priority}
            onLoad={() => {
                if (imageRef.current) {
                    imageRef.current.classList.remove('opacity-0')
                }
            }}
            // onLoadingComplete={(image) => {
            //     image.classList.remove('opacity-0')
            // }}

            {...attributes}
        />
    )
}

export default ClientImage