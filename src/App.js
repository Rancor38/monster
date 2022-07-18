import { Route, Routes } from 'react-router-dom';
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
      <Route path='/' element={ 
        //start of fragment
      <>
      <Cards 
      url={'?document__slug=wotc-srd'}
      />
      <Cards 
      url={'?document__slug=wotc-srd&page=2'}
      />
      <Cards 
      url={'?document__slug=wotc-srd&page=3'}
      />
      <Cards 
      url={'?document__slug=wotc-srd&page=4'}
      />
      <Cards 
      url={'?document__slug=wotc-srd&page=5'}
      />
      <Cards 
      url={'?document__slug=wotc-srd&page=6'}
      />
      <Cards 
      url={'?document__slug=wotc-srd&page=7'}
      />
      </>
      // end of fragment
      }/>
      <Route path='/about' element={<About/>}/>
      <Route path='stats/:name' element={<Stats /> }/>
    </Routes>
</main>
      
    </div>
  );
}

export default App;
