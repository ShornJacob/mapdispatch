import React from 'react';
import { connect } from "react-redux";
import { toggleTodo } from "../actions"

//https://codesandbox.io/s/9on71rvnyo
//toggleTodo from connect
//todo as prop
const Todo = ({ todo, toggleTodo}) => (
    <li onClick={() => toggleTodo(todo.id)}>
        {todo && todo.completed  ? "👌" : "👋"}  
        <span>{todo.content}</span>
    </li>
)

//only mapdispatchtoprops , same key as functionname
export default connect(
    null,
    { toggleTodo }
)(Todo)