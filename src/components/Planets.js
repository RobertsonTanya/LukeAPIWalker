import React, { useEffect, useState } from "react";
import axios from "axios";

const Planets = (props) => {
    const { isError, apiData } = props;
    // const [apiData, setApiData] = useState({});
    // const [isError, setIsError] = useState(false);
    
    // useEffect(() => {
    //     axios
    //     .get(`https://swapi.dev/api/planets/${id}`)
    //     .then((response) => {
    //         setIsError(false);
    //         console.log(response.data);
    //         setApiData(response.data);
    //     })
    //     .catch((error)=>{
    //         console.log(error);
    //         setIsError(true);
    //     })
    // }, [props]);

    if(!isError){
        return (
            <div>
                <h1>{apiData.name}</h1>
                <p>Climate: {apiData.climate}</p>
                <p>Terrain: {apiData.terrain}</p>
                <p>Surface Water: {apiData.surface_water}</p>
                <p>Population: {apiData.population}</p>
            </div>)
    } else {
        return (
            <div>
                <img src="https://starwarsblog.starwars.com/wp-content/uploads/2022/04/Obi-wan-kenobi-quote-quiz-TALL.jpg" alt="Obi Wan Kenobi" />
                <p>These aren't the droids you're looking for</p>
            </div>
        )
    }
}

export default Planets;