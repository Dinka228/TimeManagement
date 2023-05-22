import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import UserStore from "./store/UserStore";
import CalendarStore from "./store/CalendarStore";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import 'bootstrap/dist/css/bootstrap.min.css';
export const Context = createContext(null)
ReactDOM.render(
    <Context.Provider value={
        {
            user: new UserStore(),
            calendar:new CalendarStore(),
        }
    }>
        <App />
    </Context.Provider>,
    document.getElementById('root')
);
