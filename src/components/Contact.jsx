import React, { useEffect, useRef, useState } from 'react'
import SectionWrapper from './SectionWrapper'
import { FaEnvelope, FaPhone } from 'react-icons/fa'
import autosize from 'autosize'
import emailjs from 'emailjs-com'

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
        general: false,
        errorExists: false
    })
    const [formSuccess, setFormSuccess] = useState(false)

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

        setFormSuccess(false)

        if (validateForm()) {
            const templateParams = {
                from_name: formData.email,
                to_name: 'Skyler',
                to_email: process.env.REACT_APP_SKYLER_EMAIL, // Replace with your primary email
                subject: formData.subject,
                message: formData.message
            }

            emailjs.send(
                process.env.REACT_APP_EMAILJS_SERVICE_ID, 
                process.env.REACT_APP_EMAILJS_TEMPLATE_ID, 
                templateParams, 
                process.env.REACT_APP_EMAILJS_PUBLIC_KEY
            )
                .then((response) => {
                    console.log('SUCCESS!', response.status, response.text)
                    setFormData({email: '', subject: '', message: ''})
                    setFormSuccess("Message sent successfully, thank you for contacting me!")
                }, (error) => {
                    console.log('FAILED...', error)
                    setFormErrors({...formErrors, general:"Something went wrong, please try again later", errorExists: true})
                })
        } else {
            console.log('Form is invalid')
        }
    }

    // For form validation
    const validateForm = () => {
        const { email, subject, message } = formData
        console.log(email, subject, message)

        const emailValid = Boolean(email.trim())
        const subjectValid = Boolean(subject.trim())
        const messageValid = Boolean(message.trim())
        const errorCheck = emailValid && subjectValid && messageValid

        console.log(errorCheck)

        setFormErrors({
            email: emailValid ? false : "Email cannot be blank",
            subject: subjectValid ? false : "Subject cannot be blank",
            message: messageValid ? false : "Message cannot be blank",
            errorExists: !errorCheck
        })

        return errorCheck
    }

    const email = process.env.REACT_APP_SKYLER_EMAIL
    const phone = process.env.REACT_APP_SKYLER_PHONE
    const phoneFormatted = process.env.REACT_APP_SKYLER_PHONE_FORMATTED

    return (
        <SectionWrapper id='contact' title='Contact'>
            {/* <div className='flex flex-1 flex-col items-center justify-center px-4 py-8 bg-gray-800 bg-opacity-30 relative'> */}


                <div className="content-wrapper flex flex-wrap justify-center items-start gap-12 w-full pb-12"> {/* 619px */}

                    {/* Contact Info */}
                    <ul className='flex flex-col justify-center gap-4'>
                        <li className='flex flex-col justify-center gap-2'>
                            <h3 className='text-lg font-bold'>Email Me</h3>
                            <a 
                            aria-label="send an email"
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
                            aria-label="send a text"
                            // href={`tel:${phone}`} 
                            href={`https://wa.me/${phone}`}
                            className='flex items-center gap-2 hover:text-blue-500 duration-300'
                            >
                                <FaPhone size={18} className='text-blue-500' />
                                <p>{phoneFormatted}</p>
                            </a>
                        </li>                    
                    </ul>

                    {/* Contact Form */}
                    <form 
                    action=""
                    className='flex flex-col gap-12 w-full max-w-[536px] relative pt-14'
                    onSubmit={handleSubmit}
                    >
                        <h2 className='text-2xl md:text-3xl font-bold absolute top-0'>Message Me <span className='text-blue-500'>Directly</span></h2>

                        {/* Email */}
                        <div id='contact-form-email' className={`flex flex-col gap-2 border-b border-gray-400 duration-300 focus-within:border-white relative ${formData.email ? 'is-active' : ''} ${formErrors.email ? 'has-error' : ''}`}>
                            <input 
                            type="email" 
                            name="email" 
                            id="email-input"
                            className='bg-transparent my-2 p-2 rounded focus:outline-none z-20'
                            value={formData.email}
                            onChange={handleChange}
                            />
                            <label htmlFor="email-input" className='text-gray-400 z-10'>Email</label>
                            {formErrors.email && <p className='text-red-500 absolute bottom-[-28px] left-[8px] fade-in text-sm'>{formErrors.email}</p>}
                        </div>

                        {/* Subject */}
                        <div id='contact-form-subject' className={`flex flex-col gap-2 border-b border-gray-400 duration-300 focus-within:border-white relative ${formData.subject ? 'is-active' : ''} ${formErrors.subject ? 'has-error' : ''}`}>
                            <input 
                            type="text" 
                            name="subject" 
                            id="subject-input"
                            className='bg-transparent my-2 p-2 rounded focus:outline-none z-20'
                            value={formData.subject}
                            onChange={handleChange}
                            />
                            <label htmlFor="subject-input" className='text-gray-400 z-10'>Subject</label>
                            {formErrors.subject && <p className='text-red-500 absolute bottom-[-28px] left-[8px] fade-in text-sm'>{formErrors.subject}</p>}
                        </div>

                        {/* Message */}
                        <div id='contact-form-message' className={`flex flex-col gap-2 border-b border-gray-400 duration-300 focus-within:border-white relative ${formData.message ? 'is-active' : ''} ${formErrors.message ? 'has-error' : ''}`}>
                            <textarea 
                            ref={textareaRef}
                            name="message" 
                            id="message-input"
                            className='bg-transparent my-2 p-2 rounded resize-none focus:outline-none z-20'
                            value={formData.message}
                            onChange={handleChange}
                            ></textarea>
                            <label htmlFor="message-input" className='text-gray-400 z-10'>Message</label>
                            {formErrors.message && <p className='text-red-500 absolute bottom-[-28px] left-[8px] fade-in text-sm'>{formErrors.message}</p>}
                        </div>

                        {/* Submit Button */}
                        <button 
                        aria-label="Send Message"
                        type="submit"
                        className='bg-blue-700 px-4 py-3 rounded hover:bg-blue-800 duration-300'
                        >Send</button>

                        {
                        formErrors.general ? // errorExists ?

                            <p className='text-red-500 absolute bottom-[-48px] fade-in'>{formErrors.general}</p> // Please make sure all fields are filled out and valid

                        :

                            formSuccess && <p className='text-green-500 absolute bottom-[-48px] fade-in'>{formSuccess}</p>
                        }
                    </form>
                </div>

            {/* </div> */}
        </SectionWrapper>
    )
}

export default Contact
