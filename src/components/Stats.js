import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { useParams } from 'react-router-dom'

const Stats = () => {

    const url = 'https://api.open5e.com/monsters/?search='

    // Setting state for individual Monster
    const [monster, setMonster] = useState([]);
    // Snagging the url as a parameter
    const { name } = useParams();
    // transforming the parameter into lowercase because the names use case sensitivity, and the slugs don't work because the API made a mistake, they use the names, which yes, does include unsightly URLs in the address. 

    let lowercase = name.toLocaleLowerCase()
    // Creating side effects in the DOM.
    useEffect(() => {
        
        fetch(url + lowercase)
          .then((res) => res.json())
          .then((json) => {
            setMonster(json.results)
          })
          .catch(err => console.log(err))
      })
      
      if (!monster[0]) {
        return <p>loading information...</p>
      }

    return (
        <div className="details-container">
        <img
          src="https://www.audubon.org/sites/default/files/styles/bird_illustration/public/4492_Sibl_9780307957900_art_r1.jpg?itok=8HuhVVIy"
          alt="Acadian Flycatcher"
        />
        <div className="details">
          <h2>{monster[0].name}</h2>
          <h3>{monster[0].size} {monster[0].type}, {monster[0].alignment}</h3>
          <h4>Conservation Status</h4>
          <p>
            Would be vulnerable to loss of habitat, but no significant decline noted
            so far. In some regions, Brown-headed Cowbirds often lay eggs in nests
            of this species.
          </p>
          <a
            href="https://www.audubon.org/field-guide/bird/acadian-flycatcher"
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