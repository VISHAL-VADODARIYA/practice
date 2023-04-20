import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function MyButton() {
//   return (
//     <button>
//       I'm a button
//     </button>
//   );
// }

// export default function MyApp() {
//   return (
//     <div>
//       <h1>Welcome to my app</h1>
//       <MyButton />
//     </div>
//   );
// } 

function MyButton() {
  function handleClick() {
    alert('You clicked me!');
  }

  return (
    <div>
      <h1>Welcome to my app</h1>
    <button onClick={handleClick}>
      Click me
    </button>
    </div>
  );
}

export default MyButton