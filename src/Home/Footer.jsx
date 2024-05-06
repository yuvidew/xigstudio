import React from 'react'
import Header from './Header'

export const Footer = () => {
    return (
        <div className=' container py-[2rem]'>
            <Header itsTrue={"true"} />
            <div className='w-full flex items-center justify-center gap-x-4'>
                <p className=' text-stone-500 text-center'>
                © 2020 Acme. All right reserved.
                </p>
                <p className=' text-stone-500 text-center'>
                Privacy Policy
                </p>
                <p className=' text-stone-500 text-center'>
                Terms of Service
                </p>
            </div>
        </div>
    )
}
