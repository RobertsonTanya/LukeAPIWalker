import axios from "axios";
import { navigate } from '@reach/router';
import React, { useEffect, useState } from "react";

const People = (props) => {
    const { id, apiData, isError } = props;
    // const [apiData, setApiData] = useState({});
    // const [isError, setIsError] = useState(false);
    
    // useEffect(() => {
    //     axios
    //     .get(`https://swapi.dev/api/people/${id}`)
    //     .then((response) => {
    //         setIsError(false);
    //         console.log(response.data);
    //         setApiData(response.data);
    //     })
    //     .catch((error)=>{
    //         console.log(error);
    //         setIsError(true);
    //     }
    //     )
    // }, [id]);

    if(!isError){
    return (
        <div>
            <h1>{apiData.name}</h1>
            <p>Height: {apiData.height}</p>
            <p>Eye Color: {apiData.eye_color}</p>
            <p>Hair Color: {apiData.hair_color}</p>
            <p>Skin Color: {apiData.skin_color}</p>
        </div>)
    } else {
        return (
            <div>
                <img src="https://starwarsblog.starwars.com/wp-content/uploads/2022/04/Obi-wan-kenobi-quote-quiz-TALL.jpg" alt="Obi Wan Kenobi" />
                <p>These aren't the droids you're looking for</p>
            </div>
        )
    }
};

export default People;