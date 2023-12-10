import React from 'react'
import Daniel from '../../public/assets/Daniel-hagan.webp'
import DrNaomi from '../../public/assets/Dr.-Naomi.webp'
import Eric from '../../public/assets/Eric.webp'
import Florence from '../../public/assets/Florence-Adjepong.jpg'
import Josephine from '../../public/assets/Josephine.webp'
import Julia from '../../public/assets/Julia.webp'
import Gavor from '../../public/assets/Gavor.webp'
import MyCarousel from './Carousel'
import Image from 'next/image'

const data=[
  {
    img:Daniel,
    name:'Mr Daniel',
    status:''
  },
  {
    img:DrNaomi,
    name:'Dr Naomi',
    status:''
  },
  {
    img:Eric,
    name:'Prof Eric',
    status:''
  },
  {
    img:Florence,
    name:'Madam Florence',
    status:''
  },
  {
    img:Julia,
    name:'Dr Julia',
    status:''
  },
  {
    img:Gavor,
    name:'Prof Gavor',
    status:''
  },
  {
    img:Josephine,
    name:'Madam Josephine',
    status:''
  },

]


const Directors = () => {
  return (
    <div className='bg-gray-500 w-full md:py-14 p-4 md:p-7 mb-7'>
    
     <MyCarousel slidsToShow={3} isHover={true}>
         {
        data.map((item,index)=>{
          return(
              
            <div key={index} className='slider p-3 md:px-10 flex flex-col gap-3 bg-slate-50 h-[45vw]'>
              
              <div>
                 <Image
              src={item.img}
              alt={item.name}
              priority ={true}
              style={{
                borderRadius:'15px'
              }}
              />
              </div>
              <div className='text-xl font-medium text-green-700'>
                {item.name}
              </div>
            </div>
          )
        })
      }
      </MyCarousel>
    </div>
  )
}

export default Directors