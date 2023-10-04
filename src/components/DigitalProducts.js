import React from 'react'
import { useContextApi } from '../contextAPI/useContext'


const DigitalProducts = () => {
    const {digitalItems} = useContextApi()
  return (
    <div className='flex flex-col items-center justify-center'>
         <div className='flex flex-col items-center justify-center '>
        <h1 className='max-[768px]:hidden text-7xl font-bold' style={{opacity: 0.1, zIndex: 0}}>DIGITAL PRODUCTS</h1>
        <h3 className='text-xl text-sky-500  absolute font-bold min-[1900px]:text-3xl'>DIGITAL PRODUCTS</h3>
        </div>
        <div className='pt-10'>
         <section className='flex gap-3 flex-wrap items-center justify-center max-[768px]:gap-6'>
            {
                digitalItems.map(item => (
                    <article className='bg-gray-900 rounded-lg w-80 min-[1900px]:w-96 pb-4 flex flex-col items-center  gap-3 ' key={item.id}>
                        <img src={item.image} className='w-80 min-[1900px]:w-96 min-[1900px]:h-96 only: h-56 rounded-t-lg'  />
                        <h3 className='text-sky-500 font-semibold min-[1900px]:text-2xl text-center'>{item.title}</h3>
                        <p className='w-72 min-[1900px]:w-96 min-[1900px]:p-2 text-gray-400 min-[1900px]:text-2xl'>{item.body}</p>
                        <button className='bg-sky-500 w-48 text-black rounded-md text-base min-[1900px]:text-2xl hover:bg-black hover:border-r-2
            hover:border-sky-500 hover:text-white hover:border-b-2'>Go To Gumroad</button>
                    </article>
                ))
            }
            </section>   
        </div>
    </div>
  )
}

export default DigitalProducts