import {Typography, Container, Box, Stack, Button} from "@mui/material";
import React from "react";

function Home (){
    return(
        <Container id='home'> 
            <Stack
                direction={{xs:'column', md:'row'}}
                spacing = {2}
                sx={{
                    width: '100%',
                    minHeight: '85vh'
                }}
                
            >
                <Box
                    sx={{
                        width: {xs: '100%'},
                        padding: '3rem 0',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '5rem',
                        
                    }}
                >
                    <Typography>
                        jjjj
                    </Typography>
                </Box>
            
            </Stack>
        </Container>
    )
}
export default Home;