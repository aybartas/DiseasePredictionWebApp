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
import FeatureInputForm from "./FeatureInputForm";

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

    return (
        <div>

            <FeatureInputForm/>

        </div>

    )
}

export default Prediction