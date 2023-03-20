import React from "react";

import NavigationBar from "../navigationBar/NavigationBar";
import Poll from "./Tryout";

import './After-logged.css'

const AfterLoggedIn = () => {

    return (
        <div>
            <NavigationBar/>
            <Poll />
        </div>
    );
}
export default AfterLoggedIn