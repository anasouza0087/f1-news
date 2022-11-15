import React from 'react'
import Footer from './footer'
import Header from './header'
import HomePageInfoCards from './homePageCards/homePageInfoCards'

const HomePage = () => {
    return (
        <div>
            <Header />
            <HomePageInfoCards />
            <Footer />
        </div>
    )
}

export default HomePage