import React from 'react';

const SearchForm = () => {
    return (
        <form className='search-form'>
            <input placeholder='Filter' type="text" name='searchString' required/>
            <button type="submit">Search</button>
        </form>
    );
};

export default SearchForm;