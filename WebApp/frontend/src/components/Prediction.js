import React,{Component} from 'react'
import {
    FormControl,
    FormHelperText,
    Input,
    InputLabel,
    Grid,
    Typography,
    RadioGroup,
    FormControlLabel, FormLabel, Radio, Checkbox, TextField, Button, makeStyles
} from "@material-ui/core";

import { ValidatorForm, TextValidator,SelectValidator} from 'react-material-ui-form-validator';

export default class Prediction extends Component{

    state = {
        formData: {
            feature_1: '',
            feature_2:''
        },
        submitted: false,
    }

    handleChange = (event) => {

        const { formData } = this.state;
        formData[event.target.name] = event.target.value;
        this.setState({ formData });
    }

    handleSubmit = () => {
        this.setState({ submitted: true }, () => {
            setTimeout(() => this.setState({ submitted: false }), 3000);
        });

        const requestOptions = {
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify({

                feature_1: this.state.formData.feature_1,
                feature_2: this.state.formData.feature_2
            })
        };

        fetch('/api/addRecord',requestOptions)
            .then((response) => response.json())
            .then((data) => console.log(data));

    }

    render() {
        const { formData, submitted } = this.state;
        return (
            <ValidatorForm

                ref="form"
                onSubmit={this.handleSubmit}>
                <Typography variant="h5" gutterBottom>
                     Prediction
                </Typography>
                <TextValidator
                    label="Feature 1"
                    onChange={this.handleChange}
                    name="feature_1"
                    value={formData.feature_1}
                    validators={['required']}
                    errorMessages={['Fields can not be empty']}
                />

                <RadioGroup aria-label="feature_2" name="feature_2"  onChange={this.handleChange}>
                    <FormControlLabel value="yes" control={<Radio />} label="Yes" />
                    <FormControlLabel value="no" control={<Radio />} label="No" />

              </RadioGroup>

                <br />
                <Button
                    color="primary"
                    variant="contained"
                    type="submit"
                    disabled={submitted}>
                    {
                        (submitted && 'Form submitted') || (!submitted && 'Submit')
                    }
                </Button>

            </ValidatorForm>
        );
    }
}
