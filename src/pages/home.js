import React from "react";
import axios from 'axios';
import { NavLink } from "react-router-dom";

import SearchBox from "../components/searchBox"


const Home = ({ userData, setUserData, searchInput, setSearchInput, reposData, setReposData }) => {


    const handleChange = (e) => {
        const input = e.target.value.toLowerCase();
        setSearchInput(input)
    }

    const handleClick = async () => {
        try {

            const resultUsers = await axios(`https://api.github.com/users/${searchInput}`)
            if (userData) {
                setUserData(resultUsers.data);
            }
            const resultRepos = await axios(`https://api.github.com/users/${searchInput}/repos`)
            setReposData(resultRepos.data);
            console.log(userData, 'userData');
            console.log(reposData, 'userData')
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className='page'>
            <div className='container'>
                <div className='row'>
                    <div className='search-container'>
                        <SearchBox onChange={handleChange} value={searchInput} onClick={handleClick} />
                        {/*  <input
                            type="text"
                            name="query"
                            className='search-input'
                            placeholder="Search username..."
                            value={searchInput}
                            onChange={handleChange}
                        />
                        <button onClick={handleClick} className='search-button' >
                            <NavLink to='/users' exact>
                                Search
                         </NavLink>
                        </button>
 */}

                    </div>

                </div>
            </div>
        </div >
    );
};

export default Home;