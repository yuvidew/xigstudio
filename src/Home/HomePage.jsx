import React from 'react'
import Header from './Header'
import { HeroPage } from './HeroPage'
import { Introduce } from './Introduce'
import Cards from './Cards'
import { PracticeArea } from './PracticeArea'
import { Clients } from './Clients'
import { Team } from './Team'
import { FAQ } from './FAQ'
import { Subscribe } from './Subscribe'
import { Footer } from './Footer'

const HomePage = () => {
    return (
        <div>
            <Header/>
            <HeroPage/>
            <div className=' bg-stone-800 pb-[3rem]'>
                <Introduce/>
                <Cards/>
                <PracticeArea/>
                <Clients/>
                <Team/>
                <FAQ/>
                <Subscribe/>
            </div>
            <Footer/>
        </div>
    )
}

export default HomePage
