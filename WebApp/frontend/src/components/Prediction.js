import React, {Component, useState} from 'react'
import {
    FormHelperText,
    Input,
    Grid,
    Typography,
    RadioGroup,
    makeStyles,
    Card,
    CardContent,
    MenuItem,
    InputLabel,
    Select,
    CardActions,
    CardHeader,
    FormControl,
    FormControlLabel, FormLabel, Radio, Checkbox, Button
} from "@material-ui/core";

import {Formik, Form, Field} from "formik"
import * as Yup from "yup"
import {TextField} from "formik-material-ui"
import PredictionResult from "./PredictionResult";

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

const options = [
    {label: "Kadın", value: "Kadın"},
    {label: "Erkek", value: "Erkek"}
]

let validationSchema = Yup.object().shape({
    firstName: Yup.string().required("Required"),
    /*
  password: Yup.string()
    .matches(
      lowercaseRegEx,
      "Must contain one lowercase alphabetical character!"
    )
    .matches(
      uppercaseRegEx,
      "Must contain one uppercase alphabetical character!"
    )
    .matches(numericRegEx, "Must contain one numeric character!")
    .required("Required!"),
    */
})

const Prediction = () => {

    const classes = useStyle()

    const [predictionMade,setPredictionMade] = useState(false);

    const onSubmit = (values) => {

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                feature_1: values.firstName,
                feature_2: values.occupation
            })
        };

         fetch('/api/addRecord', requestOptions)
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                setPredictionMade(true);
            });
         console.log(predictionMade);
    }

    return (
        <div>
            <Grid container justify="center" spacing={1}>
                <Grid item md={6}>
                    <Card className={classes.padding}>
                        <CardHeader title="PREDICTION INPUT FORM"/>
                        <Formik
                            initialValues={{firstName: "", occupation: ""}}
                            validationSchema={validationSchema}
                            onSubmit={onSubmit}>
                            {({dirty, isValid, values, handleChange, handleReset}) => {
                                return (
                                    <Form>
                                        <CardContent>
                                            <Grid item container spacing={1} justify="center">
                                                <Grid item xs={12} sm={6} md={6}>
                                                    <Field
                                                        label="First Name"
                                                        variant="outlined"
                                                        fullWidth
                                                        name="firstName"
                                                        value={values.firstName ? values.firstName : ""}
                                                        component={TextField}
                                                    />
                                                </Grid>

                                                <Grid item xs={12} sm={6} md={12}>
                                                    <FormControl fullWidth variant="outlined">
                                                        <InputLabel id="demo-simple-select-outlined-label">
                                                            Occupation
                                                        </InputLabel>
                                                        <Select
                                                            labelId="demo-simple-select-outlined-label"
                                                            id="demo-simple-select-outlined"
                                                            label="Occupation"
                                                            onChange={handleChange}
                                                            value={values.occupation ? values.occupation : ""}
                                                            name="occupation">
                                                            <MenuItem>None</MenuItem>
                                                            {options.map((item) => (
                                                                <MenuItem key={item.value} value={item.value}>
                                                                    {item.label}
                                                                </MenuItem>
                                                            ))}
                                                        </Select>
                                                    </FormControl>
                                                </Grid>
                                                <Grid item xs={12} sm={6} md={6}>
                                                    <Field
                                                        label="City"
                                                        variant="outlined"
                                                        fullWidth
                                                        name="city"
                                                        value={values.city ? values.city : ""}
                                                        component={TextField}
                                                    />
                                                </Grid>
                                                <Grid item xs={12} sm={6} md={6}>
                                                    <Field
                                                        label="Country"
                                                        variant="outlined"
                                                        fullWidth
                                                        name="country"
                                                        value={values.country ? values.country : ""}
                                                        component={TextField}
                                                    />
                                                </Grid>

                                            </Grid>
                                        </CardContent>

                                        <CardActions>
                                            <Button

                                                disabled={!dirty || !isValid}
                                                variant="outlined"
                                                color="primary"
                                                type="Submit"
                                                className={classes.button}>
                                                Predict

                                            </Button>
                                        </CardActions>
                                    </Form>
                                )
                            }}
                        </Formik>
                    </Card>
                </Grid>
            </Grid>
        <PredictionResult show = {predictionMade}   />

        </div>

    )
}

export default Prediction