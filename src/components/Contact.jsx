import React from 'react'
import SectionWrapper from './SectionWrapper'
import { FaEnvelope, FaPhone } from 'react-icons/fa'

const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.value);
    }

    return (
        <SectionWrapper id='contact' title='Contact'>
            <div className='flex flex-1 flex-col items-center justify-center p-4 gap-8'>

                {/* Contact Info */}
                <ul className='flex flex-col gap-4'>
                    <li className='flex flex-col justify-center gap-2'>
                        <h3 className='text-xl font-bold'>Email Me</h3>
                        <a 
                        href="mailto:skyler.m.smith@gmail.com" 
                        className='flex items-center gap-2 hover:text-blue-500'
                        >
                            <FaEnvelope size={18} className='text-blue-500' />
                            <p>skyler.m.smith@gmail.com</p>
                        </a>
                    </li>
                    <li className='flex flex-col justify-center gap-2'>
                        <h3 className='text-xl font-bold'>Text Me</h3>
                        <a 
                        href="tel:+17042000000" 
                        className='flex items-center gap-2 hover:text-blue-500'
                        >
                            <FaPhone size={18} className='text-blue-500' />
                            <p>+17042000000</p>
                        </a>
                    </li>                    
                </ul>

                {/* Contact Form */}
                <form 
                action=""
                className='flex flex-col gap-4 w-full'
                onSubmit={handleSubmit}
                >

                    {/* Subject */}
                    <div id='contact-form-subject' className='flex flex-col gap-2'>
                        <input 
                        type="text" 
                        name="Subject" 
                        className='bg-gray-800 p-2 rounded-lg focus:border-blue-500 focus:border-1' // after:content-[attr(name)]
                        />
                        <label htmlFor="Subject">Subject</label>
                    </div>

                    {/* Email */}
                    <div id='contact-form-email' className='flex flex-col gap-2'>
                        <input 
                        type="email" 
                        name="Email" 
                        className='bg-gray-800 p-2 rounded-lg focus:border-blue-500 focus:border-1'
                        />
                        <label htmlFor="Email">Email</label>
                    </div>

                    {/* Message */}
                    <div id='contact-form-message' className='flex flex-col gap-2'>
                        <textarea 
                        name="Message" 
                        className='bg-gray-800 p-2 rounded-lg focus:border-blue-500 focus:border-1 '
                        ></textarea>
                        <label htmlFor="Message">Message</label>
                    </div>

                    {/* Submit Button */}
                    <button 
                    type="submit"
                    className='bg-blue-700 p-2 rounded-lg hover:bg-blue-800'
                    >Send</button>
                </form>

            </div>
        </SectionWrapper>
    )
}

export default Contact
