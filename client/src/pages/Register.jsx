import React from 'react';
// Corrected imports: use curly braces for named imports from the main package
import {
    Stack,
    Paper,
    Box,
    Button, Typography
} from '@mui/material';
import { Link } from 'react-router-dom';
function Register(){
    return (
        <Stack sx={{
            height: "80vh",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Paper sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                p: "20px",
                borderRadius: "10px",
                border: "2px solid rgba(210, 214, 227, 0.2)",
                boxShadow: '0px 0px 40px rgba(210, 214, 227, 0.2)',

            }}>
                <Typography variant='h4'>Signup</Typography>
                <label htmlFor="">Name</label>
                <input type="text" placeholder='Fullname' /><br />
                <label htmlFor="">Email</label>
                <input type="text" placeholder='Email' /><br />
                <label htmlFor="">Password</label>
                <input type="text" placeholder='Password' /><br />
                <Box sx={{
                    display: "flex",
                    justifyContent: "end",
                    mt: "10px",
                    width: "100%"
                }}>
                    
                    <Button to="/profile" component={Link} sx={{
                        color: "white",
                        border: "1px solid white"
                    }}>Signin</Button>
                </Box>
            </Paper>
        </Stack>
    );
}

export default Register;