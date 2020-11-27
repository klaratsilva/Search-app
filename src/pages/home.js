import React from "react";
import axios from 'axios';
import { NavLink } from "react-router-dom";



const Home = ({ data, searchInput, setSearchInput, setData }) => {


    const handleChange = (e) => {
        const input = e.target.value.toLowerCase();
        setSearchInput(input)
    }

    const handleClick = async () => {
        try {
            const result = await axios(`https://api.github.com/users/${searchInput}`)
            setData(result.data);

            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className='page'>
            <div className='container'>
                <div className='row'>
                    <div className='search-container'>
                        <input
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

                        {/* <button >Serach</button> */}
                    </div>

                </div>
            </div>
        </div >
    );
};

export default Home;