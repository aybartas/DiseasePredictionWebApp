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
            disease_name: '',
            gender:''
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

        //alert(this.state.formData.disease_name);

        console.log(`Radio button valuesu : ${this.state.formData.gender}`);

    }

    render() {
        const { formData, submitted } = this.state;
        return (
            <ValidatorForm

                ref="form"
                onSubmit={this.handleSubmit}>
                <h2>Simple form</h2>
                <TextValidator
                    label="Disease name"
                    onChange={this.handleChange}
                    name="disease_name"
                    value={formData.disease_name}
                    validators={['required']}
                    errorMessages={['Fields can not be empty']}
                />

                <RadioGroup aria-label="gender" name="gender"  onChange={this.handleChange}>
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />

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
