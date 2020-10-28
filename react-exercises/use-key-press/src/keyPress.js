import React from 'react';


function useKeyPress(subscribedKey) {
  let [keyPressed, setKeyPressed] = React.useState(false);

  function keyDown({key}) {
    if (key === subscribedKey) setKeyPressed(true);
  }

  function keyUp({key}) {
    if (key === subscribedKey) setKeyPressed(false);
  }

  React.useEffect(()=>{
    window.addEventListener('keydown', keyDown);
    window.addEventListener('keyup', keyUp);
    return () => {
      window.removeEventListener('keydown', keyDown);
      window.removeEventListener('keyup', keyUp);
    }
  }, []);

  return keyPressed;
}

function KeyPress() {
  const enterKeyPressed = useKeyPress('Enter')
  return(
    <>
      <p>{enterKeyPressed ? <h1>Pressed</h1> : <h2>Not pressed</h2>}</p>
    </>
  )
}

export  {KeyPress, useKeyPress};