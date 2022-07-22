import React from 'react';
import github from '../github.png'

const About = () => {
    return (
       <div className='detcontainer'>
        <h1 className='card-title'>Welcome to Monsters,</h1>
        <main className='details-container'>
        <p className='details'>This application is fairly straightforward. Save the link and you can use it to browse all of the monsters in Dungeons & Dragons that are available within the System Reference Document. I'll be adding other feature to it soon to make it easier to browse the app.</p>
        
        </main>
        <h4 className='stat-center'><a className='read-more'
            href={"https://www.dndbeyond.com/monsters/"}
            target="_blank"
            rel="noopener noreferrer"
          >
            View the Project on GitHub <img className='github'
        src={github} alt="github"/>
          </a></h4>
        </div>
    );
};

export default About;