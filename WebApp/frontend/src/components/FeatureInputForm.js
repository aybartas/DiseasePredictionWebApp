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
    Select, Typography
} from "@material-ui/core";
import {TextField} from "formik-material-ui";
import PredictionResult from "./PredictionResult";


const useStyle = makeStyles((theme) => ({
    spacing: {
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


const feature_6_options = [
    {label: "Yes", value: "1"},
    {label: "No", value: "0"}
]

const feature_31_options = [
    {label: "Yes", value: "1"},
    {label: "No", value: "0"}
]

const feature_37_options = [
    {label: "Yes", value: "1"},
    {label: "No", value: "0"}
]

const feature_50_options = [
    {label: "Yes", value: "1"},
    {label: "No", value: "0"}
]

const feature_28_options = [
    {label: "Every Day", value: "1"},
    {label: "1-2 Days a Week", value: "2"},
    {label: "3-4 Days a Week", value: "3"},
    {label: "1-2 Days a Month", value: "4"}
]

const feature_29_options = [
    {label: "No difference", value: "No difference"},
    {label: "Mornings", value: "Mornings"},
    {label: "Evenings", value: "Evenings"},
]

const FeatureInputForm = () => {
    const classes = useStyle();
    const [predictionMade, setPredictionMade] = useState(false);
    const [prediction, setPrediction] = useState("");

    return (
        <div id="feature_input_div">
            <Grid container justify="center" id="pred_form" spacing={1}>

                <Grid item xs={{ span: 6, offset: 3 }} >

                    <Typography variant="h4" style={{color: "white", padding: "1rem"}}>
                        I am helping physicians with their diagnosis by using machine learning
                    </Typography>

                    <Typography variant="h6" style={{color: "white", padding: "1rem"}}>
                        Please provide as many features as possible below, and click prediction
                    </Typography>
                </Grid>

                <Grid id="item_grid" item xs={12}>
                    <Card id="card">
                        <CardHeader title="DISEASE  PREDICTION " id="cardHeader"/>
                        <CardContent id="card_content">
                            <Formik id="formik"
                                    initialValues={{
                                        feature_5: "",
                                        feature_6: "",
                                        feature_28: "",
                                        feature_29: "",
                                        feature_31: "",
                                        feature_37: "",
                                        feature_50: ""
                                    }}
                                    onSubmit={(values, {setSubmitting}) => {

                                        setTimeout(() => {
                                            setSubmitting(false);
                                        }, 500);
                                        const requestOptions = {
                                            method: 'POST',
                                            headers: {'Content-Type': 'application/json'},
                                            body: JSON.stringify({
                                                Feature_37_Yes: parseInt(values.feature_37, 10),
                                                Feature_29_No_Difference: values.feature_29 == feature_29_options[0].value ? 1 : 0,
                                                Feature_6_Yes: parseInt(values.feature_6, 10),
                                                Feature_29_Mornings: values.feature_29 == feature_29_options[1].value ? 1 : 0,
                                                Feature_28_Every_Day: values.feature_28 == feature_28_options[0].value ? 1 : 0,
                                                Feature_31_Yes: parseInt(values.feature_31, 10),
                                                Feature_5: parseInt(values.feature_5, 10),
                                                Feature_50_Yes: parseInt(values.feature_50, 10)
                                            })
                                        };

                                        fetch('/api/addRecord', requestOptions)
                                            .then((response) => response.json())
                                            .then((data) => {
                                                setPrediction(data);
                                            });
                                        setPredictionMade(true);
                                    }}
                                    validationSchema={Yup.object().shape({

                                        feature_5: Yup.number("This field should be numeric type")
                                            .required(" This field is required"),
                                        feature_6: Yup.string()
                                            .required(" This field is required"),
                                        feature_28: Yup.string()
                                            .required(" This field is required"),
                                        feature_29: Yup.string()
                                            .required(" This field is required"),
                                        feature_31: Yup.string()
                                            .required(" This field is required"),
                                        feature_37: Yup.string()
                                            .required(" This field is required"),
                                        feature_50: Yup.string()
                                            .required(" This field is required")
                                    })}>
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
                                        <form onSubmit={handleSubmit} id="form">

                                            <Grid item container spacing={1} justify="center" id="justifyCenter">

                                                <Grid item xs={12} sm={6} md={12} id="feature_5" style={{margin: 12}}>
                                                    <Field
                                                        id="id_5"
                                                        label="Feature 5"
                                                        variant="outlined"
                                                        fullWidth
                                                        name="feature_5"
                                                        value={values.feature_5 ? values.feature_5 : ""}
                                                        component={TextField}
                                                        className={errors.feature_5 && touched.feature_5 && "error"}
                                                    />
                                                </Grid>

                                                <Grid item xs={12} sm={6} md={12} id="feature_6" style={{margin: 12}}>
                                                    <FormControl fullWidth variant="outlined" id="feature_6_fc">
                                                        <InputLabel id="feature_6_label">
                                                            Feature 6
                                                        </InputLabel>
                                                        <Select
                                                            className={errors.feature_6 && touched.feature_6 && "error"}
                                                            labelId="demo-simple-select-outlined-label"
                                                            id="demo-simple-select-outlined-6"
                                                            label="Feature_6"
                                                            onChange={handleChange}
                                                            value={values.feature_6 ? values.feature_6 : ""}
                                                            name="feature_6">
                                                            {feature_6_options.map((item) => (

                                                                <MenuItem id="feature_6_mi" key={item.value}
                                                                          value={item.value}>
                                                                    {item.label}
                                                                </MenuItem>
                                                            ))}
                                                        </Select>
                                                    </FormControl>
                                                    {errors.feature_6 && touched.feature_6 && (
                                                        <div id="feature_6_error"
                                                             className="input-feedback">{errors.feature_6}</div>
                                                    )}
                                                </Grid>

                                                <Grid item xs={12} sm={6} id="feature_28" md={12} style={{margin: 12}}>
                                                    <FormControl fullWidth variant="outlined" id="fc-28">
                                                        <InputLabel id="demo-simple-select-outlined-label_28">
                                                            Feature 28
                                                        </InputLabel>
                                                        <Select
                                                            className={errors.feature_28 && touched.feature_28 && "error"}
                                                            labelId="demo-simple-select-outlined-label_28"
                                                            id="demo-simple-select-outlined-28"
                                                            label="Feature_28"
                                                            onChange={handleChange}
                                                            value={values.feature_28 ? values.feature_28 : ""}
                                                            name="feature_28">
                                                            {feature_28_options.map((item) => (
                                                                <MenuItem id="feature_28_mi" key={item.value}
                                                                          value={item.value}>
                                                                    {item.label}
                                                                </MenuItem>
                                                            ))}
                                                        </Select>
                                                    </FormControl>
                                                    {errors.feature_28 && touched.feature_28 && (
                                                        <div id="feature_28_error"
                                                             className="input-feedback">{errors.feature_28}</div>
                                                    )}
                                                </Grid>

                                                <Grid item xs={12} sm={6} id="feature_29" md={12} style={{margin: 12}}>
                                                    <FormControl fullWidth variant="outlined" id="fc-29">
                                                        <InputLabel id="demo-simple-select-outlined-label-29">
                                                            Feature 29
                                                        </InputLabel>
                                                        <Select
                                                            className={errors.feature_29 && touched.feature_29 && "error"}
                                                            labelId="demo-simple-select-outlined-label-29"
                                                            id="demo-simple-select-outlined-29"
                                                            label="Feature_29"
                                                            onChange={handleChange}
                                                            value={values.feature_29 ? values.feature_29 : ""}
                                                            name="feature_29">
                                                            {feature_29_options.map((item) => (
                                                                <MenuItem id="feature_29_mi" key={item.value}
                                                                          value={item.value}>
                                                                    {item.label}
                                                                </MenuItem>
                                                            ))}
                                                        </Select>
                                                    </FormControl>
                                                    {errors.feature_29 && touched.feature_29 && (
                                                        <div id="feature_29_error"
                                                             className="input-feedback">{errors.feature_29}</div>
                                                    )}
                                                </Grid>

                                                <Grid item xs={12} sm={6} md={12} id="feature_31" style={{margin: 12}}>
                                                    <FormControl fullWidth variant="outlined" id="fc-31">
                                                        <InputLabel id="demo-simple-select-outlined-label-31">
                                                            Feature 31
                                                        </InputLabel>
                                                        <Select
                                                            className={errors.feature_31 && touched.feature_31 && "error"}
                                                            labelId="demo-simple-select-outlined-label-31"
                                                            id="demo-simple-select-outlined-31"
                                                            label="Feature_31"
                                                            onChange={handleChange}
                                                            value={values.feature_31 ? values.feature_31 : ""}
                                                            name="feature_31">
                                                            {feature_31_options.map((item) => (
                                                                <MenuItem id="feature_31_mi" key={item.value}
                                                                          value={item.value}>
                                                                    {item.label}
                                                                </MenuItem>
                                                            ))}
                                                        </Select>
                                                    </FormControl>
                                                    {errors.feature_31 && touched.feature_31 && (
                                                        <div id="feature_31_error"
                                                             className="input-feedback">{errors.feature_31}</div>
                                                    )}
                                                </Grid>

                                                <Grid item xs={12} sm={6} id="feature_37" md={12} style={{margin: 12}}>
                                                    <FormControl fullWidth variant="outlined" id="fc-37">
                                                        <InputLabel id="demo-simple-select-outlined-label-37">
                                                            Feature 37
                                                        </InputLabel>
                                                        <Select
                                                            className={errors.feature_37 && touched.feature_37 && "error"}
                                                            labelId="demo-simple-select-outlined-label-37"
                                                            id="demo-simple-select-outlined-37"
                                                            label="Feature_37"
                                                            onChange={handleChange}
                                                            value={values.feature_37 ? values.feature_37 : ""}
                                                            name="feature_37">
                                                            {feature_37_options.map((item) => (
                                                                <MenuItem id="feature_37_mi" key={item.value}
                                                                          value={item.value}>
                                                                    {item.label}
                                                                </MenuItem>
                                                            ))}
                                                        </Select>
                                                    </FormControl>
                                                    {errors.feature_37 && touched.feature_37 && (
                                                        <div id="feature_37_error"
                                                             className="input-feedback">{errors.feature_37}</div>
                                                    )}
                                                </Grid>

                                                <Grid item xs={12} sm={6} md={12} id="feature_50" style={{margin: 12}}>
                                                    <FormControl fullWidth variant="outlined" id="fc-50">
                                                        <InputLabel id="demo-simple-select-outlined-label-50">
                                                            Feature 50
                                                        </InputLabel>
                                                        <Select
                                                            className={errors.feature_50 && touched.feature_50 && "error"}
                                                            labelId="demo-simple-select-outlined-label-50"
                                                            id="demo-simple-select-outlined-50"
                                                            label="Feature_50"
                                                            onChange={handleChange}
                                                            value={values.feature_50 ? values.feature_50 : ""}
                                                            name="feature_50">
                                                            {feature_50_options.map((item) => (
                                                                <MenuItem id="feature_50_mi" key={item.value}
                                                                          value={item.value}>
                                                                    {item.label}
                                                                </MenuItem>
                                                            ))}
                                                        </Select>
                                                    </FormControl>
                                                    {errors.feature_50 && touched.feature_50 && (
                                                        <div id="feature_50_error"
                                                             className="input-feedback">{errors.feature_50}</div>
                                                    )}
                                                </Grid>

                                                <CardActions id="card_actions">
                                                    <Button
                                                        disabled={isSubmitting}
                                                        variant="outlined"
                                                        color="primary"
                                                        type="Submit"
                                                        id="submit button"
                                                    >
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
            <PredictionResult id="predictionResult" show={predictionMade} prediction={prediction}/>
        </div>
    );
};

export default FeatureInputForm;
