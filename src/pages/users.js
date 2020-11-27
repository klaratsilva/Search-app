import React from "react";
import { NavLink } from "react-router-dom";

const Users = ({ data, searchInput, setSearchInput, setData }) => {


    return (
        <div className='page'>
            <div className='container'>
                <div className='row'>
                    <div className='user-container'>
                        <div className='user-picture'>
                            <img src={data.avatar_url} alt={data.name}></img>
                        </div>


                    </div>

                </div>
            </div>
        </div >
    );
};

export default Users;