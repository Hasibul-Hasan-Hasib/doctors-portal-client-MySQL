import React from 'react';
import { Container, Grid } from '@mui/material';
import Testimonial from '../Testimonial/Testimonial';
import people1 from '../../../images/people-1.png';
import people2 from '../../../images/people-2.png';
import people3 from '../../../images/people-3.png';
import { Box } from '@mui/system';


const testimonialInfo = [
    {
        name: 'Winson Herry',
        state: 'California',
        image: people1,
        content: 'It is a established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using content here, content',
    },
    {
        name: 'Lisa Akroman',
        state: 'Los Angeles',
        image: people2,
        content: 'It is a established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using content here, content',
    },
    {
        name: 'Eren Yeager',
        state: 'New York',
        image: people3,
        content: 'It is a established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribute to using content here, content',
    }
]


const Testimonials = () => {
    return (
        <>
            <Container>
                <Grid container >
                    <Grid item xs={5}>
                    </Grid>
                    <Grid item xs={6.4}>
                    </Grid>
                </Grid>
                <Box>
                    {
                        testimonialInfo.map(testimonial => <Testimonial data={testimonial} />)
                    }
                </Box>
            </Container>
        </>
    );
};

export default Testimonials;