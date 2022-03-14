import React from 'react';
import Grid from '@mui/material/Grid';
import { Button, Container, Typography } from '@mui/material';
import Doctor from '../../../images/doctor.png'
import Background from '../../../images/appointment-bg.png'
import { Box } from '@mui/system';


const appointmentBanner = {
    background: `url(${Background})`,
    backgroundColor: 'rgba(45, 58, 74, 0.8)',
    backgroundBlendMode: 'darken',
    width: '90%',
    margin: '12rem auto 10rem',
}

const AppointmentBanner = () => {
    return (
        <Container>
            <Grid container spacing={2} style={appointmentBanner}>
                <Grid item xs={12} md={5} >
                    <img style={{ width: "25rem", marginTop: "-7rem", marginBottom: "-4px" }} src={Doctor} alt="doctor uncle" />
                </Grid>
                <Grid item xs={12} md={7} sx={{ display: 'flex', justifyContent: 'flex-start', textAlign: 'left', alignItems: 'center' }}>
                    <Box>
                        <Typography variant="h6" sx={{ fontWeight: 600, background: 'linear-gradient(45deg, #0CFFEB 0%, #0CFF87 100%)', backgroundClip: 'text', color: "transparent", marginBottom: 2 }}>
                            Appointment
                        </Typography>
                        <Typography variant="h4" sx={{ fontWeight: 500, color: 'white', marginBottom: 1 }}>
                            Make a Appointment Today
                        </Typography>
                        <Typography variant="h7" sx={{ fontWeight: 600, color: 'white' }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos quaerat sapiente pariatur culpa earum unde aspernatur ullam libero eius quisquam.
                        </Typography>
                        <Box><Button variant="contained" sx={{ background: 'linear-gradient(45deg, #0CFFEB 0%, #0CFF87 100%)', fontWeight: '600', paddingX: 2, paddingY: 1, marginTop: 2 }}>Learn More</Button></Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AppointmentBanner;