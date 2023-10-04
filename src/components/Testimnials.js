import React from 'react'
import { useContextApi } from '../contextAPI/useContext'


const Testimnials = () => {

  const{Testimonials} = useContextApi()
  const {DotClick} = useContextApi();
  const {Index} = useContextApi();
  const {prevSlide} = useContextApi();
  const {nextSlide} = useContextApi();

  React.useEffect(() => {
    const HandleClick = setTimeout(() => {
        nextSlide()
    }, 5000);
    return () => {
        clearTimeout(HandleClick)
    }
}, [Index])

  return (
    <div className='flex flex-col items-center'>
        <div className='flex flex-col items-center justify-center '>
        <h1 className='max-[768px]:hidden text-7xl font-bold' style={{opacity: 0.1, zIndex: 0}}>TESTIMONIALS</h1>
        <h3 className='text-xl text-sky-500  absolute font-bold min-[1900px]:text-3xl'>TESTIMONIALS</h3>
        </div>
       <div className='flex flex-col gap-8 pt-10'>
       <div className='flex overflow-hidden width items-center justify-center'>
        {
          Testimonials.map((item, index) => {
            return (
              <div key={item.id}  className={` flex max-[768px]:flex max-[768px]:flex-col items-center gap-4 transition-opacity ${index === Index ? 'opacity-100 absolute' : 'opacity-0'} `}>
                <div>
                <img src={item.img} className={`w-72 h-72 min-[1900px]:w-96 min-[1900px]:h-96 rounded-lg`} />
                </div>
               <div className='w-96 max-[768px]:w-64'>
               <p className='text-gray-500 min-[1900px]:text-2xl'>{item.body}</p>
                <h3 className='font-semibold text-lg pt-2 min-[1900px]:text-3xl'>{item.clientName}</h3>
               </div>
              </div>
            )
          })
        }
        </div>
      <div className='flex items-center justify-center gap-4'>
        <button onClick={prevSlide} className='border-none'></button>
        {
          Testimonials.map((value, index) => (
            <button
            key={value.id}
            className={`${index === Index ? 'w-10 max-[768px]:w-7' : 'max-[768px]:w-3 w-4'} bg-sky-500 h-4 max-[768px]:h-3 border-2 border-sky-500 rounded-full`}
            onClick={() => DotClick(index)}
           
             />
          ))
          }
        <button onClick={nextSlide}></button>
      </div>

       </div>
    </div>
  )
}

export default Testimnials