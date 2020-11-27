import React from "react";

const Home = () => {
    return (
        <div className='page'>
            <div className='container'>
                <div className='row'>
                    <div className='search-container'>
                        <input
                            type="text"
                            name="query"
                            className='search-input'
                            placeholder="Search..."
                        /*    value={searchInput}
                           onChange={handleChange} */
                        />
                        <button className='search-button' /* onClick={handleClick} */>Serach</button>


                    </div>

                </div>
            </div>
        </div >
    );
};

export default Home;