import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { Container, Typography } from '@mui/material';


const container = {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '-6.5rem'
}

const infoStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '1.25rem 2rem ',
    borderRadius: '0.3rem',
    color:'white',
}

const icons = {
    fontSize: '3.5rem'
}


const BannerInfo = () => {
    return (
        <Container>
            <Box sx={{ flexGrow: 1 }} >
            <Grid container columns={{ xs: 12, sm: 12, md: 12 }} sx={container}>
                <Grid item xs={3.9} sm={3.9} md={3.9} sx={{background:'#01C7BE',...infoStyle}}>
                    <AccessTimeIcon sx={icons}/>
                    <Box sx={{margin:"0 2rem", textAlign:'left'}}>
                        <Typography variant="h6" sx={{fontWeight:'600',marginBottom:'0.25rem'}}>Opening Hours</Typography>
                        <Typography variant="h7">Lorem ipsum dolor sit amet consectetur.</Typography>
                    </Box>
                </Grid>
                <Grid item xs={3.9} sm={3.9} md={3.9} sx={{background:'#343F4F',...infoStyle}}>
                    <PhoneInTalkIcon sx={icons}/>
                    <Box sx={{margin:"0 2rem", textAlign:'left'}}>
                        <Typography variant="h6" sx={{fontWeight:'600',marginBottom:'0.25rem'}}>Visit our Location</Typography>
                        <Typography variant="h7">Agrabad, Chittagong, Bangladesh</Typography>
                    </Box>
                </Grid>
                <Grid item xs={3.9} sm={3.9} md={3.9} sx={{background:'#01C7BE',...infoStyle}}>
                    <LocationOnIcon sx={icons}/>
                    <Box sx={{margin:"0 2rem", textAlign:'left'}}>
                        <Typography variant="h6" sx={{fontWeight:'600',marginBottom:'0.25rem'}}>Contact us Now</Typography>
                        <Typography variant="h7">+8801766848008</Typography>
                    </Box>
                </Grid>
            </Grid>
        </Box>
        </Container>
    );
};

export default BannerInfo;