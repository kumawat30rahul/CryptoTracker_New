import { useContext, useState } from "react";
import Drawer from "@mui/material/Drawer";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import SwitchComponent from "../SwitchButton";
import { DarkModeProvider } from "../../../App";

export default function Sidebar(){
    const [open,setOpen] = useState(false);
    const {darkMode} = useContext(DarkModeProvider)
    return (
        <div>
            <IconButton onClick={()=>setOpen(true)}>
                <MenuRoundedIcon style={{color: `${darkMode ? 'white' : 'black'}`}}/>
            </IconButton>
            <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
                <div className={`drawer-div ${darkMode ? 'drawer-div-dark' : 'drawer-div-light'}`}>
                    <SwitchComponent />

                    <Link to="/"  className="router_link">
                        <p className="link">Home</p>
                    </Link>
                    <Link to="/compare" className="router_link">
                        <p className="link">Compare</p>
                    </Link>
                    <Link to="/watchlist" className="router_link">
                        <p className="link">Watchlist</p>
                    </Link>
                    <Link to="/dashboard" className="router_link">
                        <p className="link">Dashboard</p>
                    </Link>
                </div>
             </Drawer>
        </div>
    )
}