import './style/drawer.css'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';

export default function Drawer(){
    return(
        <div className="drawer">
            <DHeader/>
            <Liste/>
        </div>
    )
}

function DHeader(){
    return(
        <div className="dheader">
            <div id="DiscT">Discussions</div>
            <div className="headrec">
                <SearchRoundedIcon className="white"/>
                <input type="text" placeholder="Rechercher une discussion" id="rec"/>
            </div>
            
        </div>
    )
}

function Liste(){
    return(
        <div className="liste">
            <ListTile/>
            <ListTile/>
            <ListTile/>
            <ListTile/>
            <ListTile/>
            <ListTile/>
            <ListTile/>
            <ListTile/>
            <ListTile/>
            <ListTile/>
            <ListTile/>
        </div>
    )
}

function ListTile(){
    return(
        <div className="listTile">
            <div className="avatar LAvatar"></div>
            <div className="Ltxt">
                <div className="Lname">Fehizoro</div>
                <div className="Lmes">Lorem ipsum dolor sit amet consectetur</div>
            </div>
        </div>
    )
}