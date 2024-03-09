import React from "react";
import './App.css';

export default function Button ({onClick, name}) {
  return (
    <button onClick={onClick} className="button">{name}</button>
  );
}
