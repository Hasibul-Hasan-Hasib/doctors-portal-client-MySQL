import React from 'react';
import { CardMedia, Grid } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const Service = (props) => {
    const { name, description, img } = props.service;
    return (
        <Grid item xs={4} sm={4} md={4} >
            <Card sx={{ minWidth: 275, border: 0, boxShadow: 0}}>
                <CardMedia
                    component="img"
                    style={{width: 'auto', height: '100px', margin: '1rem auto'}}
                    image={img}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography sx={{mb: 1}} variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body2" sx={{color:'#607d8b'}}>
                        {description}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default Service;