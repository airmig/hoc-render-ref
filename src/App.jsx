import "./App.css";
import { useEffect, useState } from "react";
import { PanelMouseTracker2 } from "./hoc";
import { PointMouseTracker2 } from "./hoc";

const MousePosition = ({ render }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMousePositionChange = (e) => {
      // Use e.clientX and e.clientY to access the mouse position on the screen
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    };

    window.addEventListener("mousemove", handleMousePositionChange);

    return () => {
      window.removeEventListener("mousemove", handleMousePositionChange);
    };
  }, []);

  // What should be returned here?
  return render(mousePosition);
};

// This component should not receive any props
const PanelMouseLogger = () => {
  return (
    <div className="BasicTracker">
      <p>Mouse position:</p>
      <div className="Row">
        <MousePosition render={(mousePosition)=>(<>
          <span>x: {mousePosition.x}</span>
          <span>y: {mousePosition.y}</span>
        </>)}/>
      </div>
    </div>
  );
};



// This component should not receive any props
const PointMouseLogger = () => {
  return (
    <MousePosition render={(mousePosition)=>(    <p>
      ({mousePosition.x}, {mousePosition.y})
    </p>)}/>

  )
};

function App() {
  return (<>
    <header className="Header">HOC and renderProps</header>
    <div className="App">
      
      <PanelMouseLogger/>
      <PointMouseLogger/>
      <PanelMouseTracker2/>
      <PointMouseTracker2/>
    </div></>

  );
}

export default App;
