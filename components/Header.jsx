import React from 'react'

const Header = () => {
    return (
        <header>
            <div class="nav container">
                <a href="index.html" class="logo">
                    🎮Game
                    <span>Addict</span>
                </a>
                <div class="nav-icons">
                    <span id='bell-icon'><img src="/svg/bell.svg" alt="" className="bx" /><span></span></span>
                    <a href="download.html"><img src="/svg/download.svg" alt="" className="bx" /></a>
                    <div class="menu-icon">
                        <div class="line1"></div>
                        <div class="line2"></div>
                        <div class="line3"></div>
                    </div>
                </div>
                <div class="menu">
                    <img src="/img/menu.png" alt="Menu Image" />
                    <div class="navbar">
                        <li><a href="index.html">Home</a></li>
                        <li>
                            <a href="#trending-section" >Trending</a>
                        </li>
                        <li>
                            <a href="#new-section" >Latest</a>
                        </li>
                        <li><a href="#categories">Categories</a></li>
                        <li>
                            <a href="#action-games">Action Games</a>
                        </li>
                        <li><a href="#contact_us">Contact Us</a></li>
                    </div>
                </div>
                <div class="notification">
                    <div class="notification-box">
                        <span>✔️</span>
                        <p>Congratulations! Your Game has been Downloaded</p>
                    </div>
                    <div class="notification-box box-color">
                        <span>❌</span>
                        <p>Could not Download your Game Plz Retry Again!</p>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
