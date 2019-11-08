import React from "react";
import { withStyles, WithStyles } from "@material-ui/styles";
import * as Yup from "yup";
import { Formik, FormikActions } from "formik";
import { Button, Typography } from "@material-ui/core";
import FormikField from "../FormikField";
import { MyTextField } from "../MyFields";
import { sendEmail } from "../../Utils/emailService";
import Styles from "./index.Styles";

interface FormikInitialValues {
    name: string;
    email: string;
    message: string;
}

const formikInitialValues: FormikInitialValues = {
    email: "",
    name: "",
    message: "",
};
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

const initialSubmittingStateValues = {
    isSubmitting: false,
    submittingError: false,
    submittedSuccss: false,
};
const Contact: React.FC<WithStyles<typeof Styles>> = ({ classes }) => {
    const [submittingState, setSubmittingState] = React.useState(initialSubmittingStateValues);
    const handleOnSubmit: (
        values: FormikInitialValues,
        formikActions: FormikActions<FormikInitialValues>,
    ) => void = async ({ email, message, name }, { setSubmitting }) => {
        setSubmittingState({ isSubmitting: true, submittedSuccss: false, submittingError: false });
        try {
            await sendEmail({ email, message, name });
            setSubmittingState({ ...initialSubmittingStateValues, submittedSuccss: true });
        } catch (err) {
            setSubmittingState({ isSubmitting: false, submittedSuccss: false, submittingError: true });
        }
        setSubmitting(false);
    };

    return (
        <Formik
            initialValues={formikInitialValues}
            onSubmit={handleOnSubmit}
            validationSchema={ValidationSchema}
            validateOnChange={false}
            validateOnBlur={false}
        >
            {({ errors, submitCount, submitForm, isSubmitting }) => (
                <React.Fragment>
                    <div className={classes.errorText}>
                        {submitCount > 0 && Object.keys(errors).length > 0 && (
                            <Typography variant="h5" color="error">
                                Did you fill in the form properly?
                            </Typography>
                        )}
                        {submittingState.isSubmitting && (
                            <Typography variant="h5">Submitting Form, Please wait.</Typography>
                        )}
                        {submittingState.submittedSuccss && (
                            <Typography variant="h5" color="primary">
                                Form Successfuly submitted.
                            </Typography>
                        )}
                        {submittingState.submittingError && (
                            <Typography variant="h5" color="error">
                                There is Some error, Please try reloading the page or check your internet connection.
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
                        disabled={isSubmitting}
                    >
                        Submit
                    </Button>
                </React.Fragment>
            )}
        </Formik>
    );
};

export default withStyles(Styles)(Contact);
