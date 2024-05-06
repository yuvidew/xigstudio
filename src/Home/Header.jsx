import React from 'react'
import logo from "../assets/logo.svg"
import pinterest from "../assets/pinterest.svg"
import { Button } from '@/components/ui/button'
import { Facebook, Instagram, Twitter } from 'lucide-react'

const Header = ({itsTrue}) => {
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

    const icon = [
        {
            icon : <Instagram className=' text-[#E3B748]' />
        },
        {
            icon : <Facebook className=' text-[#E3B748]' />
        },
        {
            icon : <Twitter className=' text-[#E3B748]' />
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
                        <h1 key={ele.text} className=' cursor-pointer'>
                            {ele.text}
                        </h1>
                    ))}
                </div>
                {itsTrue == undefined ? 
                    (
                        <div className=' w-[33.3%] h-full flex items-center justify-end'>
                            <Button variant = "ghost">
                                Contact Us
                            </Button>
                        </div>
                    ) : (
                        <div className='w-[33.3%] h-full flex items-center justify-end gap-x-3'>
                            {icon.map((ele , index) => (
                                <span className='' key={index}>
                                    {ele.icon}
                                </span>
                            ))}
                            <img className=' h-[1.7rem]' src={pinterest} alt="" />
                        </div>
                    )
                }
            </main>
        </header>
    )
}

export default Header