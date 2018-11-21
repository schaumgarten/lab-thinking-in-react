import React from 'react';
const SearchBar = () => (
    <div>
        <input type="text" placeholder="Search..."/>
        <input type="checkbox" name="stock" /> Only show products in stock
    </div>
);

export default SearchBar;