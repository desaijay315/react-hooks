import React, { useState, useRef, useEffect } from 'react';

function Ref() {
    console.log("rendered")
    const [name, setName] = useState('')
    const renderCount = useRef(1)

    useEffect(() => {
        renderCount.current = renderCount.current + 1
    })

    // const inputRef = useRef()

    // function focus() {
    //     inputRef.current.focus()
    // }

    return (
        <>
            <input value={name} onChange={e => setName(e.target.value)} />
            <div>My name is {name}</div>
            <div>I was rendered {renderCount.current} times</div>

        </>
    );
}

export default Ref;
