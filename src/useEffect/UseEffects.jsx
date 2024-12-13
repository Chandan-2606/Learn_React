import React from "react";

import { useState, useEffect } from "react";

// We steup useEffect hook to run some code When
// Component reders for the (First Time)
// & Whenever it re-reders
// & some data in our component changed.

const UseEffects = () => {
  // const [value, setValue] = useState(0);
  // const [something, setSomething] = useState(0);
  const [data, setData] = useState([]);

  // useEffect(() => {
  //   console.log("call useEffect");
  //   document.title = ` Increment ${value}`;
  // }, [value, something]);

  useEffect(() => {
    async function getData() {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");

      const data = await res.json();
      if (data && data.length) setData(data);
    }
    getData();
  }, []);

  return (
    <div>
      {/* <h2>{value}</h2>
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Click me
      </button>
      <button
        onClick={() => {
          setSomething(value + 1);
        }}
      >
        Inrement by something
      </button> */}

      <ol>
        {data.map((todo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ol>
    </div>
  );
};

export default UseEffects;
