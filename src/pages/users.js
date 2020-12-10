import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Link, useParams } from "react-router-dom";

const Users = () => {
    const [userData, setData] = useState([]);
    const [reposData, setReposData] = useState([]);
    const { name } = useParams();
    const [errors, setErrors] = useState("");
    /*   console.log(name, 'param') */

    const getData = async () => {
        try {

            const resultUsers = await axios(`https://api.github.com/users/${name}`)

            setData(resultUsers.data)
            const resultRepos = await axios(`https://api.github.com/users/${name}/repos`)
            setReposData(resultRepos.data);

        } catch (error) {
            setErrors('There is not such a username. Please try again!')
        }

    }

    useEffect(() => {
        getData();
    }, [])



    return (
        <>
            <div className='page'>
                <div className='container'>
                    {!errors ?
                        <>
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

                                    <Link className='back-button'  /* onClick={handleClear}  */ to='/' exact>
                                        Back to search
                                 </Link>

                                </div>
                                <div className='right'>
                                    <div className='user-repos-list'>
                                        <h2 className='user-repos-headline'>List of repositories:</h2>
                                        <ul>

                                            {reposData.map((data) => (

                                                <li key={data.id}> <h4>{data.name}</h4> <p>{data.description}</p> </li>

                                            ))}
                                        </ul>
                                    </div>
                                </div>

                            </div >


                        </> :
                        <div className='error-wrapper'>
                            <div className='error-message'><h1>{errors}</h1></div>
                            <Link className='error-button'  /* onClick={handleClear}  */ to='/' exact>
                                Back to search
                             </Link>
                        </div>
                    }
                </div>
            </div>
        </>
    );
};

export default Users;