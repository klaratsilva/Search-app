import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const SearchBox = ({ value, onChange, onClick }) => {

    return (
        <>
            <input
                type="text"
                name="query"
                className='search-input'
                placeholder="Search username..."
                value={value}
                onChange={onChange}
            />
            <button onClick={onClick} className='search-button' >
                <NavLink to='/users' exact>
                    Search
                 </NavLink>
            </button>
        </>



    )
}

export default SearchBox