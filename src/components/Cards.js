import { Link } from 'react-router-dom'
import React, { useState, useEffect } from 'react';
import dragon from '../dragon.svg'
import dot from '../3-dots-bounce.svg'

const Cards = (props) => {
    //passing props from App.js to determine which URL we are using.
const url = 'https://api.open5e.com/monsters/' + props.url
  //Creating some State
  const [monsters, setMonsters] = useState([]);

  //pulling useEffect in here to manipulate the DOM.

  useEffect(() => {
    
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setMonsters(json.results)
      })
      .catch(err => console.err)
  }, []);

  if (!monsters) {
    return <><p>loading information</p> <img className='card-art'
    src={dot} alt="dots"/></>
  }

    return (
        <section className="container"> 
        {monsters.map ((monster) => {
            return (
    <Link to={`stats/${monster.name}`} key={monster.name.toString()} className="card">
    <div className="card-image">
      <img className='card-art'
        src={dragon} alt="dragon"/>
    </div>
    <div className="card-title">
      <h3>{monster.name}</h3>
      <h4>{monster.size} {monster.type}, CR {monster.challenge_rating}</h4>
    </div>
    </Link>
            )
        })}
  
</section>

    );
};

export default Cards;