import React from 'react'
import { useParams } from 'react-router-dom'
import { useContextApi } from '../contextAPI/useContext';

const MyWorksPage = () => {
    const {MyWorks} = useContextApi()
   
    const {id} = useParams();
    const Itemid = parseInt(id)
    const myAllworks = MyWorks.find(item => item.id === Itemid);

  return (
   <div className='pl-72 max-[768px]:pl-0 pt-16 flex flex-col items-center gap-5'>
     {
        myAllworks && (
            <div>
            <h1 className='text-4xl max-[768px]:text-2xl text-sky-500 font-bold min-[1900px]:text-5xl'>{myAllworks.title}</h1>
            </div>
        )
     }
    <div  className='flex items-center flex-wrap justify-center gap-10 '>
       {
        myAllworks.images.map(item => {
            return (
                <div key={item.id}>
                   
                    <img src={item}  className='w-64 h-64 rounded-lg min-[1900px]:w-80 min-[1900px]:h-80' />
                </div>
            )
        })
       }
    </div>
   </div>
  )
}

export default MyWorksPage