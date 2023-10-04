
import { createContext, useContext } from "react";
import React from "react";
import data from "../model/Myworkdb";
import TestimonialsData from "../model/TestimonialsDb";
import digiData from "../model/digitalDb";


const useMyWorks = createContext();

 function ContextProvider ({children}) {
    const[MyWorks, setMyworks] = React.useState(data)
    const[Testimonials, setTestimonials] = React.useState(TestimonialsData);
    const[Index, setIndex] = React.useState(0)
    const[digitalItems, setdigitslItems] = React.useState(digiData);
    const[Name, setName] = React.useState('')
    const[Email, setEmail] = React.useState('');
    const[Message, setMessage] = React.useState('');
    
    function DotClick (index){
        setIndex(index)
    }


    function prevSlide (){
        setIndex(preval => preval === 0 ? Testimonials.length - 1 : preval - 1)
    }

    function nextSlide (){
        setIndex((preval) => (preval === Testimonials.length - 1 ? 0 : preval + 1))
    }

    function OnFormSubmit (e){
        e.preventDefault();
        
        alert([`name : ${Name} \n email : ${Email} \n message : ${Message} ` ])
        setEmail('')
        setName('')
        setMessage('')
    }

    return <useMyWorks.Provider value={{MyWorks, Testimonials, Index, DotClick, prevSlide, nextSlide, digitalItems, Name, Email, Message, setEmail, setName, setMessage, OnFormSubmit}}>{children}</useMyWorks.Provider>
}

 function useContextApi (){
    return useContext(useMyWorks)
}

export {ContextProvider, useContextApi}