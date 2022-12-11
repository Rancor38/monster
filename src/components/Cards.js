import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import dot from "../static-images/3-dots-bounce.svg";
import NotFoundPage from "./NotFoundPage";
import EmbededImage from "./EmbededImage";
import { motion } from "framer-motion";

const Cards = (props) => {
  //passing props from App.js to determine which URL we are using.
  const url = props.url;
  const searchResult = props.searchResult
  console.log(searchResult)

  //Creating some State
  //State for all the monsters
  const [monsters, setMonsters] = useState(null);
  //State for the other monsters to build the master array
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
//if a non-searched fetch, we do an initial fetch of what's below
      const fetchMonsters1 = () => {
        fetch(url + "&page=1")
          .then((res) => res.json())
          .then((json) => setMonsters1(json.results))
          .catch((err) => {
            errorFunction();
          });
      };
      fetchMonsters1();

      const fetch2Monsters = () => {
        fetch(url + "&page=2")
          .then((res) => res.json())
          .then((json) => setMonsters2(json.results))
          .catch((err) => {
            errorFunction();
          });
      };
      fetch2Monsters();

      const fetch3Monsters = () => {
        fetch(url + "&page=3")
          .then((res) => res.json())
          .then((json) => setMonsters3(json.results))
          .catch((err) => {
            errorFunction();
          });
      };
      fetch3Monsters();

      const fetch4Monsters = () => {
        fetch(url + "&page=4")
          .then((res) => res.json())
          .then((json) => setMonsters4(json.results))
          .catch((err) => {
            errorFunction();
          });
      };
      fetch4Monsters();

      const fetch5Monsters = () => {
        fetch(url + "&page=5")
          .then((res) => res.json())
          .then((json) => setMonsters5(json.results))
          .catch((err) => {
            errorFunction();
          });
      };
      fetch5Monsters();

      const fetch6Monsters = () => {
        fetch(url + "&page=6")
          .then((res) => res.json())
          .then((json) => setMonsters6(json.results))
          .catch((err) => {
            errorFunction();
          });
      };
      fetch6Monsters();

      const fetch7Monsters = () => {
        fetch(url + "&page=7")
          .then((res) => res.json())
          .then((json) => setMonsters7(json.results))
          .catch((err) => {
            errorFunction();
          });
      };
      fetch7Monsters();
  }, []);

  //if a non-searched fetch, useEffect will fetch below
  useEffect(() => {
    if (!searchResult) {
    const getTheMasterList = () => {
      if (
        monsters1 &&
        monsters2 &&
        monsters3 &&
        monsters4 &&
        monsters5 &&
        monsters6 &&
        monsters7
      ) {
        setMonsters([
          ...monsters1,
          ...monsters2,
          ...monsters3,
          ...monsters4,
          ...monsters5,
          ...monsters6,
          ...monsters7,
        ]);
      }
    };
    getTheMasterList();
  } else {
    setMonsters(searchResult)
  }
  }, [
    searchResult,
    monsters1,
    monsters2,
    monsters3,
    monsters4,
    monsters5,
    monsters6,
    monsters7,
  ]);

  if (!monsters) {
    return (
      <>
        <p>loading information</p>{" "}
        <img className="card-art" src={dot} alt="dots" />
      </>
    );
  }

  if (monsters && monsters.length < 1) {
    return (
      <p>Oops! No monsters match this search.</p>
    )
  }

  return (
    <section className="container">
      {monsters.map((monster, index) => {
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
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ opacity: 0 }}
            viewport={{ once: true }}
            className="read-more"
            key={index}
            href={"https://www.dndbeyond.com/monsters/" + monster.slug}
            target="_blank"
            rel="noopener noreferrer"
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
          </motion.a>
        );
      })}
    </section>
  );
};

export default Cards;
