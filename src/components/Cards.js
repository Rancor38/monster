import React, { useState, useEffect } from 'react';
import beholder from '../beholder.svg'

const Cards = () => {

  //Creating some State
  const [monsters, setMonsters] = useState([]);

  //pulling useEffect in here to manipulate the DOM.

  useEffect(() => {
    const url = "https://api.open5e.com/monsters/?document__slug=wotc-srd"

    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setMonsters(json.results)
        console.log(json)
      })
      .catch(err => console.log(err))
  })

    return (
        <section className="container"> 
        {monsters.map (monster => {
            return (
                <div key={monster.name.toString()} className="card">
    <div className="card-image">
      <img
        src={beholder} alt="beholder"/>
    </div>
    <div className="card-title">
      <h3>{monster.name}</h3>
    </div>
  </div>
            )
        })}
  
</section>

    );
};

export default Cards;