import React, { useState, useCallback } from 'react';
import List from './List'

function Callback() {
    const [number, setNumber] = useState(1)
    const [dark, setDark] = useState(false)


    const themeStyles = {
        backgroundColor: dark ? '#333' : '#FFF',
        color: dark ? '#FFF' : '#333'
    }

    const getItems = useCallback(() => {
        return [number, number + 1, number + 2]
    }, [number])

    return (
        <>
            <div style={themeStyles}>
                <input type="number"
                    value={number}
                    onChange={e => setNumber(parseInt(e.target.value))}
                />
                <button
                    onClick={() => setDark(prevDark => !prevDark)}
                >
                    Toggle Theme
                </button>
                <List getItems={getItems} />
            </div>
        </>
    );
}

export default Callback;
