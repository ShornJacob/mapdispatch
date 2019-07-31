let nextTodoId = 0

//action creators

export const addTodo = content => ({
    type : "ADD_TODO",
    payload : {
        id : nextTodoId++,
        content
    }
})


// export const addTodo = content => {
//     return {
//             type : "ADD_TODO",
//             payload : {
//                 id : nextTodoId++,
//                 content
//     }
// } }



export const toggleTodo = id => ({
    type : "TOGGLE_TODO",
    payload : { id }
})