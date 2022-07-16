import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cards from './components/Cards';
import Header from './components/Header';
import About from './components/About';
import Stats from './components/Stats';

const App = () => {

  return (
    <div className="App">
      <Header />
<main>
    <Routes>
      <Route path='/' element={ <Cards 
      url={"https://api.open5e.com/monsters/?document__slug=wotc-srd"}
      />}/>
      <Route path='stats' element={<Stats /> }/>
    </Routes>
</main>

      
     
      <About />
      
    </div>
  );
}

export default App;
