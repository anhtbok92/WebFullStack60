import React, {useReducer} from "react";

// Bộ chuyển đổi -> Với mỗi action sẽ trả ra 1 state tương ứng
const countReducer = (state, action) => {
    switch (action.type) {
        case "INCREASE":
            return {
                ...state,
                count: state.count + 1
            }
        case "DECREASE":
            return {
                ...state,
                count: state.count - 1
            }
        default:
            throw new Error();
    }
}

const UseHookReducer = () => {
    const [state, dispatch] = useReducer(countReducer, { count: 0 });
    const handleInCrease = () => {
        dispatch({ type: 'INCREASE' });
    }

    const handleDeCrease = () => {
        dispatch({ type: 'DECREASE' });
    }

    return (
        <>
            <div>
                <h1>Number {state.count}</h1>
            </div>
            <div>
                <button onClick={handleInCrease}>+</button>
                <button onClick={handleDeCrease}>-</button>
            </div>
        </>
    )
}

export default UseHookReducer;