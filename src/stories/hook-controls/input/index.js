import React from "react";
import { useFormContext, Controller } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import "./index.css";

function FormInput(props) {
  const { control,errors } = useFormContext();
  const { name, required, errorobj,variant, fullWidth = true } = props;
  let isError = false;
  let errorMessage = "";
  if (errors && errors.hasOwnProperty(name)) {
    isError = true;
    errorMessage = errors[name].message;
  }

  // const v1 = (
  //   <TextField
  //     {...props}
  //     variant="outlined"
  //     defaultValue=""
  //     fullWidth={true}
  //     inputRef={register}
  //     InputLabelProps={{
  //       className: required ? "required-label" : "",
  //       required: required || false,
  //     }}
  //     error={isError}
  //     helperText={errorMessage}
  //   ></TextField>
  // );

  // const v2 = (
  //   <Controller
  //     control={control}
  //     name={name}
  //     as={({ onChange, onBlur, value, ref }) => (
  //       <TextField
  //         onChange={onChange}
  //         onBlur={onBlur}
  //         selected={value}
  //         inputRef={register}
  //       />
  //     )}
  //   />
  // );
  const v3 = (
    <>
    <Controller
      control={control}
      defaultValue=""
      {...props}
      render={(uiprops) => (
        <TextField
          {...uiprops}
          {...props}
          variant={variant||"outlined"}
          error={isError}
          size="small"
          style={{height:"39px"}}
          fullWidth={fullWidth}
          helperText={errorMessage}
          InputLabelProps={{
            className: required ? "required-label" : "",
            required: required || false,
          }}
        />
      )}
    />
    </>
  );

  return v3;

  // return (
  //   <>
  //     {/* <Controller
  //     as={(<TextField onBlur={(e) => {
  //       console.log('Triggered because this input lost focus');
  //     }}></TextField>)}
  //     name={name}
  //     control={control}
  //     variant ="outlined"
  //     defaultValue=""
  //     label={label}
  //     fullWidth={true}
  //     InputLabelProps={{
  //       className: required ? "required-label" : "",
  //       required: required || false,
  //     }}
  //     error={isError}
  //     helperText={errorMessage}
  //     onBlur={(e) => {
  //       console.log('Triggered because this input lost focus');
  //     }}
  //     {...props}
  //   /> */}
  //   </>
  // );
}

export default FormInput;
