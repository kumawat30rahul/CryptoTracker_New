import { useState } from "react";
import Drawer from "@mui/material/Drawer";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import { IconButton } from "@mui/material";
import { Link } from "react-router-dom";

export default function Sidebar(){
    const [open,setOpen] = useState(false);

    return (
        <div>
            <IconButton onClick={()=>setOpen(true)}>
                <MenuRoundedIcon style={{color: 'white'}}/>
            </IconButton>
            <Drawer anchor={"right"} open={open} onClose={() => setOpen(false)}>
                <div className="drawer-div">
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