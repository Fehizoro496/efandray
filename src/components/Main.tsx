import React from "react";
import './style/main.css'
import Drawer from "./Drawer";
import Chat from "./Chat";
import Options from "./Options";

export default function Main(){
    return(
        <div className="main">
            <Drawer/>
            <Chat/>
            <Options/>
        </div>
    )
}