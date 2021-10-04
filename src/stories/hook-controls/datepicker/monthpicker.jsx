import "date-fns";
import React from "react";
import { useFormContext} from "react-hook-form";
import DateFnsUtils from "@date-io/date-fns";
import { useMaterialDate } from "./useMaterialDate";
import { MonthMuiformat } from "../../../utils/date";
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";
export function MaterialUIMonthPickers(props) {
  const { name, onChange = () => {},inputVariant="outlined",fullWidth=true } = props;
  const methods = useFormContext();
  const { errors } = methods;
  const { handleDateChange,values } = useMaterialDate(name);
  return (
    <>
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <KeyboardDatePicker
          {...props}
          format={MonthMuiformat}
          fullWidth={fullWidth}
          views={["year","month"]}
          autoOk
          showTodayButton
          size="small"
          style={{height:"39px"}}
          disableToolbar
          inputVariant={inputVariant}
          value={values}
          onChange={(e) => {
            handleDateChange(e);
            onChange(e);
          }}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
          error={errors.hasOwnProperty(name)}
          helperText={errors[name] && errors[name].message}
        />
    </MuiPickersUtilsProvider>
    </>
  );
}
