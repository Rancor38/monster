import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import dot from '../3-dots-bounce.svg'

const Stats = () => {

    const url = 'https://api.open5e.com/monsters/?document__slug=wotc-srd&search='

    // Setting state for individual Monster
    const [monster, setMonster] = useState([]);
    // Snagging the url as a parameter
    const { name } = useParams();
    // transforming the parameter into lowercase because the names use case sensitivity, and the slugs don't work because the API made a mistake, they use the names, which yes, does include unsightly URLs in the address. 

   
    // Creating side effects in the DOM.
    useEffect(() => {
     let lowercase = name.toLocaleLowerCase()    
        fetch(url + lowercase)
          .then((res) => res.json())
          .then((json) => {
            setMonster(json.results)
          })
          .catch(err => console.err)
      }, []);
      
      if (!monster[0]) {
        return <><h1>Fetching monsters</h1> <img className='card-art'
        src={dot} alt="dots"/></>
      }

    return (
        <div className="details-container">
        <div className="details">
          <h2>{monster[0].name}</h2>
          <h3>{monster[0].size} {monster[0].type}, {monster[0].alignment}</h3>
          <h4>Armor Class {monster[0].armor_class} ({monster[0].armor_desc})</h4>
          <h4>Hit Points {monster[0].hit_points} ({monster[0].hit_dice})</h4>
          <p></p>
          <p>Speed ({monster[0].speed.walk}) fly ({monster[0].speed.fly}) swim ({monster[0].speed.swim}) climb ({monster[0].speed.climb})</p>
          {/* COME BACK AND FIX SPEED */}
          <ul className='stats'>
            <li className='stat'>Strength {monster[0].strength}
                <li>({Math.trunc((monster[0].strength-10)/2)})</li>
            </li>
            <li className='stat'>Dexterity {monster[0].dexterity}
                <li>({Math.trunc((monster[0].dexterity-10)/2)})</li>
            </li>
            <li className='stat'>Constitution {monster[0].constitution}
            <li>({Math.trunc((monster[0].constitution-10)/2)})</li>
            </li>
            <li className='stat'>Intelligence {monster[0].intelligence}
                <li>({Math.trunc((monster[0].intelligence-10)/2)})</li>
            </li>
            <li className='stat'>Wisdom {monster[0].wisdom}
                <li>({Math.trunc((monster[0].wisdom-10)/2)})</li>
            </li>
            <li className='stat'>Charisma {monster[0].charisma}
                <li>({Math.trunc((monster[0].charisma-10)/2)})</li>
            </li>
          </ul>
          <ul className='stats'>
            <li className='stat'>Challenge {monster[0].challenge_rating}</li>
            <li className='stat'>Profieciency Bonus {Math.ceil(((monster[0].challenge_rating)/4)+1) || 2}</li>
          </ul>
          <h4>Actions</h4>
          <b>{monster[0].actions[0].name}</b>
          <p>{monster[0].actions[0].desc}</p>
          <a
            href={"https://www.dndbeyond.com/monsters/" + monster[0].slug}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More
          </a>
        </div>
      </div>
    );
};

export default Stats;