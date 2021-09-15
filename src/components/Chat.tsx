import React from "react";
import './style/chat.css'
import SendRoundedIcon from '@material-ui/icons/SendRounded';

export default function Chat(){
    return(
        <div className="chat">
            <Header/>
            <Message/>
            <Footer/>
        </div>
    )
}

function Header(){
    return(
        <div className="header">
            <div className="avatar avhead">
                
            </div>
            Fehizoro
        </div>
    )
}

function Footer(){
    return(
        <div className="footer">
            <div className="footercontent">
                <input type="text" className="inputchat" placeholder="Aa"/>
                <SendRoundedIcon className="bleu"/>
            </div>
        </div>
    )
}

let lorem="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione ipsa culpa atque dolorem corporis excepturi, iste, in aperiam velit non facilis fuga rerum vitae tenetur illo totam qui! Dolor, voluptatibus?"

function Message(){
    return(
        <div className="message">
            <MesRec txt="hello my friend"/>
            <MesEnv txt="hello Fehizoro"/>
            <MesRec txt={lorem}/>
            <MesEnv txt={lorem}/>
            <MesRec txt={lorem}/>
            <MesEnv txt={lorem}/>
            <MesRec txt={lorem}/>
            <MesEnv txt={lorem}/>
            <MesRec txt={lorem}/>
            <MesEnv txt={lorem}/>
            <MesRec txt={lorem}/>
            <MesEnv txt={lorem}/>
            <MesRec txt={lorem}/>
            <MesEnv txt={lorem}/>
        </div>
    )
}

interface Imessage{
    txt:string;
}

function MesRec(m : Imessage){
    return(
        <div className="ensMes">
            <div className="avatar MAvatar"></div>
            <div className="MesTxt recu">
                {m.txt}
            </div>
        </div>
    )
}

function MesEnv(m : Imessage){
    return(
        <div className="ensMes">
            <div className="MesTxt envoye">
                {m.txt}
            </div>
        </div>
    )
}
