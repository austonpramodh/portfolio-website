import React from "react";
import { FieldProps } from "formik";
import { TextField, WithStyles, createStyles, Theme } from "@material-ui/core";
import { TextFieldProps } from "@material-ui/core/TextField/TextField";
import { withStyles } from "@material-ui/styles";

const Styles = (theme: Theme) =>
    createStyles({
        inputLabel: {
            color: theme.palette.text.primary,
        },
    });

const MyFieldWithoutStyles: React.FC<FieldProps & TextFieldProps & WithStyles<typeof Styles>> = ({
    // helperText,
    field,
    classes,
    InputLabelProps,
    ...restProps
}) => {
    // const error = restProps.form.touched[field.name] && Boolean(restProps.form.errors[field.name]);
    // const helperTextChoosen = helperText || error ? restProps.form.errors[field.name] : undefined;
    const formDisabled = restProps.form.isSubmitting;
    const defaultValue = restProps.defaultValue === "" ? undefined : restProps.defaultValue;

    return (
        <TextField
            InputLabelProps={InputLabelProps ? InputLabelProps : { className: classes.inputLabel }}
            {...field}
            {...restProps}
            // error={error}
            // helperText={helperTextChoosen}
            disabled={formDisabled}
            defaultValue={defaultValue}
        />
    );
};
export default withStyles(Styles)(MyFieldWithoutStyles);
