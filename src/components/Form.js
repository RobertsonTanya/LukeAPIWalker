import { navigate } from '@reach/router';
import axios from 'axios';
import React, { useState, useEffect } from "react";

const Form = (props) => {
    const { setApiData, setIsError } = props;
    const [category, setCategory] = useState('');
    const [id, setId] = useState('');
    
    useEffect(() => {
        axios
        .get(`https://swapi.dev/api/${category}/${id}`)
        .then((response) => {
            setIsError(false);
            console.log(response.data);
            setApiData(response.data);
        })
        .catch((error)=>{
            console.log(error);
            setIsError(true);
        }
        )
    }, [category, id]);

    const submitForm = (e) => {
        e.preventDefault();
        // axios
        // .get(`https://swapi.dev/api/${category}/${id}`)
        // .then((response) => {
        //     // setIsError(false);
        //     console.log(response.data);
        //     setApiData(response.data);
        // })
        // .catch((error)=>{
        //     console.log(error);
        //     // setIsError(true);
        // }
        // )
        navigate(`/${category}/${id}`);
    };

    return (
        <form onSubmit={submitForm}>
            Search for:
            <select onChange={(e) => setCategory(e.target.value)}>
                <option value="">--------</option>
                <option value="films">films</option>
                <option value="people">people</option>
                <option value="planets">planets</option>
                <option value="species">species</option>
                <option value="starships">starships</option>
                <option value="vehicles">vehicles</option>
            </select>
            ID:
            <input type="number" onChange={(e)=> setId(e.target.value)} value={id} />
            <button type="submit">Search</button>
        </form>
    )
}
export default Form;