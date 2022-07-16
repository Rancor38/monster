import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cards from './components/Cards';
import Header from './components/Header';
import About from './components/About';
import Stats from './components/Stats';
import Footer from './components/Footer';

const App = () => {

  return (
    <div className="App">
      <Header />
<main>
    <Routes>
      <Route path='/' element={ <Cards 
      url={'?document__slug=wotc-srd'}
      />
      }/>
      <Route path='/2' element={ <Cards 
      url={'?document__slug=wotc-srd&page=2'}
      />
      }/>
      <Route path='/3' element={ <Cards 
      url={'?document__slug=wotc-srd&page=3'}
      />
      }/>
      <Route path='/4' element={ <Cards 
      url={'?document__slug=wotc-srd&page=4'}
      />
      }/>
      <Route path='/5' element={ <Cards 
      url={'?document__slug=wotc-srd&page=5'}
      />
      }/>
      <Route path='/6' element={ <Cards 
      url={'?document__slug=wotc-srd&page=6'}
      />
      }/>
      <Route path='/7' element={ <Cards 
      url={'?document__slug=wotc-srd&page=7'}
      />
      }/>
      <Route path='stats/:name' element={<Stats /> }/>
    </Routes>
</main>

      
      <Footer />
      {/* <About /> */}
      
    </div>
  );
}

export default App;
