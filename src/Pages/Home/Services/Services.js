import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import { Typography } from '@mui/material';
import Service from '../Service/Service';
import Fluoride from '../../../images/fluoride.png';
import Cavity from '../../../images/cavity.png'
import Whitening from '../../../images/whitening.png'


const services = [
    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In perspiciatis eum impedit debitis atque magni nesciunt quasi repellendus, tempore quas!',
        img: Fluoride 
    },
    {
        name: 'Cavity filling',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In perspiciatis eum impedit debitis atque magni nesciunt quasi repellendus, tempore quas!',
        img: Cavity 
    },
    {
        name: 'Fluoride Treatment',
        description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. In perspiciatis eum impedit debitis atque magni nesciunt quasi repellendus, tempore quas!',
        img:  Whitening 
    },
]


const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 , margin: '6rem 0 10rem'}}>
            <Container>
                <Typography variant="h4" sx={{fontWeight:600, my: 8}} component="div">
                    Our Services
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service service={service} />)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;