import React from 'react';
import {Avatar, Grid, Paper, styled} from "@mui/material";
import Typography from "@mui/material/Typography";


const Item = styled(Paper)(({ theme }) => ({
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
                <Item key={name} elevation={8} style={{margin: '24px', padding: '24px'}}>
                    <Grid container spacing={2}>
                        <Grid xs={2}>
                            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                        </Grid>
                        <Grid xs={2}>
                            {name}
                        </Grid>
                        <Grid xs={6}>
                        <Typography>Some bio content</Typography>
                        </Grid>
                    </Grid>




                </Item>
            ))}
        </div>
    );
}

export default About;