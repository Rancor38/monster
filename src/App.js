import { Route, Routes, Navigate } from 'react-router-dom';
import Cards from './components/Cards';
import Header from './components/Header';
import About from './components/About';
import Stats from './components/Stats';

const App = () => {

  // Const variables for the SRD Monsters, these will be passed down as props to the Cards component as 'url'.
  let srdUrl = 'https://api.open5e.com/monsters/?document__slug=wotc-srd'

  // If the searchform has x content in it, x content becomes appended to the end of the following url

  if (/*searchbox has searched a thing*/ true) {
    let srdUrl = 'https://api.open5e.com/monsters/?document__slug=wotc-srd&search='/*+ searchbox text*/
  }

  return (
    <div className="App">
{/* Printing the Header Component within the App */}
      <Header />
<>
{/* Printing the Card element for each page of results from the API, with each having a route */}
    <Routes>
      <Route path='/' element={ 
        //start of fragment
      <>
      <Cards 
      url={srdUrl}
      />
      <Cards 
      url={srdUrl+'&page=2'}
      />
      <Cards 
      url={srdUrl+'&page=3'}
      />
      <Cards 
      url={srdUrl+'&page=4'}
      />
      <Cards 
      url={srdUrl+'&page=5'}
      />
      <Cards 
      url={srdUrl+'&page=6'}
      />
      <Cards 
      url={srdUrl+'&page=7'}
      />
      </>
      // end of fragment
      }/>
      <Route path='/about' element={<About/>}/>
    </Routes>
   
</>
{/* A separate route to give the stats component, and render it to the app when one of the card elements are clicked. */}
    <Routes>
    <Route path='stats/:name' element={<Stats /> }/>
    </Routes>  
    </div>
  );
}

export default App;
