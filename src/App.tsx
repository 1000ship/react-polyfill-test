import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

export const isIE = /* @cc_on!@ */ false || !!(document as any).documentMode;

function App() {
  const [count, setCount] = useState<number>(0);
  const [data, setData] = useState<any>({});

  useEffect(() => {
    if (count === 10) alert('You clicked me 10 times!!');
  }, [count]);

  const clickHandler = () => {
    setCount((count) => count + 1);
  };

  useEffect(() => {
    (async () => {
      const response = await fetch(
        'https://raw.githubusercontent.com/OAI/OpenAPI-Specification/main/examples/v2.0/json/api-with-examples.json',
        {
          method: 'get',
        },
      );
      const json = await response.json();
      setData(json);
      console.log(json);
    })();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div>{isIE ? "I'm IE" : "I'm not IE"}</div>
        <div>{Object.getOwnPropertyNames(data).join(', ')}</div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Paragraph Element
          <code style={{ marginLeft: 4, marginRight: 4 }}>Code Element</code>
        </p>
        <a
          className="App-link"
          onClick={clickHandler}
          style={{ cursor: 'pointer' }}
        >
          {count === 0 ? 'Click Me' : `You clicked me ${count} times`}
        </a>
      </header>
    </div>
  );
}

export default App;
