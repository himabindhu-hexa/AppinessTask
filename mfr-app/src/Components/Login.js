import { useState} from 'react'
import { useDispatch,useSelector} from 'react-redux';
import '../Styles/login.css'
import { useHistory, } from "react-router-dom";

export const Login=()=> {
  let history = useHistory();
  
  var validUser = useSelector(state=>state);
  const[showMessage,SetShowMessage]=useState(false);
  const [userDetails,setUserDetails]=useState({"username":"","password":""});
  const dispatch = useDispatch();
  
  const onInputChange=(e,fieldType)=>{
    if(showMessage){
      SetShowMessage(false);
    }
    if(fieldType==="username")
    {
       setUserDetails({...userDetails,"username":e.target.value})
    }
    else if(fieldType==="password")
    {
      setUserDetails({...userDetails,"password":e.target.value})
    }
  }   

 
  

  const verifyUserDetails=()=>{
    if(userDetails.username!=="" && userDetails.password!==""){
      dispatch({type:'VERIFY_USER',payload:userDetails})
      
      if(validUser.validUser){
        history.push('/dashboard')
      }
    }
    else {
      SetShowMessage(true);
    }
  }
  return (
   <div class="login_page">
    <div class="container">
      
<label  for="uname"><b>Username :</b></label>
      <input autoFocus className="input_box" type="text" value={userDetails.username} onChange={(e)=>onInputChange(e,"username")} placeholder="Enter Username" name="uname" required />
      
      <br/>
      <label for="psw"><b>Password :</b></label>
      <input  value={userDetails.password}  onChange={(e)=>onInputChange(e,"password")} className="input_box" type="password" placeholder="Enter Password" name="psw" required />
      <br/>
      <button className="login-btn" onClick={verifyUserDetails}>Login</button>
      <br/>
      {showMessage&&
      <span className="error-msg">Please enter valid login details</span>
      }
    </div>
    </div>
  

  );
}
