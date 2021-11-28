import React from "react";
import './search-box.style.css'
// functional component is just to render some html
// clases are having the state because of constructor
//  lifsicle methods are also different

export const SearchBox = ({placeholder, handleChange}) => (
    <input type='search' 
    className='search'
    placeholder= {placeholder}
    onChange={handleChange}/>
);