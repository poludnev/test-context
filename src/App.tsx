import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useTestContext } from './contexts/TestContext';
import { TestComponent1 } from './components';

function App() {
  console.count('render App');
  const testcontext = useTestContext();
  console.log('testcontext', testcontext);

  return (
    <div className="App">
      <button onClick={() => testcontext.setValue1(testcontext.value1)}>Button</button>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <TestComponent1 />
    </div>
  );
}

export default App;
