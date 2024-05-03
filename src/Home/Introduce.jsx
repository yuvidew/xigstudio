import React from 'react'

export const Introduce = () => {
    return (
        <section className=' container m-auto'>
            <div className=' flex items-center '>
                <div className=' w-[50%] flex items-center justify-start h-[15rem] '>
                    <h1 className=' text-[2.5rem]'>Let’s Introduce <br /> Ourself</h1>
                </div>
                <div className=' w-[50%] flex items-center justify-start h-[15rem] '>
                    <div className=' border-l-stone-500 border-l-2 w-full flex items-start justify-center flex-col pl-[3rem]'>
                        <h3 className=' text-[1.3rem]'>Criminal Lawyer</h3>
                        <p className=' w-[80%] text-sm text-stone-500 mt-2'>
                        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit Exercitation.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
