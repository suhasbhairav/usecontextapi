import React, {useContext, useState} from 'react';
import './App.css';
import CComponent from './CComponent';
import { ContextApiComponent } from './ContextApiComponent';
import FComponent from './FComponent';


function App() {
  const [counter, setCounter] = useState(0);

  const increment = () => {
    setCounter(counter + 1);
  };

  const decrement = () => {
    setCounter(counter - 1);
  };

  
  return (
    <div className="App">
      <h1>Use Context</h1>
      <h1>{counter}</h1>
      <button onClick={() => increment()}>Increment</button>
      <button onClick={() => decrement()}>Decrement</button>
      <ContextApiComponent.Provider value={ {counter, setCounter}}>
      <FComponent />
      <hr></hr>
      <CComponent />
      </ContextApiComponent.Provider>
    </div>
  );
}

export default App;
