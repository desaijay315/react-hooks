import React, { useState, useEffect } from 'react';

function Effect() {
    const [windowWidth, setwindowWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => {
            console.log('unmount')
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const handleResize = () => {
        setwindowWidth(window.innerWidth)
    }

    return (
        <div>
            {windowWidth}
        </div>
    );
}

export default Effect;
