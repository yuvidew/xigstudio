import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Mail } from 'lucide-react'
import React from 'react'
import hero from '../assets/hero.svg'

export const HeroPage = () => {
    return (
        <section className=' container m-auto flex items-center text-white gap-y-5'>
            <div className=' w-[50%] h-[40rem] flex items-start justify-center flex-col gap-y-3'>
                <h1 className=' text-[3.4rem]'>You don’t have to 
                Fight them Alone.</h1>
                <p className=' text-stone-400 mt-[1rem]'>Lorem ipsum dolor sit amet consectetur adipiscing elit 
                blandit, curabitur sodales conubia ut inceptos faucibus himenaeos tortor eget, hac massa gravida arcu interdum proin curae.</p>
                
                <div className=' bg-stone-500 w-[70%] px-[2rem] h-[4rem] mt-[1rem] rounded-full flex items-center justify-center gap-x-2'>
                    <Mail className=' h-4 w-4 ' />
                    <Input className = " w-[70%] bg-transparent border-none placeholder:text-stone-200" placeholder = "Enter your email address" />
                    <Button variant = "yellow">
                        Let's Talk
                    </Button>
                </div>
            </div>
            <div className=' w-[50%] h-[40rem] flex items-start justify-end'>
                <img src={hero} alt="" />
            </div>
        </section>
    )
}
