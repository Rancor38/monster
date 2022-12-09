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
  const [monsters1, setMonsters1] = useState(null);
  const [monsters2, setMonsters2] = useState(null);
  const [monsters3, setMonsters3] = useState(null);
  const [monsters4, setMonsters4] = useState(null);
  const [monsters5, setMonsters5] = useState(null);
  const [monsters6, setMonsters6] = useState(null);
  const [monsters7, setMonsters7] = useState(null);
  
  const errorFunction = () => {
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>;
  };

  //the master fetch
  useEffect(() => {
    //pulling useEffect in here to manipulate the DOM.
    const fetchMonsters1 = () => {
      fetch(url)
        .then((res) => res.json())
        .then((json) => setMonsters1(json.results))
        .catch((err) => {
          errorFunction();
        });
    }
    fetchMonsters1()
    
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

    const fetch4Monsters = () => {
      fetch(url + "&page=4")
        .then((res) => res.json())
        .then((json) => setMonsters4(json.results))
        .catch((err) => {
          errorFunction();
        });
    }
    fetch4Monsters()
    
    const fetch5Monsters = () => {
      fetch(url + "&page=5")
        .then((res) => res.json())
        .then((json) => setMonsters5(json.results))
        .catch((err) => {
          errorFunction();
        });
    }
    fetch5Monsters()
    
    const fetch6Monsters = () => {
      fetch(url + "&page=6")
        .then((res) => res.json())
        .then((json) => setMonsters6(json.results))
        .catch((err) => {
          errorFunction();
        });
    }
    fetch6Monsters()
    
    const fetch7Monsters = () => {
      fetch(url + "&page=7")
        .then((res) => res.json())
        .then((json) => setMonsters7(json.results))
        .catch((err) => {
          errorFunction();
        });
    }
    fetch7Monsters()
  }, []);

  useEffect(() => {
    monsters1 && monsters2 && monsters3 && monsters4 && monsters5 && monsters6 && monsters7 ? setMonsters([...monsters1, ...monsters2, ...monsters3, ...monsters4, ...monsters5, ...monsters6, ...monsters7]) : console.log('err')
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
