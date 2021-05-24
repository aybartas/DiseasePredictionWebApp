import {Button, Card, CardActions, CardContent, Grid, makeStyles, Typography} from "@material-ui/core";
import React, {Component} from "react";

const useStyle = makeStyles((theme) => ({
    padding: {
        padding: theme.spacing(3),
    },
    button: {
        margin: theme.spacing(1)
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
}));

const PredictionResult = ({show,prediction}) => {

    const classes = useStyle();
    console.log(show);
    console.log(prediction);
    if (show) {
        return (<Grid container justify="center" spacing={1}>
            <Grid item md={6}>
                <Card className={classes.padding}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            Word of the Day
                        </Typography>
                        <Typography variant="h5" component="h2">
                            rttyrtyrtyrtrtytr rtyy rt
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                            adjective
                        </Typography>
                        <Typography variant="body2" component="p">
                            well meaning and kindly.
                            <br/>
                            {prediction}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Grid>);
    } else {
        return null;
    }
}
export default PredictionResult