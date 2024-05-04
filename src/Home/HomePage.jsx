import React from 'react'
import Header from './Header'
import { HeroPage } from './HeroPage'
import { Introduce } from './Introduce'
import Cards from './Cards'
import { PracticeArea } from './PracticeArea'
import { Clients } from './Clients'

const HomePage = () => {
    return (
        <div>
            <Header/>
            <HeroPage/>
            <div className='bg-stone-800'>
                <Introduce/>
                <Cards/>
                <PracticeArea/>
                <Clients/>
            </div>
        </div>
    )
}

export default HomePage
