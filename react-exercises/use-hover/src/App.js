import React from 'react';
import logo from './logo.svg';
import './App.css';

function useHover() {
  let [isHovered, setIsHovered] = React.useState(false);
  const ref = React.useRef(null);
  const mouseOver = () => setIsHovered(true);
  const mouseOff = () => setIsHovered(false);
  React.useEffect(
    () => {
      const node = ref.current;
      if (node) {
        node.addEventListener('mouseover', mouseOver);
        node.addEventListener('mouseout', mouseOff);

        return () => {
          node.removeEventListener('mouseover', mouseOver);
          node.removeEventListener('mouseout', mouseOff);
        };
      }
    },[ref.current]);
  return [ref, isHovered];
}

function App() {
  const [hoverRef, isHovered] = useHover();
  return (
    <div className="App">
      <br/><br/><br/>
      <div ref={hoverRef}>{isHovered ? "Hovered !" : "Hover me !"}</div>
    </div>
  );
}

export default App;
