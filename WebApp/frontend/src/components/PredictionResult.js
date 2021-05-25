import {
    Button,
    Card,
    CardActions,
    CardContent,
    Grid,
    makeStyles, Paper,
    Table, TableBody, TableCell, TableContainer,
    TableHead, TableRow,
    Typography
} from "@material-ui/core";
import React, {Component} from "react";
import * as PropTypes from "prop-types";

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
    table: {
        minWidth: 300
    }

}));

function createData(disease, probability) {
    return {disease, probability};
}

function createRows(prediction){

    let prediction_array = prediction.substring(1, prediction.length-1).split(",");
    console.log(prediction_array);

    let rows = [];
    let i = 1;
    for( let disease of prediction_array){
        console.log(disease);
        rows.push(createData('Disease '+i, disease));
        i++;
    }
    return rows;
}

const PredictionResult = ({show, prediction}) => {

    const classes = useStyle();

    if (show) {
        return (<Grid container justify="center" spacing={1}>
            <Grid item xs={{ span: 6, offset: 3 }} >
                <Card className={classes.padding}>
                    <CardContent>
                        <Typography className={classes.title} color="textSecondary" gutterBottom>
                            I would suggest you to consider diseases below based on their probabilities attached
                        </Typography>

                        <TableContainer component={Paper}>
                            <Table className={classes.table} size="small" aria-label="a dense table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Disease</TableCell>
                                        <TableCell>Probability</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>

                                    {createRows(prediction).map((row) => (
                                        <TableRow key={new Date().getDate()}>
                                            <TableCell component="th" scope="row">
                                                {row.disease}
                                            </TableCell>
                                            <TableCell align="right">{row.probability}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>

                    </CardContent>
                </Card>
            </Grid>
        </Grid>);
    } else {
        return null;
    }
}
export default PredictionResult