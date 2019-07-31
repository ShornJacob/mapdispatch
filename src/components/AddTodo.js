import React, { Component } from 'react'
import {connect} from 'react-redux'
import {addTodo} from '../actions'


//https://codesandbox.io/s/9on71rvnyo
//https://9on71rvnyo.csb.app/

class AddTodo extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             input : ""
        }
    }
    
    updateInput = input => {
        this.setState({input})
    }

    handleAddTodo = () => {
        this.props.addTodo(this.state.input)
        //clear local stateafter updatinf store
        this.setState({input : ""})
    }

    render() {
        return (
            <div>
                <input
                //chnage local state with every update
                    onChange = { e => this.updateInput(e.target.value)}
                //reflect the changed state in value
                    value={this.state.input}
                />

                <button className="add-todo" onClick={this.handleAddTodo}>Add Todo</button>
            </div>
        )
    }
      
    }

    //https://react-redux.js.org/using-react-redux/connect-mapdispatch#return
    //map dispatch should return a plain object

    //If you use action creators ( as oppose to plain object actions ) inside dispatch, 
    //it is a convention to simply name the field key the same name as the action creator:
    const mapDispatchToProps = dispatch => {
        return {
          // dispatching actions returned by action creators
          addTodo: (content) => dispatch(addTodo(content)),
 
        }
      }


    //no mapstatetoprops
    //but a action creator in object shorthand as mapdispatchtopros
    //https://react-redux.js.org/using-react-redux/connect-mapdispatch
    export default connect(
        null,
        // { addTodo }
        mapDispatchToProps
      )(AddTodo);