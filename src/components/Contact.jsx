import React, { useEffect, useRef, useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { FaEnvelope, FaPhone } from 'react-icons/fa'
import autosize from 'autosize'

const Contact = () => {
    const [formData, setFormData] = useState({
        email: '',
        subject: '',
        message: ''
    })
    const [formErrors, setFormErrors] = useState({
        email: false,
        subject: false,
        message: false,
        errorExists: false
    })

    // Auto-resize textarea
    const textareaRef = useRef(null)
    useEffect(() => {
        if (textareaRef.current) {
            autosize(textareaRef.current)
        }
    }, [])

    // Handle form input changes
    const handleChange = (e) => {
        console.log(e.target.value)
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault()

        if (validateForm()) console.log(formData)

        else console.log('Form is invalid')
    }

    // For form validation
    const validateForm = () => {
        const { email, subject, message } = formData

        const emailValid = email.trim() !== ''
        const subjectValid = subject.trim() !== ''
        const messageValid = message.trim() !== ''
        const errorCheck = emailValid && subjectValid && messageValid

        setFormErrors({
            email: !emailValid,
            subject: !subjectValid,
            message: !messageValid,
            errorExists: errorCheck
        })

        return errorCheck
    }

    const email = 'SkylerGConley@gmail.com'
    const phone = '+1-(000)-000-0000'

    return (
        <SectionWrapper id='contact' title='Contact'>
            {/* <div className='flex flex-1 flex-col items-center justify-center px-4 py-8 bg-gray-800 bg-opacity-30 relative'> */}


                <div className="content-wrapper flex flex-wrap justify-center items-start gap-12 w-full"> {/* 619px */}

                    {/* Contact Info */}
                    <ul className='flex flex-col justify-center gap-4'>
                        <li className='flex flex-col justify-center gap-2'>
                            <h3 className='text-lg font-bold'>Email Me</h3>
                            <a 
                            href={`mailto:${email}`} 
                            className='flex items-center gap-2 hover:text-blue-500 duration-300'
                            >
                                <FaEnvelope size={18} className='text-blue-500' />
                                <p>{email}</p>
                            </a>
                        </li>
                        <li className='flex flex-col justify-center gap-2'>
                            <h3 className='text-lg font-bold'>Text Me</h3>
                            <a 
                            href={`tel:${phone}`} 
                            className='flex items-center gap-2 hover:text-blue-500 duration-300'
                            >
                                <FaPhone size={18} className='text-blue-500' />
                                <p>{phone}</p>
                            </a>
                        </li>                    
                    </ul>

                    {/* Contact Form */}
                    <form 
                    action=""
                    className='flex flex-col gap-8 w-full max-w-[536px]'
                    onSubmit={handleSubmit}
                    >
                        <h2 className='text-2xl md:text-3xl font-bold'>Message Me Directly</h2>

                        {/* Email */}
                        <div id='contact-form-email' className={`flex flex-col gap-2 border-b border-gray-400 duration-300 focus-within:border-white ${formData.email ? 'is-active' : ''} ${formErrors.email ? 'has-error' : ''}`}>
                            <input 
                            type="email" 
                            name="email" 
                            className='bg-transparent my-2 p-2 rounded focus:outline-none z-20'
                            value={formData.email}
                            onChange={handleChange}
                            />
                            <label htmlFor="Email" className='text-gray-400 z-10'>Email</label>
                        </div>

                        {/* Subject */}
                        <div id='contact-form-subject' className={`flex flex-col gap-2 border-b border-gray-400 duration-300 focus-within:border-white ${formData.subject ? 'is-active' : ''} ${formErrors.subject ? 'has-error' : ''}`}>
                            <input 
                            type="text" 
                            name="subject" 
                            className='bg-transparent my-2 p-2 rounded focus:outline-none z-20'
                            value={formData.subject}
                            onChange={handleChange}
                            />
                            <label htmlFor="Subject" className='text-gray-400 z-10'>Subject</label>
                        </div>

                        {/* Message */}
                        <div id='contact-form-message' className={`flex flex-col gap-2 border-b border-gray-400 duration-300 focus-within:border-white ${formData.message ? 'is-active' : ''} ${formErrors.message ? 'has-error' : ''}`}>
                            <textarea 
                            ref={textareaRef}
                            name="message" 
                            className='bg-transparent my-2 p-2 rounded resize-none focus:outline-none z-20'
                            value={formData.message}
                            onChange={handleChange}
                            ></textarea>
                            <label htmlFor="Message" className='text-gray-400 z-10'>Message</label>
                        </div>

                        {/* Submit Button */}
                        <button 
                        type="submit"
                        className='bg-blue-700 p-2 rounded-lg hover:bg-blue-800 duration-300'
                        >Send</button>

                        {formErrors.errorExists && <p className='text-red-500'>Please make sure all fields are filled out and valid</p>}
                    </form>
                </div>

            {/* </div> */}
        </SectionWrapper>
    )
}

export default Contact
