import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import beholder from '../beholder.svg'

const Stats = () => {

    const url = 'https://api.open5e.com/monsters/?search='

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
          .catch(err => console.log(err))
      }, []);
      
      if (!monster[0]) {
        return <p>loading information...</p>
      }

    return (
        <div className="details-container">
        <div className="details">
          <h2>{monster[0].name}</h2>
          <h3>{monster[0].size} {monster[0].type}, {monster[0].alignment}</h3>
          <h4>Armor Class {monster[0].armor_class} ({monster[0].armor_desc})</h4>
          <h4>Hit Points {monster[0].hit_points} ({monster[0].hit_dice})</h4>
          {/* {console.log(monster[0].speed.walk)}
          <h4>Speed {monster[0].speed.walk}</h4> */}
          {/* COME BACK AND FIX SPEED */}
          <ul>
            <li>Strength {monster[0].strength}</li>
            <li>Dexterity {monster[0].dexterity}</li>
            <li>Constitution {monster[0].constitution}</li>
            <li>Intelligence {monster[0].intelligence}</li>
            <li>Wisdom {monster[0].wisdom}</li>
            <li>Charisma {monster[0].charisma}</li>
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