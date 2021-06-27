import React, { useContext } from 'react';
import { Store } from '../store/index';
import { INCREMENT, DECREMENT, RESET } from '../actions/index';
const ComponentE = () => {
    const { globalState, setGlobalState } = useContext(Store);
    const handleClick = () =>{
        setGlobalState({
            type: INCREMENT
        });
    };

    const handleClick2 = () =>{
        setGlobalState({
            type: DECREMENT
        });
    };

    const handleClick3 = () =>{
        setGlobalState({
            type: RESET
        });
    };

    console.log(globalState);

return (
    <div>
        <h1>ComponentE.js</h1>
        <button onClick={handleClick}>+1</button>

        <button onClick={handleClick2}>-1</button>

        <button onClick={handleClick3}>reset</button>

    </div>
   );
};

export default ComponentE;