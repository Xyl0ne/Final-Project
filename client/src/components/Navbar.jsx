
import {
    AppBar, Toolbar, Typography, Button, Box
} from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Searchbar from "./SearchBar";
import { Link  } from "react-router-dom";

function Navbar(){
    return(
        <AppBar position="sticky" sx={{
            boxShadow: '0px 0px 40px rgba(210, 214, 227, 0.2)',
            borderBottom: "2px solid rgba(39, 39, 40, 0.2)"
        }}>

            <Toolbar sx={{
                bgcolor: "primary.main", width: "100%",
                justifyContent: "space-between"
            }}>
                <Link to="/" style={{textDecoration: 'none', color: 'white' }}>
                    <Typography variant="h6" sx={{  ml: 1 }}>Youtube</Typography>
                </Link>
                
                <Box sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center"
                }}> 
                    <Link to="/profile" style={{ textDecoration: 'none', color: 'white' }}>
                        <AccountCircleIcon sx={{ fontSize: 40 }} />
                    </Link>
                    <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>
                        <Typography >Login</Typography>
                    </Link>
                    
                </Box>
                
            </Toolbar>
        </AppBar>
    )
}
export default Navbar;