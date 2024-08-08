
import { useEffect, useState } from "react";

const withMousePosition2 = (WrappedComponent) => {
    return (props) => {
    const [mousePosition, setMousePosition] = useState({
      x: 0,
      y: 0,
    });
  
    useEffect(() => {
      const handleMousePositionChange2 = (e) => {
        // Use e.clientX and e.clientY to access the mouse position on the screen
        setMousePosition({
          x: e.clientX,
          y: e.clientY
        })
      };
  
      window.addEventListener("mousemove", handleMousePositionChange2);
      return () => {
        window.removeEventListener("mousemove", handleMousePositionChange2);
      };
    }, []);
  
    // What should be returned here?
    return (
      <WrappedComponent {...props} mousePosition={mousePosition} />
    )
    }
  };
  
// This component should not receive any props
const PanelMouseLogger2 = ({mousePosition}) => {
    // The below if statement can be removed after the render props pattern is implemented
    if (!mousePosition) {
      return null;
    }
    return (
      <div className="BasicTracker">
        <p>Mouse position:</p>
        <div className="Row">
          <span>x: {mousePosition.x}</span>
          <span>y: {mousePosition.y}</span>
        </div>
      </div>
    );
  };
  
  // This component should not receive any props
  const PointMouseLogger2 = ({mousePosition}) => {
    // The below if statement can be removed after the render props pattern is implemented
    if (!mousePosition) {
      return null;
    }
    return (
      <p>
        ({mousePosition.x}, {mousePosition.y})
      </p>
    )
  };

export  const PanelMouseTracker2 =  withMousePosition2(PanelMouseLogger2);
export  const PointMouseTracker2 = withMousePosition2(PointMouseLogger2);

