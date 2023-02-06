import {types} from "./types";

export function addNumAction(num) {
    return {
        type: types.ADD,
        payload: num
    }
}

export function clearNumbersAction() {
    return {
        type: types.CLEAR
    }
}