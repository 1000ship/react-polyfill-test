import MainContext, { IMainContext } from 'contexts/MainContext';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import './App.css';
import logo from './logo.svg';

export const isIE = /* @cc_on!@ */ false || !!(document as any).documentMode;

const Center = styled.div`
  ${isIE
    ? css`
        display: table-cell;
        text-align: center;
        vertical-align: middle;
      `
    : css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      `}

  background-color: #282c34;
  min-width: 100vw;
  min-height: 100vh;
  font-size: calc(10px + 2vmin);
  color: white;

  @media only screen and (max-width: 600px) {
    background-color: black;
  }
`;

const CustomDiv = styled.div`
  color: red;
  background-color: #fff;
`;

const App: React.FC<{
  setContext: React.Dispatch<React.SetStateAction<IMainContext>>;
}> = (props) => {
  const { setContext } = props;
  const context = useContext(MainContext);
  const [count, setCount] = useState<number>(0);
  const [data, setData] = useState<unknown>({});
  const appRef = useCallback<React.RefCallback<HTMLDivElement>>(
    (app) => app && console.log(`App Div has ${app?.children.length} children`),
    [],
  );

  useEffect(() => {
    if (count === 10) alert('You clicked me 10 times!!');
    setContext({ name: '성혁', age: count });
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
    })();
  }, []);

  return (
    <div className="App" ref={appRef}>
      <Center>
        <div>{isIE ? "I'm IE" : "I'm not IE"}</div>
        <div>
          {context.name} | {context.age}
        </div>
        <div>{Object.getOwnPropertyNames(data).join(', ')}</div>
        <CustomDiv>This is styled-components element</CustomDiv>
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
      </Center>
    </div>
  );
};

export default App;
