import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface testState {
    items: [
        {
            id: 1,
            question: 'You have set up an Auto Scaling group. The cool down period for the Auto Scaling group is 7 minutes. The first instance is launched after 3 minutes, while the second instance is launched after 4 minutes. How many minutes after first instance is launched will Auto Scaling accept another scaling actMt request?',
            rep1: '11 minutes',
            rep2: '7 minutes',
            rep3: '10 minutes',
            rep4: '14 minutes',
            answer: 1,
            explain: 'Nếu giải thích một Auto Scaling group thay đổi quy mô đang khởi chạy nhiều hơn 1 instance thì khoảng thời gian ',
        }
    ]
}

const initialState: testState = {
    value: 0,
}

export const testSlice = createSlice({
    name: 'test',
    initialState,
    reducers: {
        index: () => {

        },
        reply: () => {

        },
        check: () => {

        },
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.value += 1
        },
    },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = testSlice.actions

export default testSlice.reducer