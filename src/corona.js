import React,{ useEffect, useState } from 'react';
import axios from 'axios'
function App() {
    const [countryInfo, setCountryInfo] = useState([]);

    useEffect(() => {
        axios.get("https://disease.sh/v3/covid-19/vaccine/coverage").then(res => {
            setCountryInfo(res.data)
        })
    }, []);


    console.log(countryInfo)    

    return (
        <div>
        </div>
    )
}

export default App
