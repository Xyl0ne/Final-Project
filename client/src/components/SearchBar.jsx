import React, { useState } from 'react';
import { Paper, IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const onhandleSubmit = (e) => {
        e.preventDefault();
        if (searchTerm) {
            console.log("Searching for:", searchTerm);
            // This is where you would call your backend API
            setSearchTerm('');
        }
    };

    return (
        <Paper
            component="form"
            onSubmit={onhandleSubmit}
            sx={{
                borderRadius: 20,
                border: '1px solid #303030', // YouTube-style dark border
                pl: 2,
                boxShadow: 'none',
                mr: { sm: 5 },
                display: 'flex',
                alignItems: 'center',
                width: { xs: '100%', sm: '400px' }, // Responsive width
                backgroundColor: '#121212', // Dark background
            }}
        >
            <InputBase
                sx={{ ml: 1, flex: 1, color: 'white' }}
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <IconButton
                type="submit"
                sx={{
                    p: '10px',
                    color: '#888',
                    backgroundColor: '#222', // Slightly lighter for the button area
                    borderRadius: '0 20px 20px 0',
                    '&:hover': { backgroundColor: '#333' }
                }}
                aria-label="search"
            >
                <SearchIcon />
            </IconButton>
        </Paper>
    );
};

export default SearchBar;