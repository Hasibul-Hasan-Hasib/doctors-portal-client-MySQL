import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import chair from '../../../images/chair.png';
import bg from '../../../images/bg.png'
import { Button, Container, Typography } from '@mui/material';



const bannerBg = {
    background: `url(${bg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    margin: '-4rem 0 2rem',
    paddingTop: '3rem'
}

const verticalCenter = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '25rem',
}



const Banner = () => {
    return (
        <Box sx={{ flexGrow: 1, ...bannerBg }}>
            <Container sx={{ height: "30rem" }}>
                <Grid container spacing={2} style={verticalCenter}>
                    <Grid item xs={12} md={6} sx={{ textAlign: 'left' }}  >
                        <Typography variant='h4' sx={{ fontWeight: 600 }}>
                            Your New Smile <br /> Starts Here
                        </Typography>
                        <Typography variant='h7' sx={{ color: '#B6B6B6' }}>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Animi repellat architecto est numquam veritatis excepturi cumque laudantium nihil id pariatur.
                        </Typography>
                        <Box><Button variant="contained" sx={{ background: 'linear-gradient(45deg, #0CFFEB 0%, #0CFF87 100%)', fontWeight: '600', paddingX: 2, paddingY: 1, marginTop: 2 }}>Get Appointment</Button></Box>
                    </Grid>
                    <Grid item xs={12} md={6} style={verticalCenter}>
                        <img src={chair} style={{ width: '27rem' }} alt="chair" />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Banner;