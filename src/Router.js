import React from "react";
import {HomeView} from "./view/HomeView";
import {MainView} from "./view/MainView";
import {Route, Routes} from "react-router-dom";

class BasicRoute extends React.Component {
    render() {
        return (
            <Routes>
                <Route path="/" element={<MainView/>}/>
                <Route path="/home" element={<HomeView/>}/>
            </Routes>
        );
    }
}

export default BasicRoute;