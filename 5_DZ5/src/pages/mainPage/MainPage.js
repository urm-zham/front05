import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addNumAction, clearNumbersAction, clearNumbersActions} from "../../redux/actions";

function MainPage() {

    const [input, setInput] = useState(0);
    const dispatch = useDispatch();
    const {numbers} = useSelector(state => state.numReducer)

    const getNum = (event) => {
        setInput(event.target.value)
    }

    const addNum = () => {
        dispatch(addNumAction(input));
        setInput(0);
    }

    const clearNumbers = () => {
        dispatch(clearNumbersAction())
    }

    return (
        <>
            <input type="number" onChange={getNum} value={input}/>
            <button onClick={addNum}>ADD</button>
            <button onClick={clearNumbers}>CLEAR</button>
            {
                numbers.map(num => <p>{num}</p>)
            }

        </>
    );
}

export default MainPage;