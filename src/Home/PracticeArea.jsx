import React from 'react'
import one from '../../public/one.png'
import two from '../../public/two.png'
import three from '../../public/three.png'
import four from '../../public/four.png'
import five from '../../public/five.png'
import six from '../../public/six.png'

export const PracticeArea = () => {
  const imgCardList = [
    {
      img : one,
      text : 'BUSINESS LAW',
      width : "col-span-2",
      
    },
    {
      img : two,
      text : 'Partnership LAW',
      width : "30%",
      
    },
    {
      img : three,
      text : 'real estate LAW',
      width : "30%",
      
    },
    {
      img : four,
      text : 'BUSINESS LAW',
      width : "col-span-2",
      
    },
    {
      img : five,
      text : 'landlord disputes',
      width : "col-span-2",
      
    },
    {
      img : six,
      text : 'elder abuse',
      width : "30%",
      
    },
  ]
  return (
    <section className=' container mt-[2rem]'>
      <h1 className=' text-center text-[2.3rem]'>Area of Practice</h1>
      <div className=' grid grid-cols-3 gap-5 mt-[2rem]'>
        {imgCardList.map(ele => (
          <div 
            key={ele.text} 
            className={`${ele.width} h-[20rem] rounded-lg overflow-hidden relative`}
          >
            <img className=' w-full h-full object-cover' src={ele.img} alt="" />
            <div className=' absolute h-full w-full flex items-end justify-center top-0 left-0 p-5'>
              <h2 className=' text-[1.3rem] capitalize'>{ele.text}</h2>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
