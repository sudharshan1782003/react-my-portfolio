import React from 'react'
import { useContextApi } from '../contextAPI/useContext';
import { Link } from 'react-router-dom';

const MyWorks = () => {
    const {MyWorks} = useContextApi();
   
  return (
    <div className='flex flex-col items-center'>
     <div className='flex flex-col items-center justify-center '>
        <h1 className='max-[768px]:hidden text-7xl font-bold' style={{opacity: 0.1, zIndex: 0}}>MY WORKS</h1>
        <h3 className='text-xl text-sky-500  absolute font-bold min-[1900px]:text-3xl'>MY WORKS</h3>
        </div>
        <div className='pt-6 flex flex-wrap gap-8  justify-center'>
            {
                MyWorks.map(item => {
                    return (
                        <div key={item.id} className='flex flex-col items-center gap-3'>
                           <Link to={`myworks/${item.id}`}>
                           <img src={item.profileimage} alt={item.title + ' ' + 'image'} className='w-64 h-64 text-center rounded-md min-[1900px]:w-80 min-[1900px]:h-80' />
                           </Link>
                            <h3 className='font-semibold min-[1900px]:text-2xl'>{item.title}</h3>
                        </div>
                    )
                })
            }
        </div>
  
    </div>
  )
}

export default MyWorks