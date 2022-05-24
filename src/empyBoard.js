import "./index.css";
import React from "react";

const EmptyBoard = () => {
  return (
    <div>
      <div className="board-row">
        <button className="cell"></button>
        <button className="cell"></button>
        <button className="cell"></button>
        <button className="cell"></button>
      </div>
      <div className="board-row">
        <button className="cell"></button>
        <button className="cell"></button>
        <button className="cell"></button>
        <button className="cell"></button>
      </div>
      <div className="board-row">
        <button className="cell"></button>
        <button className="cell"></button>
        <button className="cell"></button>
        <button className="cell"></button>
      </div>
      <div className="board-row">
        <button className="cell"></button>
        <button className="cell"></button>
        <button className="cell"></button>
        <button className="cell"></button>
      </div>
    </div>
  );
};

export default EmptyBoard;
