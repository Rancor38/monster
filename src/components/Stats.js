import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import dot from '../3-dots-bounce.svg'
import Breakline from './stats-components/Breakline';
import EmbededImage from './EmbededImage';

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
        <>
          <div className="detcontainer">
          <h2 className='center-title'>{monst.name}</h2>
          <EmbededImage 
          monPicSelector={monst.slug + '.jpg'}
          />
          <h3>{monst.size} {monst.type}, {monst.alignment}</h3>
          <Breakline/>
          <h4 className='stat-left'>Armor Class {monst.armor_class} ({monst.armor_desc})</h4>
          <h4 className='stat-left'>Hit Points {monst.hit_points} ({monst.hit_dice})</h4>
          <h4 className='stat-left'>Speed ({monst.speed.walk})
           Fly ({monst.speed.fly}) Swim ({monst.speed.swim}) Climb ({monst.speed.climb}) </h4>
          <Breakline/>
          {/* COME BACK AND FIX SPEED */}
          <ul className='ability-scores'>
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
            <li>Damage Vulnerabilities ({monst.damage_vulnerabilities})</li>
            <li>Damage Resistances ({monst.damage_resistances})</li>
            <li>Damage Immunities ({monst.damage_immunities})</li>
            <li>Condition Immunities ({monst.condition_immunities})</li>
            <li>Senses ({monst.senses})</li>
            <li>Languages ({monst.languages})</li>
          </ul>
          <h4 className='stat-left'>Profieciency Bonus {Math.ceil(((monst.challenge_rating)/4)+1) || 2}</h4>

          <Breakline/>         
          <h3 className='stat-center'>Actions</h3>
          <b>Attacks</b>
          <p>Attacks with which the {monst.name.toLowerCase()} is proficient should be +{(Math.ceil(((monst.challenge_rating)/4)+1) || 2)+5} to hit.</p>
          <p>Abilities that trigger saving throws should be DC {(Math.ceil(((monst.challenge_rating)/4)+1) || 2)+13} to save.</p>
          <p>The {monst.name.toLocaleLowerCase()} is a CR {monst.challenge_rating} creature and should deal roughly {Math.floor(5.5*monst.challenge_rating) || 3} ({Math.floor(2*monst.challenge_rating) || 1}d6) damage per round.</p>
          {/* <b>Special Abilities</b> */}
          {/* <b>{monst.actions[0].name}</b>
          <p className='action'>{monst.actions[0].desc}</p>
          <b>{monst.actions[1].name}</b>
          <p className='action'>{monst.actions[1].desc}</p>
          <b>{monst.actions[2].name}</b>
          <p className='action'>{monst.actions[2].desc}</p>
          <b>{monst.actions[3].name}</b>
          <p className='action'>{monst.actions[3].desc}</p> */}
          {/* FIND A WAY TO PRINT WITHOUT IT BREAKING */}
          <Breakline/>
          <h4 className='stat-center'><a className='read-more'
            href={"https://www.dndbeyond.com/monsters/" + monster[0].slug}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More
          </a></h4>
          </div>
      </>
    );


}//This bracket is for the zombie-bug.
// else, if not zombie-bugged, render monsters normally.
let monst = monster[0]
return (
  <>
    <div className="detcontainer">
    <h2 className='center-title'>{monst.name}</h2>
    <EmbededImage 
    monPicSelector={monst.slug + '.jpg'}
    />
    <h3>{monst.size} {monst.type}, {monst.alignment}</h3>
    <Breakline/>
    <h4 className='stat-left'>Armor Class {monst.armor_class} ({monst.armor_desc})</h4>
    <h4 className='stat-left'>Hit Points {monst.hit_points} ({monst.hit_dice})</h4>
    <h4 className='stat-left'>Speed ({monst.speed.walk})
     Fly ({monst.speed.fly}) Swim ({monst.speed.swim}) Climb ({monst.speed.climb}) </h4>
    <Breakline/>
    {/* COME BACK AND FIX SPEED */}
    <ul className='ability-scores'>
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
      <li>Damage Vulnerabilities ({monst.damage_vulnerabilities})</li>
      <li>Damage Resistances ({monst.damage_resistances})</li>
      <li>Damage Immunities ({monst.damage_immunities})</li>
      <li>Condition Immunities ({monst.condition_immunities})</li>
      <li>Senses ({monst.senses})</li>
      <li>Languages ({monst.languages})</li>
    </ul>
    <h4 className='stat-left'>Profieciency Bonus {Math.ceil(((monst.challenge_rating)/4)+1) || 2}</h4>

    <Breakline/>         
    <h3 className='stat-center'>Actions</h3>
    <b>Attacks</b>
    <p>Attacks with which the {monst.name.toLowerCase()} is proficient should be +{(Math.ceil(((monst.challenge_rating)/4)+1) || 2)+5} to hit.</p>
    <p>Abilities that trigger saving throws should be DC {(Math.ceil(((monst.challenge_rating)/4)+1) || 2)+13} to save.</p>
    <p>The {monst.name.toLocaleLowerCase()} is a CR {monst.challenge_rating} creature and should deal roughly {Math.floor(5.5*monst.challenge_rating) || 3} ({Math.floor(2*monst.challenge_rating) || 1}d6) damage per round.</p>
    {/* <b>Special Abilities</b> */}
    {/* <b>{monst.actions[0].name}</b>
    <p className='action'>{monst.actions[0].desc}</p>
    <b>{monst.actions[1].name}</b>
    <p className='action'>{monst.actions[1].desc}</p>
    <b>{monst.actions[2].name}</b>
    <p className='action'>{monst.actions[2].desc}</p>
    <b>{monst.actions[3].name}</b>
    <p className='action'>{monst.actions[3].desc}</p> */}
    {/* FIND A WAY TO PRINT WITHOUT IT BREAKING */}
    <Breakline/>
    <h4 className='stat-center'><a className='read-more'
      href={"https://www.dndbeyond.com/monsters/" + monster[0].slug}
      target="_blank"
      rel="noopener noreferrer"
    >
      Read More
    </a></h4>
    </div>
</>
);
};


export default Stats;