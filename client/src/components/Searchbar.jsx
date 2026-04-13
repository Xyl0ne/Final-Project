import TextField from '@mui/material/TextField';
import { Stack, Button, Typography} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

function Searchbar(){
    return(
        <Stack sx={{
            flexDirection:"row",
            bgcolor: "#1E1E1E",
            alignItems: "center"
        }}>
            <input type="text" placeholder='Search' style={{
                height: "35px",
                width: "200px"
            }} />
            <SearchIcon sx={{
                fontSize: "30px"
            }}></SearchIcon>
        </Stack>
            
        
    )
}
export default Searchbar;