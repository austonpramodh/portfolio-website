import React from "react";
import { withStyles, WithStyles } from "@material-ui/styles";
import * as Yup from "yup";
import { Formik } from "formik";
import { Button, Typography } from "@material-ui/core";
import FormikField from "../FormikField";
import { MyTextField } from "../MyFields";
import Styles from "./index.Styles";

interface FormikInitialValues {
    name: string;
    email: string;
    message: string;
}

const formikInitialValues: FormikInitialValues = { email: "", name: "", message: "" };
const ValidationSchema = Yup.object().shape({
    email: Yup.string()
        .email("Must be an email address")
        .max(255, "Too Long!")
        .required("Required"),
    name: Yup.string()
        .max(255, "Too Long!")
        .required("Required"),
    message: Yup.string().required("Required"),
});

const handleOnSubmit = () => {};
const Contact: React.FC<WithStyles<typeof Styles>> = ({ classes }) => {
    return (
        <Formik initialValues={formikInitialValues} onSubmit={handleOnSubmit} validationSchema={ValidationSchema}>
            {({ errors, submitCount, submitForm }) => (
                <React.Fragment>
                    <div className={classes.errorText}>
                        {submitCount > 0 && Object.keys(errors).length > 0 && (
                            <Typography variant="h5" color="error">
                                Did you fill in the form properly?
                            </Typography>
                        )}
                    </div>

                    <FormikField
                        className={classes.inputField}
                        component={MyTextField}
                        placeholder="Name"
                        fullWidth
                        name="name"
                        type="name"
                        variant="outlined"
                    />
                    <FormikField
                        className={classes.inputField}
                        component={MyTextField}
                        variant="outlined"
                        fullWidth
                        name="email"
                        placeholder="Email"
                        type="email"
                    />
                    <FormikField
                        className={`${classes.inputField}`}
                        component={MyTextField}
                        placeholder="Message"
                        fullWidth
                        name="message"
                        variant="outlined"
                        inputProps={{ className: classes.messageInputField }}
                    />
                    <Button
                        onClick={submitForm}
                        className={classes.button}
                        fullWidth
                        variant="contained"
                        color="primary"
                    >
                        Submit
                    </Button>
                </React.Fragment>
            )}
        </Formik>
    );
};

export default withStyles(Styles)(Contact);
