import React, { useEffect, useState, useRef } from "react";
import testSvg from "/test.svg";
import { colors } from "./ColorPalette";

const ColoringBoard = () => {
  const [selectedColor, setSelectedColor] = useState("#ff0000");
  const svgContainerRef = useRef(null);

  useEffect(() => {
    fetch(testSvg)
      .then((res) => res.text())
      .then((data) => {
        if (svgContainerRef.current) {
          svgContainerRef.current.innerHTML = data;
        }
      });
  }, []);

  const handleClick = (e) => {
    if (e.target.tagName === "path" || e.target.tagName === "circle") {
      e.target.style.fill = selectedColor;
    }
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  return (
    <div>
      <h1>Creative Coloring Board</h1>

      <h3>Color Palette</h3>
      <div>
        {colors.map((color) => (
          <button
            key={color}
            onClick={() => handleColorSelect(color)}
            style={{
              margin: "5px 5px 30px 5px",
              backgroundColor: color,
              border: selectedColor === color ? "2px solid #E5E7EB" : "",
            }}
          />
        ))}
      </div>

      <div
        ref={svgContainerRef}
        style={{
          width: "100%",
          padding: "20px",
          background: "linear-gradient(145deg, #ffffff, #f5f5f5)",
          borderRadius: "16px",
          display: "flex",        
          justifyContent: "center", 
          alignItems: "center",
        }}
        onClick={handleClick}
      />

      
    </div>
  );
};

export default ColoringBoard;

