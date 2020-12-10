import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";


const Home = () => {
    const [searchInput, setSearchInput] = useState('');
    const [isDisabled, setIsDisabled] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        setSearchInput('');
    }, [])

    const handleChange = (e) => {
        const input = e.target.value.toLowerCase();
        setSearchInput(input)
    }

    useEffect(() => {
        if (searchInput.trim() === '') {
            setIsDisabled(true)
        } else {
            setIsDisabled(false)
        }
    }, [searchInput])

    const handleError = () => {
        setError('Username is required')
    }

    return (
        <div className='page'>
            <div className='container'>
                <div className='row'>
                    <form className='search-container'>
                        <input
                            required
                            type="text"
                            name="query"
                            className='search-input'
                            placeholder="Search Github Username..."
                            value={searchInput}
                            onChange={handleChange}
                        />
                        {isDisabled ? <span className='error-text'>{error}</span> : null}

                        {isDisabled ? <button data-testid='search-button' onClick={handleError} className='search-button-disabled'>Search</button> :
                            <Link to={`/users/${searchInput}`} className='search-button' >
                                Search
                            </Link>
                        }
                    </form>
                </div>
            </div>
        </div >

    );
};

export default Home;