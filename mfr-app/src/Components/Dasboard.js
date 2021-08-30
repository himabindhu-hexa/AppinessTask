import {userData} from './DashboardData';
import { useDispatch} from 'react-redux';
import { useHistory, } from "react-router-dom";
import '../Styles/Dashboard.css'

export const Dashboard=()=> {
  const data =userData;
  const dispatch = useDispatch();

  let history = useHistory();
  const logoutHandler=()=>{
    dispatch({type:'LOGOUT'})
    
    history.push('/login')
  } 
  return (
      <div  className="dashboard_page">
        <button className="logout-button" onClick={logoutHandler}>Logout</button>
        <table>
          <thead>
            <tr>
              <th>Id

              </th>
              <th>Name</th>
              <th>Age</th>
              <th>Gender</th>
              <th>Email</th>
              <th>PhoneNo</th>
              </tr>
          </thead>
          <tbody>
          {data.map((user,i)=>{
     return ( <tr key={i}>
        <td>{user.id}</td>
        <td>{user.name}</td>
        <td>{user.age}</td>
        <td>{user.gender}</td>
        <td>{user.email}</td>
        <td>{user.phoneNo}</td>

      </tr>
     )
    })}
       
          </tbody>
        </table>
      </div>
    );
  }
  