import { Link } from 'react-router-dom';
import FilterForm from './FilterForm';

const Header = () => {
    return (
        <>
        <h1>Monster Finder</h1>
        <header>    
            <h2>
                <Link to='/'>Find Monsters</Link> 
            </h2>
            {/* <FilterForm />  Comment me in to activate FilterForm search*/}
            <h2 >
                <Link to='/about'>About</Link>
            </h2>
            
        </header>
        </>
    );
};

export default Header;