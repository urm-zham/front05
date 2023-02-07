import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {add, divide, multiply, subtract} from "../../store/calcSlice";
function CalcPage() {

    const [n1, setN1] = useState("")
    const [n2, setN2] = useState("");
    const dispatch = useDispatch();
    const {res} = useSelector(state => state.calcReducer);
    const changeN1 = (event) => {
        setN1(event.target.value);
    }
    const changeN2 = (event) => {
        setN2(event.target.value);
    }

    const addBtn = () => {
        if (n1 === "" || n2 === "") {
            alert("Input all numbers!")
        }
        else {
            dispatch(add({
                n1, n2
            }));
        }
    }

    const subtractBtn = () => {
        if (n1 === "" || n2 === "") {
            alert("Input all numbers!")
        }
        else {
            dispatch(subtract({
                n1, n2
            }));
        }
    }
    const multiplyBtn = () => {
        if (n1 === "" || n2 === "") {
            alert("Input all numbers!")
        }
        else {
            dispatch(multiply({
                n1, n2
            }));
        }
    }
    const divideBtn = () => {
        if (n1 === "" || n2 === "") {
            alert("Input all numbers!")
        }
        else if (Number(n2) === 0) {
            alert("Can't divide by 0!")
        } else {
            dispatch(divide({
                n1, n2
            }));
        }

    }

    return (
        <>
            <h2>Calculate</h2>
            <div>
                <input type="number" onChange={changeN1}/>
                <input type="number" onChange={changeN2}/>
            </div>
            <div>
                <button onClick={addBtn}>+</button>
                <button onClick={subtractBtn}>-</button>
                <button onClick={multiplyBtn}>*</button>
                <button onClick={divideBtn}>/</button>
            </div>
            <p>Result: {res}</p>
        </>
    );
}

export default CalcPage;