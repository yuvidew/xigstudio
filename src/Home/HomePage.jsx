import React from 'react'
import Header from './Header'
import { HeroPage } from './HeroPage'
import { Introduce } from './Introduce'
import Cards from './Cards'

const HomePage = () => {
    return (
        <div>
            <Header/>
            <HeroPage/>
            <div className='bg-stone-800'>
                <Introduce/>
                <Cards/>
            </div>
        </div>
    )
}

export default HomePage
