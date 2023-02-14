import FormikField from "../FormikField";
import { MyTextField } from "../MyFields";
import { sendEmail } from "../../utils/emailService";
import Styles from "./index.Styles";
import React from "react";
import { withStyles, WithStyles } from "@mui/styles";
import { object as isValidObject, string as isValidString } from "yup";
import { Formik, FormikHelpers } from "formik";
import { Button, Typography } from "@mui/material";

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
const ValidationSchema = isValidObject().shape({
  email: isValidString()
    .email("Must be an email address")
    .max(255, "Too Long!")
    .required("Required"),
  name: isValidString().max(255, "Too Long!").required("Required"),
  message: isValidString().required("Required"),
});

const initialSubmittingStateValues = {
  isSubmitting: false,
  submittingError: false,
  submittedSuccss: false,
};
const Contact: React.FC<WithStyles<typeof Styles>> = ({ classes }) => {
  const [submittingState, setSubmittingState] = React.useState(
    initialSubmittingStateValues
  );
  const handleOnSubmit: (
    values: FormikInitialValues,
    formikActions: FormikHelpers<FormikInitialValues>
  ) => void = async (
    { email, message, name },
    { setSubmitting, resetForm }
  ) => {
    setSubmittingState({
      isSubmitting: true,
      submittedSuccss: false,
      submittingError: false,
    });
    try {
      await sendEmail({ email, message, name });
      setSubmittingState({
        ...initialSubmittingStateValues,
        submittedSuccss: true,
      });
      resetForm();
    } catch (err) {
      setSubmittingState({
        isSubmitting: false,
        submittedSuccss: false,
        submittingError: true,
      });
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
      {({ errors, submitCount, submitForm, isSubmitting, getFieldMeta }) => (
        <React.Fragment>
          <div className={classes.errorText}>
            {submitCount > 0 && Object.keys(errors).length > 0 && (
              <Typography variant="h5" color="error">
                Did you fill in the form properly?
              </Typography>
            )}
            {submittingState.isSubmitting && (
              <Typography variant="h5">
                Submitting Form, Please wait.
              </Typography>
            )}
            {submittingState.submittedSuccss && (
              <Typography variant="h5" color="primary">
                Form Successfuly submitted.
              </Typography>
            )}
            {submittingState.submittingError && (
              <Typography variant="h5" color="error">
                Something went wrong, Please try again later.
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
            meta={getFieldMeta("name")}
          />
          <FormikField
            className={classes.inputField}
            component={MyTextField}
            variant="outlined"
            fullWidth
            name="email"
            placeholder="Email"
            type="email"
            meta={getFieldMeta("email")}
          />
          <FormikField
            className={`${classes.inputField}`}
            component={MyTextField}
            placeholder="Message"
            fullWidth
            name="message"
            variant="outlined"
            inputProps={{ className: classes.messageInputField }}
            meta={getFieldMeta("message")}
          />
          <Button
            onClick={submitForm}
            className={classes.button}
            fullWidth
            classes={{ disabled: classes.buttonDisabled }}
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
