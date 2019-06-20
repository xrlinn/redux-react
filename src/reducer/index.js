

// export default function count(state = {
//     count: 0
// }, action) {
//     switch (action.type) {
//         case "INCREMENT":
//             return {
//                 ...state,
//                 count: state.count + 1
//             };
//         case "DECREMENT":
//             return {
//                 ...state,
//                 count: state.count - 1
//             };
//         default:
//             return state
//     }
// }
const initialState = {
    arr: [
        {
            text: "学习redux",
            isDone: false,
            isEdit: false,
        }
    ],
    status: 1 // 1.显示全部 2.显示未完成 3.显示已完成
}
export default function count(state = initialState, action) {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                arr: [...state.arr, action.item]
            };
        case "DECREMENT":
            return {
                ...state,
                count: state.count - 1
            };
        default:
            return state
    }
}

