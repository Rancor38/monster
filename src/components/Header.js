import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
        <h1>Monster Finder</h1>
        <header>    
            <h2>
                <Link to='/'>Find Monsters</Link> 
                <Link to='/about'>About</Link>
            </h2>
            
        </header>
        </>
    );
};

export default Header;