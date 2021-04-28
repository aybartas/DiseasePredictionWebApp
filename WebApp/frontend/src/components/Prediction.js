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

import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

export default class Prediction extends Component{

    state = {
        formData: {
            name: '',
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
            setTimeout(() => this.setState({ submitted: false }), 5000);
        });
    }

     render() {
        const { formData, submitted } = this.state;
        return (
            <ValidatorForm
                ref="form"
                onSubmit={this.handleSubmit}>

                <h2>Simple form</h2>
                <TextValidator
                    label="Email"
                    onChange={this.handleChange}
                    name="disease_name"
                    value={formData.email}
                    validators={['required', 'isEmail']}
                    errorMessages={['this field is required', 'name is not valid']}/>

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
