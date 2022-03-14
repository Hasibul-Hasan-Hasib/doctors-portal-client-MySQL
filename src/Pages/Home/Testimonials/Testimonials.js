import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import Testimonial from '../Testimonial/Testimonial';
import people1 from '../../../images/people-1.png';
import people2 from '../../../images/people-2.png';
import people3 from '../../../images/people-3.png';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';



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


const testimonialBannerStyle = {
    alignItems: 'center',
    justifyContent: 'space-between',
}

const iconStyle = {
    fontSize: '18rem',
    transform: 'rotate(180deg)',
    color: 'rgba(12,255,135,0.3)',
}




const Testimonials = () => {
    return (
        <>
            <Container>
                <Grid container sx={testimonialBannerStyle}>
                    <Grid item xs={7} sx={{paddingLeft: '4rem'}}>
                        <Typography variant="h6" sx={{ fontWeight: 600, textAlign: 'left', background: 'linear-gradient(45deg, #0CFFEB 0%, #0CFF87 100%)', backgroundClip: 'text', color: "transparent", marginBottom: 2 }}>
                            TESTIMONIAL
                        </Typography>
                        <Typography variant="h4" sx={{ fontWeight: 600, textAlign: 'left'}}>
                            What's Our Patient <br/> Says
                        </Typography>
                    </Grid>
                    <Grid item xs={5} sx={{textAlign:'right'}}>
                        <FormatQuoteIcon sx={iconStyle}/>
                    </Grid>
                </Grid>
                <Grid container spacing={1}>
                    {
                        testimonialInfo.map(testimonial => <Testimonial data={testimonial} />)
                    }
                </Grid>
            </Container>
        </>
    );
};

export default Testimonials;