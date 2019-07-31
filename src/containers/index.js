//https://react-redux.js.org/using-react-redux/connect-mapstate


function mapStateToProps(state) {
    const { todos } = state
    return { todoList: todos.allIds }
  }
  
  export default connect(mapStateToProps)(TodoList)