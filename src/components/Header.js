import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Header = () => {
  return (
    <>
      <h1>Monster Finder 5E</h1>
      <header>
        <motion.h2 whileHover={{ scale: 1.05 }} whileTap={{ opacity: 0 }}>
          <Link to="/">Find Monsters</Link>
        </motion.h2>
        {/* <FilterForm /> */}
        <motion.h2 whileHover={{ scale: 1.05 }} whileTap={{ opacity: 0 }}>
          <Link to="/about">About</Link>
        </motion.h2>
      </header>
    </>
  );
};

export default Header;
