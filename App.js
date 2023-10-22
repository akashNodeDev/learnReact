import React from "react";
import ReactDOM from "react-dom/client";

/**
 * Header
 *  - Logo
 *  - Nav Items
 * Body
 *   - Search
 *   - Resturant Container
 *      - Resturant Card
 *          - Img
 *          - Name of resturant,Star Rating,Cuisines,Delivery Time
 * Footer
 *    - Copyright
 *    - Links
 *    - Address
 *    - Contact US
 */

    const Header = () => {
        return (
            <div className="header">
                <div className="logo-container">
                    <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=food&sf=" />
                </div>
                <div className="nav-items">
                    <ul>
                        <li>Home</li>
                        <li>About US</li>
                        <li>Contact US</li>
                        <li>Cart</li>
                    </ul>
                </div>
            </div>
        )
    }

    const ResturantCard = () => {
        return (
            <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
                <img className="res-logo" alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/mcunprqjxgx8o38fcshe"/>
                <h3>Meghna Foods</h3>
                <h4>Burger,North Indian,Asian</h4>
                <h4>4.3 stars</h4>
                <h4>38 Minutes</h4>
            </div>
        )
    }

    const Body = () => {
        return (
            <div className="body">
                <div className="search">Search</div>
                <div className="res-container">
                    <ResturantCard/>
                    <ResturantCard/>
                    <ResturantCard/>
                    <ResturantCard/>
                    <ResturantCard/>
                    <ResturantCard/>
                    <ResturantCard/>
                    <ResturantCard/>
                    <ResturantCard/>
                    <ResturantCard/>
                </div>
            </div>
        )
    }

    const AppLayout = () => {
        return (
            <div className="app">
                <Header/>
                <Body/>
            </div>
        )
    }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);


