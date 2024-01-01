import React from 'react'
import './swiper-bundle.min.js'
import ScrollBar from '../components/ScrollBar'
import Header from '../components/Header'
import Home from '../components/Home'
import Trending from '../components/Trending'
import NewSection from '../components/NewSection'
import Copyright from '../components/Copyright'

const App = () => {

    return (
        <div>
            <ScrollBar />
            <Header />
            <Home />
            <Trending />
            <NewSection />
            <Copyright />
        </div>
    )
}

export default App
