import React, { useState, useRef, useEffect } from 'react';

function Ref() {
    console.log("rendered")
    const [name, setName] = useState('')
    const prevName = useRef('')

    useEffect(() => {
        prevName.current = name
    }, [name])

    // const inputRef = useRef()

    // function focus() {
    //     inputRef.current.focus()
    // }

    return (
        <>
            <input value={name} onChange={e => setName(e.target.value)} />
            <div>My name is {name} and it used to be {prevName.current}</div>

        </>
    );
}

export default Ref;
