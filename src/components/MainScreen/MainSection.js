import React, { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";

import "../../css/animate.min.css";

const r = ["bounce", "rubberBand", "swing", "tada"];

// This decides how long the text will wait before running the animation again.
const ANIMATION_INTERVAL = 15; // 5 === 5 seconds

export default function MainSection({ title, color, path, index }) {
  let history = useHistory();

  const [updateRef, setUpdateRef] = useState(new Date());

  // This updates the text animations every ANIMATION_INTERVAL seconds.
  useEffect(() => {
    let interval = setInterval(() => {
      setUpdateRef(new Date() + index);
    }, ANIMATION_INTERVAL * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      onClick={() => {
        history.push(path);
      }}
      style={{
        height: 100,
        width: 150,
        border: `solid 5px ${color}`,
        padding: 5,
        margin: 5,
        borderRadius: 15,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span
        key={updateRef}
        className={`text-shadow animate__animated animate__${r[index]} animate__repeat-1 animate__slow`}
        style={{
          fontSize: 28,
          color: "white",
        }}
      >
        {title}
      </span>
    </div>
  );
}
