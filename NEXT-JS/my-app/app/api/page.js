'use client';
import React, { useState } from "react";

export default function Counter(){
    const [count,setCount]=useState(0)
    function counting(){
        setCount(count+1)
    }
    return (
        <div>
            <h1>Counter</h1>
            <button onClick={counting}>click me</button>
            <h2>{count}</h2>
        </div>
    )
}