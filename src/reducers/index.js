import { combineReducers, createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension';

const initialState = {
   allIds:[],
   byIds : {}    
    }


//https://dmitripavlutin.com/object-rest-spread-properties-javascript/
export const appReducer = (state = initialState, action) => {
    switch (action.type) {
        
       case "ADD_TODO" : {
           //Object destructuring
        //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment#Object_destructuring
           const { id, content} = action.payload;
           return {
               ...state,
               allIds : [...state.allIds, id],
               byIds : {
                   ...state.byIds,
                   [id] : {
                        content,
                        completed : false
                   }
                   
               }
           }

       }
      
       //not touching allIds here
       case "TOGGLE_TODO" : {
           const {id} = action.payload
           return {
               ...state,
               byIds : {
                   ...state.byIds,
                   [id] : {
                       ...state.byIds[id],
                       completed : !state.byIds[id].completed
                   }
               }
           }
       }

        default:
            return state
    }
}


const rootReducer = combineReducers({
    app : appReducer,

});

// const store = createStore(rootReducer);

//http://extension.remotedev.io/
//https://github.com/zalmoxisus/redux-devtools-extension#installation
const store = createStore(rootReducer, devToolsEnhancer( ));

export default store;