import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

export const Subscribe = () => {
    return (
        <section className=' container bg-stone-600 flex items-center justify-center h-[10rem] mt-[2rem]'>
            <div className='w-full'>
                <h1 className=' text-white text-[2.5rem] text-center'>
                    Subscribe Our Newsletter
                </h1>
                <div className=' flex items-center justify-center gap-x-3 mt-[1rem] w-[50%] m-auto'>
                    <Input placeholder = "Name" className = "rounded-none rounded-l-md" />
                    <Input placeholder = "Email" className = "rounded-none " />
                    <Button  className = " rounded-none rounded-r-md bg-[#E3B748] hover:bg-[#E3B748]" >Send</Button>
                </div>
            </div>
        </section>
    )
}
