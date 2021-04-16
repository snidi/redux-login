import React from 'react';
import Navigation from '../Navigation';
import { NavLink } from 'react-router-dom'

const HomePage = () => {

    return (
        <>
            <Navigation />
            <div  className='mainDiv'>
                <h4>Home</h4>                
            </div>
        </>
    )
}

export default HomePage