import React from 'react';
import kali from './kali.png'

const Home = () => {
    return (
        <div className='flex flex-col items-center place-content-center h-screen'>
            <img src={kali} alt='logo' />
        </div>
    );
}

export default Home;