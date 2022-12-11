import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = (props) => {
  const handleChange = props.handleChange;
  const searchInput = props.searchInput;
  const resetChange = props.resetChange;

  return (
    <>
      <h1>Monster Finder 5E</h1>
      <header>
        <motion.h2 whileHover={{ scale: 1.05 }} whileTap={resetChange}>
          <Link to="/">Find Monsters</Link>
        </motion.h2>

        <motion.div whileHover={{ scale: 1.05 }} className="search">
          <input
            type="text"
            placeholder="Search monsters..."
            onChange={handleChange}
            value={searchInput}
          />
        </motion.div>

        <motion.h2 whileHover={{ scale: 1.05 }} whileTap={{ opacity: 0 }}>
          <Link to="/about">About</Link>
        </motion.h2>
      </header>
    </>
  );
};

export default Header;
