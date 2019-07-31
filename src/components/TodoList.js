import React from 'react';
import Todo from './Todo'
import {connect} from 'react-redux'
import {getTodos} from '../redux'

//https://codesandbox.io/s/9on71rvnyo

const TodoList = ({todos}) => {

    console.log(todos)

    return (
        <ul className="todo-list">
            {/* https://reactjs.org/docs/conditional-rendering.html#inline-if-with-logical--operator */}
            {todos && todos.length ?
              todos.map((todo, index) => {
                  return <Todo key={`todo-${todo.id}`} todo={todo} />
              })
              : "No todos"}
         </ul>
    )
}


const mapStateToProps = state => {
 

    const todos = getTodos(state)

    return { todos }
}

export default connect(mapStateToProps)(TodoList)

