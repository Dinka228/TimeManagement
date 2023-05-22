import {BrowserRouter} from "react-router-dom";
import NavBar from "./component/NavBar";
import AppRouter from "./component/AppRouter";
import {useContext, useEffect, useState} from "react";
import {check} from "./http/userAPI";
import {Context} from "./index";
import {Spinner} from "react-bootstrap";
import {fetchOneTask} from "./http/taskAPI";

const App =()=> {
    const {user} = useContext(Context)
    const {calendar} = useContext(Context)
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            check().then(data=>{
                user.setCurrentUser(data)
                fetchOneTask(user.currUser.id).then(data=>calendar.setTasks(data))
                console.log(user.users)
                user.setIsAuth(true)
            }).finally(()=>setLoading(false))
        },2000)

    },[])
    if(loading){
        return <Spinner animation={"grow"}/>
    }
  return (
      <BrowserRouter>
        <div>
            <NavBar />
            <AppRouter />
        </div>

      </BrowserRouter>
  );
}

export default App;
