'use client'

import { useEffect, useRef, useState, useMemo } from 'react'

const HobbyDisplay = () => {
    const hobbyRef = useRef(null)
    const [currentHobby, setCurrentHobby] = useState(0)
    // const hobbies = ['Software Developer', 'Mountain Biker', 'Model Maker', 'Gamer Geek', 'Chess Player', 'Dad Humorist']
    const hobbies = useMemo(() => ['Software Developer', 'Honors Student', 'Mountain Biker', 'Model Maker', 'Gamer Geek', 'Chess Player', 'Dad Humorist'], [])

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHobby(prevHobby => {
                const hobbyIndex = hobbies.findIndex(hobby => hobby === hobbies[prevHobby])
                return (hobbyIndex + 1) % hobbies.length
            })
        }, 3000)
        return () => clearInterval(interval)
    }, [hobbies])

    useEffect(() => {
        if (hobbyRef.current) {
            hobbyRef.current.classList.remove('opacity-100')
            hobbyRef.current.classList.add('opacity-0')
            setTimeout(() => {
                hobbyRef.current.classList.remove('opacity-0')
                hobbyRef.current.classList.add('opacity-100')
            }, 100)
        }
    }, [currentHobby])

    return (
        <h3 ref={hobbyRef} className='text-2xl w-full m-auto duration-300 transition-opacity opacity-0 text-blue-500' key={currentHobby}>{hobbies[currentHobby]}</h3>
    )
}

export default HobbyDisplay