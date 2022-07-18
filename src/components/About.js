import React from 'react';
import dragon from '../dragon.svg'

const About = () => {
    return (
       <>
        <h1 className='card-title'>Welcome to Monsters,</h1>
        <img className='details-image'
        src={dragon} alt="dragon"/>
        <main className='details-container'>
        <p className='details'>This application is fairly straightforward. Save the link and you can use it to browse all of the monsters in Dungeons & Dragons that are available within the System Reference Document. I'll be adding other feature to it soon to make it easier to browse the app.</p>
        </main>
        </>
    );
};

export default About;