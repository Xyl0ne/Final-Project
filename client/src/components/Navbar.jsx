
import {
    AppBar, Toolbar, Typography, Button, Stack,
    IconButton
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import YouTubeIcon from '@mui/icons-material/YouTube';
import SearchBar from "./SearchBar";

function Navbar() {
    return (
        <AppBar position="sticky">
            <Toolbar>
                <IconButton color="inherit" 
                    to="/" edge="start">
                    <YouTubeIcon/>
                </IconButton>
                <Typography variant="h6" sx={{ flexGrow: 1, ml: 1 }}>
                    Youtube
                </Typography>

                <SearchBar/>
                
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;