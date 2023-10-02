import React from 'react';
import {Avatar, Grid, Paper, styled} from "@mui/material";
import Typography from "@mui/material/Typography";
import {deepOrange} from "@mui/material/colors";


const Item = styled(Paper)(({theme}) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 200,
    lineHeight: '200x',
}));


function About() {
    return (
        <div className="About">
            {['Katie', 'Leanne'].map((name) => (
                <Item key={name} elevation={8} style={{margin: '24px'}}>
                    <Grid container spacing={2} style={{height: '100%'}}>
                        <Grid xs={6} md={2}>
                            <Avatar src="/broken-image.jpg" sx={{width: 56, height: 56}}/>
                        </Grid>
                        <Grid xs={6} md={2}>
                            {name}
                        </Grid>
                        <Grid xs={12} md={6}>
                            <Typography>Lorem ipsum dolor sit amet. At blanditiis culpa quo consequuntur quos est quae
                                enim et perferendis ratione. In expedita exercitationem aut aliquam temporibus qui modi
                                sunt ab eius corporis et sint molestias est iure iure. Et rerum aspernatur et quaerat
                                dolorem qui numquam.</Typography>
                        </Grid>
                    </Grid>


                </Item>
            ))}
        </div>
    );
}

export default About;