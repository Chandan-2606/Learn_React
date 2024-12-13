import React from 'react'

import { useState, useEffect } from 'react'

const CounterEffect = () => {
    let [count, setCount] = useState(0)
    console.log(count);
    useEffect(()=>{
        console.log("Click");
        
    },[count])
    function add(){
        count+=1;
        setCount(count)
        
    }
    function remove(){
        count-=1;
        setCount(count)
        
    }
   
  return (
    <div><h1>counter:{count}</h1>
        <button onClick={add}>IN</button>
        <button onClick={remove}>De</button>
    </div>
  )
}

export default CounterEffect