import React, { useRef } from 'react'
import Card, { Cardprops } from './Card'
import { FaAngleRight, FaAngleLeft } from "react-icons/fa6";
import { Bdata } from '../store/movieSlice';

interface HorizontalScollCardProps {
    data: Bdata[]; 
    heading?: string;
    trending: boolean;
    media_type?: string;
}
const HorizontalScollCard:React.FC<HorizontalScollCardProps> = ({data, heading, trending, media_type}) => {
    const contaierRef = useRef<HTMLDivElement>(null)
    
    const handleNext = ()=>{
        if (contaierRef.current)
        contaierRef.current.scrollLeft += 300
    }
    const handlePrevious = ()=>{
        if (contaierRef.current)
        contaierRef.current.scrollLeft -= 300
    }
  return (
    <div className='container mx-auto px-3 my-10'>
          <h2 className='text-xl lg:text-2xl font-bold mb-3 text-white capitalize'>{heading}</h2>

          <div className=' relative'>
                <div  ref={contaierRef} className='grid grid-cols-[repeat(auto-fit,230px)] grid-flow-col gap-6 overflow-hidden overflow-x-scroll relative z-10 scroll-smooth transition-all scrolbar-none'>
                    {
                        data.map((dt,index)=>{
                        return (
                            <Card key={dt.id+"heading"+index} data={dt} index={index+1} trending={trending} media_type={media_type}/>
                        )
                        })
                    }
                </div>

                <div className='absolute top-0 hidden lg:flex justify-between w-full h-full items-center'>
                    <button onClick={handlePrevious} className='bg-white p-1 text-black rounded-full -ml-2 z-10'>
                        <FaAngleLeft/>
                    </button>
                    <button onClick={handleNext} className='bg-white p-1 text-black rounded-full -mr-2 z-10'>
                        <FaAngleRight/>
                    </button>
                </div>
          </div>
          
        </div>
  )
}

export default HorizontalScollCard
