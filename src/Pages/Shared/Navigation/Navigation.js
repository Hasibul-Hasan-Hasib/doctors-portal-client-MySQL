import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';

const navLink = {
    color: 'black',
    fontWeight: 600,
    margin: '1rem'
}


const Navigation = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none' }}>
                <Toolbar sx={{ justifyContent: 'right' }}>
                    {/* <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2, color: 'black' }}
                    >
                        <MenuIcon />
                    </IconButton> */}
                    <Box>
                        <Button color="inherit" sx={navLink}>Home</Button>
                        <Button color="inherit" sx={navLink}>About</Button>
                        <Button color="inherit" sx={navLink}>Dental Service</Button>
                        <Button color="inherit" sx={navLink}>Reviews</Button>
                        <Button color="inherit" sx={navLink}>Blog</Button>
                        <Button color="inherit" sx={navLink}>Contact Us</Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default Navigation;