import { createStore } from "redux";
import _ from "lodash";

const validUserDetails={ 
  "username":"hruday@gmail.com",
  "password" :'hruday123' 
 } 
 var isLoggedIn=localStorage.getItem('loggedIn')
const initialState = {validUser:isLoggedIn?isLoggedIn:false};
const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "VERIFY_USER":
      if (_.isEqual(validUserDetails,action.payload)) {
      localStorage.setItem('loggedIn', true);
      return {validUser:true}
      }
      return {...state,validUser:true}
    case "LOGOUT":{
      localStorage.setItem('loggedIn', false);
      return {...state,validUser:false}
    }
    default:
      return state;
  }
};

const store = createStore(taskReducer);

export default store;
