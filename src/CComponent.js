import React from "react";
import { ContextApiComponent } from "./ContextApiComponent";

class CComponent extends React.Component{
    render(){
        return(
            <div>
                <h1>CComponent</h1>
                <ContextApiComponent.Consumer>
                {
                    ({counter, setCounter}) => {
                        return <div>
                            <h2>{counter}</h2>
                            <button onClick={() => setCounter(counter - 1)}>Decrement</button>
                            </div>
                    }
                }
                </ContextApiComponent.Consumer>
            </div>
        );
    }
};



export default CComponent;