import React, { useState } from 'react';

//use this in useState will run this everytime whenver the incerement and decrement is done
function countInitial() {
  console.log('run the function')
  return 4
}

function App() {
  console.log("Render")
  //current state
  // const [state, setState] = useState({ count: 4, theme: "blue" });
  const [count, setCount] = useState(4);

  // function decrementCount() {
  //   setState(prevCount => {
  //     return { ...prevCount, count: prevCount.count - 1 }
  //   })
  // }

  function decrementCount() {
    setCount(prevCount => prevCount - 1)
  }

  function incrementCount() {
    setCount(prevCount => prevCount + 1)
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;
