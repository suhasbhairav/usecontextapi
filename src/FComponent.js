import React, { useContext } from 'react'
import { ContextApiComponent } from './ContextApiComponent';

function FComponent() {
    const { counter, setCounter } = useContext(ContextApiComponent);
    return (
        <div>
            <h1>FComponent</h1>
            <div>{counter}</div>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
            <hr></hr>
            <Fchild />
        </div>
        
    )
}


const Fchild = () => {
    const { counter, setCounter } = useContext(ContextApiComponent);
    return (
        <div>
            <h1>FChild</h1>
            <h1>{counter}</h1>
            <button onClick={() => setCounter(counter - 1)}>Decrement</button>
        </div>
    );
}
export default FComponent;
