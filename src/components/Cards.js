import { Link, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import dot from "../3-dots-bounce.svg";
import NotFoundPage from "./NotFoundPage";
import EmbededImage from "./EmbededImage";

const Cards = (props) => {
  //passing props from App.js to determine which URL we are using.
  const url = props.url;
  // const url2 = props.url + "&page=2"
  // const url3 = props.url + "&page=3"
  // const url4 = props.url + "&page=4"
  // const url5 = props.url + "&page=5"
  // const url6 = props.url + "&page=6"

  //Creating some State
  const [monsters, setMonsters] = useState(null);
  const [monsters2, setMonsters2] = useState(null);
  const [monsters3, setMonsters3] = useState(null);
  
  const errorFunction = () => {
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>;
  };

  //the master fetch
  useEffect(() => {
    //pulling useEffect in here to manipulate the DOM.
    const fetchMonsters = () => {
      fetch(url)
        .then((res) => res.json())
        .then((json) => setMonsters(json.results))
        .catch((err) => {
          errorFunction();
        });
    }
    fetchMonsters()
    
    const fetch2Monsters = () => {
      fetch(url + "&page=2")
        .then((res) => res.json())
        .then((json) => setMonsters2(json.results))
        .catch((err) => {
          errorFunction();
        });
    }
    fetch2Monsters()
    
    const fetch3Monsters = () => {
      fetch(url + "&page=3")
        .then((res) => res.json())
        .then((json) => setMonsters3(json.results))
        .catch((err) => {
          errorFunction();
        });
    }
    fetch3Monsters()
  }, []);

  useEffect(() => {
    console.log(monsters)
    console.log(monsters2)
    monsters && monsters2 ? console.log([...monsters, ...monsters2, ...monsters3]) : console.log('err')
  })

  if (!monsters) {
    return (
      <>
        <p>loading information</p>{" "}
        <img className="card-art" src={dot} alt="dots" />
      </>
    );
  }

  return (
    <section className="container">
      {monsters.map((monster) => {
        if (!monster) {
          return (
            <>
              <p>loading information</p>{" "}
              <img className="card-art" src={dot} alt="dots" />
            </>
          );
        }
        return (
          // A Link to stats/the name of the monster unless its succubus because the name succubus/incubus breaks it, so when it sees that it'll turn it into 'succubus'
          <Link
            to={`stats/${
              monster.name === "Succubus/Incubus" ? "succubus" : monster.name
            }`}
            key={monster.name.toString()}
            className="card"
          >
            <div className="card-image">
              <div>
                <EmbededImage
                  className="card-art"
                  monPicSelector={monster.slug + ".jpg"}
                />
              </div>
            </div>
            <div className="card-title">
              <h3>{monster.name}</h3>
              <h4>
                {monster.size} {monster.type}, CR {monster.challenge_rating}
              </h4>
            </div>
          </Link>
        );
      })}
    </section>
  );
};

export default Cards;
