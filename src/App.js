import './App.css';
import Cards from './components/Cards';
import Header from './components/Header';
import About from './components/About';
import Stats from './components/Stats';

const App = () => {

  return (
    <div className="App">
      <h1>Welcome to Monsters!</h1>
      <Header />
      <Cards 
      url={"https://api.open5e.com/monsters/?document__slug=wotc-srd"}
      />
      <Cards 
      url={"https://api.open5e.com/monsters/?document__slug=wotc-srd&page=2"}
      />
      <Cards 
      url={"https://api.open5e.com/monsters/?document__slug=wotc-srd&page=3"}
      />
      <Cards 
      url={"https://api.open5e.com/monsters/?document__slug=wotc-srd&page=4"}
      />
      <Cards 
      url={"https://api.open5e.com/monsters/?document__slug=wotc-srd&page=5"}
      />
      <Cards 
      url={"https://api.open5e.com/monsters/?document__slug=wotc-srd&page=6"}
      />
      <Cards 
      url={"https://api.open5e.com/monsters/?document__slug=wotc-srd&page=7"}
      />
      <About />
      <Stats />
    </div>
  );
}

export default App;
