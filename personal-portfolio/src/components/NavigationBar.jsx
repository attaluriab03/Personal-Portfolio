import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {

    return (
        <header> 
            
            <div> 
                <Link className="navbar" to={"/"}> Home </Link>
                <Link className="navbar" to={"/projects"}> Projects </Link>
                <Link className="navbar"to={"/about"}> About </Link>
                <Link className="navbar" to={"/contact"}> Contact </Link>
            </div>

        </header>
    )
} 