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
    <div className='bg-gray-700 w-full py-14 p-7'>
    
     <MyCarousel slidsToShow={3}>
         {
        data.map((item,index)=>{
          return(
              
            <div key={index} className='slider p-3 md:px-10 flex flex-col bg-slate-50 '>
              
              <div>
                 <Image
              src={item.img}
              alt='news'
              loading='lazy'
              style={{
                borderRadius:'15px'
              }}
              />
              </div>
              <div>
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