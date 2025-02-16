import React from "react";
import ReactDOM from 'react-dom/client';
import stores from "./stores";
import { Provider } from "react-redux";
import Coincreate from "./Coincreate";

function App(){
    return(
        <Provider store={stores}>
           <Coincreate/>
        </Provider>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App/>);