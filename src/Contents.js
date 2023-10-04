import React from 'react'
import Home from './components/Home'
import ServicesOffer from './components/ServicesOffer'
import MyWorks from './components/MyWorks'
import AboutMe from './components/AboutMe'
import Testimnials from './components/Testimnials'
import DigitalProducts from './components/DigitalProducts'
import ContactMe from './components/ContactMe'

const Contents = () => {
  return (
    <div>
      <div className='max-[768px]:hidden pl-64 text-white'>
       <Home />
      </div> 
      <div id='SERVICES I OFFER' className='max-[768px]:pl-0 pl-64 text-white pt-16 pb-6'>
       <ServicesOffer />
      </div>
      <div id='myworks' className='max-[768px]:pl-0 pl-64 text-white pt-16 pb-6'>
       <MyWorks  />
      </div>
      <div id='about me' className='max-[768px]:pl-0 pl-64 text-white pt-16 pb-6'>
       <AboutMe />
      </div>
      <div id='testimonials' className='max-[768px]:pl-0 pl-64 text-white pt-16 pb-6'>
       <Testimnials />
      </div>
      <div id='digital products' className='max-[768px]:pl-0 pl-64 text-white pt-16 pb-6'>
       <DigitalProducts />
      </div>
      <div id='contactme' className='max-[768px]:pl-0 pl-64 text-white pt-16 pb-6'>
       <ContactMe />
      </div>
    </div>
  )
}

export default Contents