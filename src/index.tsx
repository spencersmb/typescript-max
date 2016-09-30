import * as ReactDOM from "react-dom";
import * as React from "react";

import {Home} from "./components/Home";

let app: HTMLElement | null = document.getElementById('app');
ReactDOM.render(

    <Home age={24} name="spencer"/>,
   app
);