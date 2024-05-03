import React from 'react'
import logo from "../assets/logo.svg"
import { Button } from '@/components/ui/button'

const Header = () => {
    const navList = [
        {
            text : "Home",
        },
        {
            text : "Attorneys",
        },
        {
            text : "Practice Areas",
        },
        {
            text : "About Us",
        },
    ]
    return (
        <header className='mt-0 container m-auto '>
            <main className=' h-[6rem] flex items-center justify-between'>
                <div className=' w-[33.3%] h-full flex items-center justify-start'>
                    <img src={logo} alt="" />
                </div>
                <div className=' w-[33.3%] h-full lg:flex md:hidden hidden items-center justify-center gap-x-5'>
                    {navList.map(ele => (
                        <h1 className=' cursor-pointer'>
                            {ele.text}
                        </h1>
                    ))}
                </div>
                <div className=' w-[33.3%] h-full flex items-center justify-end'>
                    <Button variant = "ghost">
                        Contact Us
                    </Button>
                </div>
            </main>
        </header>
    )
}

export default Header