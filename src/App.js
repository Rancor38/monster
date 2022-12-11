import { Route, Routes } from "react-router-dom";
import Cards from "./components/Cards";
import Header from "./components/Header";
import About from "./components/About";
import { useState } from "react";
import NotFoundPage from "./components/NotFoundPage";

const App = () => {
  // Const variables for the SRD Monsters, these will be passed down as props to the Cards component as 'url'.
  const srdUrl = "https://api.open5e.com/monsters/?document__slug=wotc-srd";

  const errorFunction = () => {
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>;
  };

  // set search's state
  const [searchInput, setSearchInput] = useState("");
  const [searchResult, setSearchResult] = useState("");

  const searchUrl = `https://api.open5e.com/monsters/?document__slug=wotc-srd&search=${searchInput}`;

  const fetchSearch = () => {
    fetch(searchUrl)
      .then((res) => res.json())
      .then((json) => setSearchResult(json.results))
      .catch((err) => {
        errorFunction();
      });
  };

  const handleChange = (e) => {
    e.preventDefault();
    setSearchInput(e.target.value);
    fetchSearch();
  };
  const resetChange = () => {
    setSearchInput("");
    setSearchResult("");
  };

  return (
    <div className="App">
      {/* Printing the Header Component within the App */}
      <Header
        handleChange={handleChange}
        searchInput={searchInput}
        resetChange={resetChange}
      />
      <>
        {/* Printing the Card element for each page of results from the API, with each having a route */}
        <Routes>
          <Route
            path="/"
            element={<Cards url={srdUrl} searchResult={searchResult} />}
          />
          <Route path="/about" element={<About />} />
        </Routes>
      </>
      {/* A separate route to give the stats component, and render it to the app when one of the card elements are clicked. */}
    </div>
  );
};

export default App;
