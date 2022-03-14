import React from 'react';
import { Card, CardContent, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';




const Testimonial = (props) => {

    const { name, state, image, content } = props.data;

    const card = {
        maxWidth: 345,
        padding: '1rem 0.7rem 0'
    };


    const personStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: '2rem 1rem'
    };





    return (
        <Grid item xs={4}>
            <Card sx={{ ...card }}>
                <CardContent>
                    <Typography variant="body1" lineHeight={1.7} color="text.secondary">
                        {content}
                    </Typography>
                </CardContent>
                <Box sx={personStyle}>
                    <img src={image} style={{width: '4.2rem'}} alt="" />
                    <Box sx={{display:'grid', textAlign:'left'}}>
                        <Typography variant="h7" sx={{fontSize:'1.2rem', fontWeight: 600, textAlign: 'left', background: 'linear-gradient(45deg, #0CFFEB 0%, #0CFF87 100%)', backgroundClip: 'text', color: "transparent", marginBottom: 0.7}}>
                            {name}
                        </Typography>
                        <Typography variant="h7" sx={{color:'gray'}}>{state}</Typography>
                    </Box>
                </Box>
            </Card>
        </Grid>
    );
};

export default Testimonial;