import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Box } from '@mui/system';




const Testimonial = (props) => {

    const { name, state, image, content } = props.data;

    const personStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around', 
    }


    return (
        <>
            <Card sx={{ maxWidth: 345 }}>
                <CardContent>
                    <Typography variant="body2" color="text.secondary">
                        {content}
                    </Typography>
                </CardContent>
                <Box sx={personStyle}>
                    <img src={image} alt="" />
                    <Box>
                        <Typography>{name}</Typography>
                        <Typography>{state}</Typography>
                    </Box>
                </Box>
            </Card>
        </>
    );
};

export default Testimonial;