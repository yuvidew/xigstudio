import { Button } from '@/components/ui/button'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import React from 'react'
import client1 from '@/assets/client1.svg'
import client2 from '@/assets/client2.svg'
import client3 from '@/assets/client3.svg'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const Clients = () => {
  const clientData = [
    {
      img : client1,
      name : "Jane Cooper",
    },
    {
      img : client2,
      name : "Devon Lane",
    },
    {
      img : client3,
      name : "Robert Fox",
    },
  ]
  return (
    <section className=' container mt-[2rem]'>
      <div className='flex items-center gap-5 '>
        <div className="flex items-center justify-start w-[50%]">
          <h1 className=' text-white text-[3rem]'>What says our <br /> happy Clients</h1>
        </div>
        <div className="flex items-center justify-end w-[50%]">
          <div className=' flex items-center gap-3'>
            <Button
              className=' rounded-3xl w-[4rem] h-[3.3rem]' 
              variant = "hover"
            >
              <ArrowLeft 

              />
            </Button>
            <Button
              className=' rounded-3xl w-[4rem] h-[3.3rem]' 
              variant = "hover"
            >
              <ArrowRight 

              />
            </Button>
          </div>
        </div>
      </div>
      <div className=' grid grid-cols-3 gap-7 mt-[1.5rem]'>
          {clientData.map(ele => (
              <Card key={ele.name} className = "bg-transparent border-stone-700 hover:bg-stone-700 shadow-md cursor-pointer">
                  <CardHeader className = "">
                      <img className=' h-[4rem] w-[4rem] text-left' src={ele.img} alt="" />
                      <CardDescription className = "mt-[1rem]">
                          <h1 className=' text-[#fff] mt-[1rem] text-[1.3rem]'>{ele.name}</h1>
                          <p className=' mt-[1rem]'>Ceo of Hunt</p>
                      </CardDescription>
                  </CardHeader>
                  <CardContent>
                      <p className=' text-stone-400'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.</p>
                  </CardContent>
              </Card>
          ))}
      </div>
    </section>
  )
}
