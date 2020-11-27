import React from "react";
import { NavLink } from "react-router-dom";

const Users = ({ userData, reposData }) => {


    return (
        <>
            <div className='page'>
                <div className='container'>
                    {userData.length !== 0 ?
                        <div className='user-container'>
                            <div className='left'>
                                <div className='user-picture'>
                                    <img src={userData.avatar_url} alt={userData.name}></img>
                                </div>
                                <div className='user-name'>
                                    <h2 className='user-name-text'>{userData.name} </h2>
                                </div>
                                <div className='user-repos'>
                                    <h4 className='user-repos-text'>{`The  total number of repositories is ${userData.public_repos}`} </h4>
                                </div>
                            </div>
                            <div className='right'>
                                <div className='user-repos-list'>
                                    <h2 className='user-repos-headline'>List of repositories:</h2>
                                    <ul>

                                        {reposData.map((data) => (
                                            <>
                                                <li key={data.id}> <h4>{data.name}</h4> <p>{data.description}</p> </li>
                                            </>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div > :
                        <div className='error-message'><h1>Please try another username</h1></div>
                    }
                </div>
            </div>
        </>
    );
};

export default Users;