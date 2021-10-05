import React from 'react';
import { Link } from 'react-router-dom';

function NavigationTabs() {
    return (

        <ul className="nav nav-tabs navbar-light bg-light container-fluid  fixed-top">
            <li className="nav-item">
                <Link to='/addalbum' className="nav-link">Add Songs</Link>
            </li>
            <li className="nav-item">
                <Link to='/viewalbums' className="nav-link">View Album</Link>
            </li>
            <li className="nav-item">
                <Link to='/playlist' className="nav-link">Playlist</Link>
            </li>
        </ul>
    )
}

export default NavigationTabs;
