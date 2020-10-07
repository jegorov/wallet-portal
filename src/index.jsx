import React from "react";
import { render } from 'react-dom';
import {App} from "./components/App";



const rootElement = document.getElementById('root');

function Root() {
    return (
        <App/>
    )
}
render(<Root />, rootElement);