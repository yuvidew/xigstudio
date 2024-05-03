import React from 'react'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import icon from '../assets/card.svg'
import { Button } from '@/components/ui/button'


const Cards = () => {
    const num = [
        {
            text : '98'
        },
        {
            text : '100'
        },
        {
            text : '100'
        },
    ]
    return (
        <section className=' container m-auto'>
            <h1 className=' text-center mt-2 text-[2.3rem]'>Why Choose us?</h1>
            <div className=' grid grid-cols-3 gap-7 mt-[1.5rem]'>
                {num.map(ele => (
                    <Card key={ele.text} className = "bg-transparent border-stone-700 hover:bg-stone-700 shadow-md cursor-pointer">
                        <CardHeader className = "">
                            <img className=' h-[4rem] w-[4rem] text-left' src={icon} alt="" />
                            <CardDescription className = "mt-[1rem]">
                                <h1 className=' text-[#fff] mt-[1rem] text-[1.3rem]'>{ele.text}% Success Rate</h1>
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p className=' text-stone-400'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exer.</p>
                        </CardContent>
                        <CardFooter>
                            <Button variant = "yellow">
                                Read More
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    )
}

export default Cards