import React, {useState} from "react";
import {Field, Form, Formik} from "formik";
import * as Yup from "yup";
import {
    Button,
    Card, CardActions,
    CardContent,
    CardHeader,
    FormControl,
    Grid,
    InputLabel,
    makeStyles,
    MenuItem,
    Select
} from "@material-ui/core";
import {TextField} from "formik-material-ui";
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
    {label: "Male", value: "Male"},
    {label: "Female", value: "Female"}
]
const FeatureInputForm = () => {
    const classes = useStyle();
    const [predictionMade, setPredictionMade] = useState(false);
    const [prediction, setPrediction] = useState("");

    return (
        <div>
            <Grid container justify="center" spacing={1}>
                <Grid item md={6}>
                    <Card className={classes.padding}>
                        <CardHeader title="DISEASE  PREDICTION "/>
                        <CardContent>
                            <Formik
                                initialValues={{gender: "", city: ""}}
                                onSubmit={(values, {setSubmitting}) => {
                                    setTimeout(() => {
                                        setSubmitting(false);
                                    }, 500);
                                    const requestOptions = {
                                        method: 'POST',
                                        headers: {'Content-Type': 'application/json'},
                                        body: JSON.stringify({
                                            feature_1: values.gender,
                                            feature_2: values.city
                                        })};
                                    fetch('/api/addRecord', requestOptions)
                                        .then((response) => response.json())
                                        .then((data) => {
                                            console.log("RESPONSE");
                                            setPrediction(data);
                                            console.log("response next");
                                        });
                                    setPredictionMade(true);
                                }}
                                validationSchema={Yup.object().shape({
                                    gender: Yup.string()
                                        .required(" This field is required"),
                                    city: Yup.string()
                                        .required("This field is required.")
                                })}
                            >
                                {props => {
                                    const {
                                        values,
                                        touched,
                                        errors,
                                        isSubmitting,
                                        handleChange,
                                        handleBlur,
                                        handleSubmit
                                    } = props;
                                    return (
                                        <form onSubmit={handleSubmit}>
                                            <Grid item container spacing={1} justify="center">
                                                <Grid item xs={12} sm={6} md={12} style={{margin: 12}}>
                                                    <FormControl fullWidth variant="outlined">
                                                        <InputLabel id="demo-simple-select-outlined-label">
                                                            Gender
                                                        </InputLabel>
                                                        <Select
                                                            className={errors.gender && touched.gender && "error"}
                                                            labelId="demo-simple-select-outlined-label"
                                                            id="demo-simple-select-outlined"
                                                            label="Gender"
                                                            onChange={handleChange}
                                                            value={values.gender ? values.gender : ""}
                                                            name="gender">
                                                            {options.map((item) => (
                                                                <MenuItem key={item.value} value={item.value}>
                                                                    {item.label}
                                                                </MenuItem>
                                                            ))}
                                                        </Select>
                                                    </FormControl>
                                                    {errors.gender && touched.gender && (
                                                        <div className="input-feedback">{errors.gender}</div>
                                                    )}
                                                </Grid>
                                                <Grid item xs={12} sm={6} md={12} style={{margin: 12}}>

                                                    <Field
                                                        label="City"
                                                        variant="outlined"
                                                        fullWidth
                                                        name="city"
                                                        value={values.city ? values.city : ""}
                                                        component={TextField}
                                                        className={errors.city && touched.city && "error"}
                                                    />
                                                    {errors.password && touched.password && (
                                                        <div className="input-feedback">{errors.password}</div>
                                                    )}
                                                </Grid>
                                                <CardActions>
                                                    <Button
                                                        disabled={isSubmitting}
                                                        variant="outlined"
                                                        color="primary"
                                                        type="Submit"
                                                        className={classes.button}>
                                                        Predict
                                                    </Button>
                                                </CardActions>
                                            </Grid>
                                        </form>);
                                }}
                            </Formik>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            <PredictionResult show={predictionMade} prediction={prediction} />
        </div>
    );
};

export default FeatureInputForm;
