import React, { useEffect, useState } from "react";
import axios from 'axios';

import Loading from './Loading';
import TourList from './TourList';
import NoTour from './NoTour';
import "./style.css";

const App = () => {
    const url = 'https://course-api.com/react-tours-project';
    const [ results, setResults ] = useState([]);
    const [ loading, setLoading ] = useState(true);

    const fetchTours = async () => {
        setLoading(true);
        try {
            const { data } = await axios.get(url);
            setLoading(false);
            setResults(data);
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        fetchTours();
    },[]);

    const hideTour = id => {
        setResults(results.filter(result => result.id !== id));
    }

    if(loading) {
        return <Loading />
    }

    if(!results.length) {
        return <NoTour onRefresh = { fetchTours } />
    }

    return (
        <div className="wrapper">
            <TourList data = { results } tour={ hideTour }/>
        </div>
    )
}
export default App;
