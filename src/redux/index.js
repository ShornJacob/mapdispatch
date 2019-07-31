//state is referred as store herte
//https://codesandbox.io/s/9on71rvnyo

// export const getTodos = store => {
//   getTodoList(store)
// }


export const getTodosState = store => {
//   console.log(store.app.byIds)
  return store.app
} 

//returns an array
export const getTodosList= store => {
    //   console.log(store.app.byIds)
    return getTodosState(store) ? getTodosState(store).allIds : []
      
    } 

    //returns an object . uses spread on the object returned
    //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax#Spread_in_object_literals
export const getTodoById = (store,id) => {
    const todobyID = getTodosState(store) ? { ...getTodosState(store).byIds[id] , id} : {}

    //{content: "dfgdf", completed: false, id: 1}
    //console.log(todobyID)
    return todobyID
}
    
export const getTodos = store => {

    const list = getTodosList(store)
    //[0, 1]
    //console.log(list)

    //pass each id 
    const todos = getTodosList(store).map(id => getTodoById(store, id));

    //Array of Objects  [{…}, {…}]
    //console.log(todos)

    return todos
}
  
