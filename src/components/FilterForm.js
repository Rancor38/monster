import React from 'react';

const FilterForm = () => {
    return (
        <div>
            <input placeholder='Name' type="form" name='Filter' required/>
            <button type="button">Find by Name</button>
        </div>
    );
};

export default FilterForm;