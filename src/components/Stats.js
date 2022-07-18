import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import dot from '../3-dots-bounce.svg'
import Breakline from './Breakline';

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
      
      let monst = monster[0]

      if (!monster[0]) {
        return <><h1>Fetching monsters</h1> <img className='card-art'
        src={dot} alt="dots"/></>
      }

    return (
        <div className="details-container">
        <div className="details">
          <h2>{monst.name}</h2>
          <h3>{monst.size} {monst.type}, {monst.alignment}</h3>
          <Breakline/>
          <h4 className='stat-left'>Armor Class {monst.armor_class} ({monst.armor_desc})</h4>
          <h4 className='stat-left'>Hit Points {monst.hit_points} ({monst.hit_dice})</h4>
          <h4 className='stat-left'>Speed ({monst.speed.walk})
           Fly ({monst.speed.fly}) Swim ({monst.speed.swim}) Climb ({monst.speed.climb}) </h4>
          <Breakline/>
          {/* COME BACK AND FIX SPEED */}
          <ul className='stats'>
            {/* Ability Score */}
            <li className='stat'>Strength {monst.strength}
                {/* Modifier */}
                <p>({Math.trunc((monst.strength-10)/2)})</p>
            </li>
            <li className='stat'>Dexterity {monst.dexterity}
                <p>({Math.trunc((monst.dexterity-10)/2)})</p>
            </li>
            <li className='stat'>Constitution {monst.constitution}
            <p>({Math.trunc((monst.constitution-10)/2)})</p>
            </li>
            <li className='stat'>Intelligence {monst.intelligence}
                <p>({Math.trunc((monst.intelligence-10)/2)})</p>
            </li>
            <li className='stat'>Wisdom {monst.wisdom}
                <p>({Math.trunc((monst.wisdom-10)/2)})</p>
            </li>
            <li className='stat'>Charisma {monst.charisma}
                <p>({Math.trunc((monst.charisma-10)/2)})</p>
            </li>
          </ul>
          <Breakline/>
          <h4 className='stat-left'>Challenge {monst.challenge_rating}</h4>
          <ul className='stats'>
            <li className='stat'>Damage Vulnerabilities ({monst.damage_vulnerabilities})</li>
            <li className='stat'>Damage Resistances ({monst.damage_resistances})</li>
            <li className='stat'>Damage Immunities ({monst.damage_immunities})</li>
            <li className='stat'>Condition Immunities ({monst.condition_immunities})</li>
            <li className='stat'>Senses ({monst.senses})</li>
            <li className='stat'>Languages ({monst.languages})</li>
          </ul>
          <h4 className='stat-left'>Profieciency Bonus {Math.ceil(((monst.challenge_rating)/4)+1) || 2}</h4>

          <Breakline/>
          <h2>Actions</h2>
          <b>{monst.actions[0].name}</b>
          <p>{monst.actions[0].desc}</p>
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