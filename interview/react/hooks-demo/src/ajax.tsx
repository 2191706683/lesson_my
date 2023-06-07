import React, { useEffect, useState } from 'react';

export const MyAjax = () => {
    const [ filter, setFilter ] = useState("");
    const [ setCollection, setUserCollection] = useState([]);
    // vue watch
    useEffect(() => {
        if (filter) {
            fetch(`https://swapi.dev/api/people?search=${filter}`)
                .then(data => data.json())
                .then(data => setUserCollection(data.results));
        }
    }, [filter]);
    return (
        <div>
            <input 
                type="text" 
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
            />
            <ul>
                {
                    setCollection.map((user, index) => (
                        <li key={index}>{JSON.stringify(user)}</li>
                    ))
                }
            </ul>
        </div>
    );
}