import {createSlice} from "@reduxjs/toolkit";

const calcSlice = createSlice({

    name: "calcSlice",

    initialState: {
        res: 0
    },

    reducers: {
        add: (state, action) => {
            state.res = +action.payload.n1 + +action.payload.n2
        },
        subtract: (state, action) => {
            state.res = +action.payload.n1 - +action.payload.n2
        },
        multiply: (state, action) => {
            state.res = +action.payload.n1 * +action.payload.n2
        },
        divide: (state, action) => {
            state.res = +action.payload.n1 / +action.payload.n2
        }
    }
})

export const {add, subtract, multiply, divide} = calcSlice.actions // Actions

export default calcSlice.reducer // States