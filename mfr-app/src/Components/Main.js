import {Route} from 'react-router-dom'
import {Login} from './Login'
import {Dashboard} from './Dasboard'
import {useSelector} from 'react-redux'


export const Main=()=> {
  
  var validUser = useSelector(state=>state);
  
  return (
    <div >
      {validUser.validUser!=="false" ?
        <Route  path="/dashboard">
          <Dashboard/>
        </Route>:<Route  path="/">
         <Login />
        </Route>
        
      }
      
        <Route exact path="/login">
          <Login/>
        </Route>

    </div>
  );
}

