import './App.css';
import beholder from './beholder.svg'

const App = () => {
  return (
    <div className="App">
      <h1>Welcome to Monsters!</h1>
      <img src={beholder} alt="skeletaur"/>
      <p>I would like to make an app that:</p>
      <ul>
        <li>Takes a monster from 5e DnD, and can tell me their basic information, displaying name, stats, abilities, actions, etc.</li>
        <li>Displays that basic information within a div that appears as a block</li>
        <li>Make them filterable</li>
        <li>I'm going to need the following components to make this happen: I need... App to display the nav-bar and search-box, A Cards componant to display the monster previews as cards, an Info component to display the monsters info when they are clicked on, and an about component to display an about page explaining how to use the app.</li>
        <li>Bronze Goals: Make the site 'cards' look like playing cards</li>
        <li>Silver Goals: Make the cards animated with ract Animate API, so they flip over when you click on them to reveal their stats</li>
        <li>Gold Goals: ...</li>
        <li>Take the basic information, and parse proficiency bonus, which equals 1+ CR/4 rounded up, as long as the CR is greater than 0, lower than that it is just +2</li>
      </ul>
    </div>
  );
}

export default App;
