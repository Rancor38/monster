import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>
                <Link to='/'>Find Monsters</Link> 
            </h1>
            <h2>
                <Link to='/about'>About</Link>
            </h2>
        </header>
    );
};

export default Header;