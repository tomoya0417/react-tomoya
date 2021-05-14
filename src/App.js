import React, { useState } from 'react';
import './App.css';

function App() {
  const clickMe = () => {
    window.alert("Hello world")
  }

  const [name, setName] = useState('tabata');

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
    console.log(count);
  }

  const down = () => {
    setCount(count - 1);
    console.log(count)
  }

  const reset = () => {
    setCount(0);
    console.log(count)
  }

  const add = () => {
    setName(name + 'tabata')
    console.log(name)
  }

  return (
    <div>
      <button onClick={increment}>いいね！</button>
      <button onClick={down}>良くないね！</button>
      <button onClick={reset}>リセット</button>
      {count}

      <div>
        <button onClick={add}>add</button>
        {name}
      </div>

      <div>
        <button onClick={clickMe}>
          Hello Word
          </button>

        <h1>Hello world</h1>
        <h2>Hello world</h2>
        <h3>Hello world</h3>
        <h4>Hello world</h4>

        <button
          onClick={() => window.alert("Hello world")}
        >button</button>

        <button>button</button>
        <input type="text" />
        <a href="#">a タグ</a>



      </div>
    </div>

  )
}

export default App;
