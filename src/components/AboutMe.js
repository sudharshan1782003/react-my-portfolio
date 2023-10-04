import React from 'react'
import systemImage from '../assets/systemimage.jpg'

const AboutMe = () => {
  return (
    <div className='flex flex-col items-center'>
         <div className='flex flex-col items-center justify-center '>
        <h1 className='max-[768px]:hidden text-7xl font-bold' style={{opacity: 0.1, zIndex: 0}}>ABOUT ME</h1>
        <h3 className='text-xl text-sky-500  absolute font-bold min-[1900px]:text-3xl'>ABOUT ME</h3>
        </div>
    <div className='flex max-[768px]:flex  max-[768px]:flex-col  items-center  gap-12 pt-10'>
       <div>
        <img src={systemImage} className='w-80 h-72 min-[1900px]:w-96 min-[1900px]:h-96 max-[768px]:w-64  max-[768px]:h-64' style={{opacity : 0.4}}  />
       </div>
       <div className='flex flex-col gap-3 '>
        <h3 className='font-semibold text-lg  min-[1900px]:text-2xl max-[768px]:w-72  w-96'>Good design leads to a successfull bussiness. I can help with this!</h3>
        <p className='text-gray-500 w-96 max-[768px]:w-72 min-[1900px]:text-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolor nesciunt tempora dolorem a consequuntur maiores quaerat, rem et porro, illo ea possimus voluptatem nobis labore adipisci eos, amet repellat dignissimos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae similique laboriosam natus culpa. Dolores magni maxime voluptatum ratione esse fuga harum cum obcaecati asperiores repellat! Quia consectetur ex corrupti autem?</p>
        <button className='bg-sky-500 w-56 min-[1900px]:w-80 max-[768px]:w-44 max-[768px]:text-sm min-[1900px]:text-2xl text-black rounded-md hover:bg-black hover:border-r-2
            hover:border-sky-500 hover:text-white hover:border-b-2'>See What My Client Says</button>
       </div>
    </div>
    </div>
  )
}

export default AboutMe