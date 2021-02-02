import React, { useState, useMemo, useEffect } from 'react';

function slowFunction(num) {
    console.log('Calling slow function');
    for (let i = 0; i < 10000000; i++) { }
    return num * 2;
}

function Memo() {
    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)
    const doubleNumber = useMemo(() => slowFunction(number), [number])

    const themeStyles = useMemo(() => {
        return {
            backgroundColor: dark ? 'black' : 'white',
            color: dark ? 'white' : 'black'
        }
    }, [dark])

    useEffect(() => {
        console.log('render')
    }, [themeStyles])

    return (
        <>
            <input type="number" value={number} onChange={e => setNumber(parseInt(e.target.value))} />
            <button onClick={() => setDark(prevDark => !prevDark)}>Change Theme</button>
            <div style={themeStyles}>{doubleNumber}</div>
        </>
    );
}

export default Memo;
