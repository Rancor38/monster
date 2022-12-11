import React from 'react';
import EmbededImage from '../EmbededImage';
import Breakline from './Breakline';

const Statblock = ({monst}) => {
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
            href={"https://www.dndbeyond.com/monsters/" + monst.slug}
            target="_blank"
            rel="noopener noreferrer"
          >
            Read More
          </a></h4>
          </div>
      </>
    );
};

export default Statblock;