import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import { useParams } from 'react-router-dom'

const Stats = () => {

    // const url = 'https://api.open5e.com/monsters/adult-red-dragon'

    const [monster, setMonster] = useState([]);
    const { name } = useParams();
    console.log(name)
    let lowercase = name.toLocaleLowerCase()
    console.log(lowercase)
    useEffect(() => {
        
        fetch('https://api.open5e.com/monsters/?search=' + lowercase)
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
          <h3>(Empidonax virescens)</h3>
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