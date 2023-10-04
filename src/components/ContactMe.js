import React from 'react'
import { FaInstagram } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { useContextApi } from '../contextAPI/useContext';

const ContactMe = () => {

    const{Name} = useContextApi();
    const{Email} = useContextApi();
    const{Message} = useContextApi();
    const{setName} = useContextApi();
    const{setEmail} = useContextApi();
    const{setMessage} = useContextApi();
    const{OnFormSubmit} = useContextApi();
    
  return (
    <div className='flex flex-col items-center gap-6'>
         <div className='flex flex-col items-center justify-center '>
        <h1 className='max-[768px]:hidden text-7xl font-bold' style={{opacity: 0.1, zIndex: 0}}>CONTACT ME</h1>
        <h3 className='text-xl text-sky-500  absolute font-bold min-[1900px]:text-3xl'>CONTACT ME</h3>
        </div>
        <div className='border-4 border-gray-900 box rounded-xl  h-full flex max-[768px]:flex max-[768px]:flex-col justify-evenly  gap-5  max-[768px]:pl-3 pt-5 pb-4'>
          <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-7'>
            <h3 className='text-sky-500 font-bold text-lg min-[1900px]:text-2xl'>Follow me on Social Media</h3>
            <div className='flex gap-7'>
            <FaInstagram size={20}  className='border-white cursor-pointer' />
            <FaFacebookF size={20} className='border-white cursor-pointer' />
            <FaTwitter size={20} className='border-white cursor-pointer' />
            <FaYoutube size={20} className='border-white cursor-pointer' />
            <FaPinterestP size={20} className='border-white cursor-pointer' />
            <FaLinkedinIn size={20} className='border-white cursor-pointer' />
            </div>
            </div>
            <div className='flex flex-col gap-5'>
                <h3 className='text-sky-500 font-bold text-lg min-[1900px]:text-2xl'>Follow Our Community</h3>
                <div className='flex gap-5'>
                   <FaTelegram className='cursor-pointer' />
                   <h2 className='min-[1900px]:text-xl'>- Telegram Community</h2>
                </div>
                <div className='flex gap-5'>
                    <FaFacebookSquare className='cursor-pointer' />
                    <h2 className='min-[1900px]:text-xl'>- Facebook Community</h2>
                </div>
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <h2 className='text-xl text-sky-500 font-bold min-[1900px]:text-2xl'>Get In Touch</h2>
            <input type="text" placeholder='Name' className='bg-gray-900 w-80 pl-3 rounded-md text-gray-400 outline-none min-[1900px]:text-2xl min-[1900px]:w-96' value={Name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder='Email' className='bg-gray-900 w-80 pl-3 rounded-md text-gray-400 outline-none min-[1900px]:text-2xl min-[1900px]:w-96' value={Email} onChange={(e) => setEmail(e.target.value)} />
            <textarea placeholder='Message' className='bg-gray-900 w-80 h-44 min-[1900px]:w-96 pl-3 rounded-md text-gray-400 outline-none min-[1900px]:text-2xl' value={Message} onChange={(e) => setMessage(e.target.value)}   />
            <button className='bg-sky-500 w-32 text-black rounded-md hover:bg-black hover:border-r-2
            hover:border-sky-500 hover:text-white hover:border-b-2 min-[1900px]:text-2xl' onClick={OnFormSubmit}>Submit</button>
          </div>
        </div>
    </div>
  )
}

export default ContactMe