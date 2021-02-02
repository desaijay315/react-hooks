import React, { useState, useEffect } from 'react';

function Effect() {
    const [resourceType, setresourceType] = useState('posts')
    // const [items, setItems] = useState([])

    useEffect(() => {
        // fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
        //     .then(response => response.json())
        //     .then(json => setItems(json))

        console.log('resource changed')
        return () => {
            console.log('return from respurce changed')
        }

    }, [resourceType])

    return (
        <>
            <div>
                <button onClick={() => setresourceType('posts')}>Posts</button>
                <button onClick={() => setresourceType('users')}>Users</button>
                <button onClick={() => setresourceType('comments')}>Comments</button>
            </div>
            <h1>{resourceType}</h1>
            {/* {items.map(item => {
                return <pre>{JSON.stringify(item)}</pre>
            })} */}
        </>
    );
}

export default Effect;
