import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import dot from '../3-dots-bounce.svg'
import Breakline from './stats-components/Breakline';
import EmbededImage from './EmbededImage';
import Statblock from './stats-components/Statblock';

const Stats = () => {

    const url = 'https://api.open5e.com/monsters/?document__slug=wotc-srd&search='

    // Setting state for individual Monster
    const [monster, setMonster] = useState([]);
    // Snagging the url as a parameter
    const { name } = useParams();
    
   
    // Creating side effects in the DOM.
    useEffect(() => {
     let lowercase = name.toLocaleLowerCase()  
     // transforming the parameter into lowercase because the names use case sensitivity, and the slugs don't work because the API made a mistake, they use the names, which yes, does include unsightly URLs in the address.
        fetch(url + lowercase)
          .then((res) => res.json())
          .then((json) => {
            console.log(url + lowercase)
            setMonster(json.results)
          })
          .catch(err => console.err)
      }, []);
      

      if (!monster[0]) {
        return <><h1>Fetching monsters</h1> <img className='card-art'
        src={dot} alt="dots"/></>
      }
// if the zombie bug, render array item 1 (the zombie) as monst
      if (monster[0].slug==='ogre-zombie') {
      let monst = monster[1] 

    return (
        <Statblock
        monst={monst}
        />
    );


}//This bracket is for the zombie-bug.
// else, if not zombie-bugged, render monsters normally.
let monst = monster[0]
    return (
        <Statblock
        monst={monst}
        />
    );
};


export default Stats;