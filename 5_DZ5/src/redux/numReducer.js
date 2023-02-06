import {types} from "./types";

const initState = {
    numbers: []
}


function numReducer(state = initState, action) {
    switch (action.type) {
        case types.ADD :
            // const sumNums = state.numbers.reduce((sum, a) => sum + a, 0);
            const prevNum = state.numbers.length > 0 ? state.numbers[state.numbers.length - 1] : 0;
            return {...state, numbers: [...state.numbers, prevNum + +action.payload]};

        case types.CLEAR :
            return {...state, numbers: []};
        default:
            return state;
    }
}

export default numReducer;