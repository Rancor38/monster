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
      <Cards />
      <About />
      <Stats />
    </div>
  );
}

export default App;
