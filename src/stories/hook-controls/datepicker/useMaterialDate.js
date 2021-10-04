import React from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { MuiDateTimeToApi } from "./../../../utils/date";
export function useMaterialDate(name) {
  // The first commit of Material-UI
  const methods = useFormContext();

  const { register, unregister, setValue, control } = methods;
  const values = useWatch({
    control,
    name: name, // without supply name will watch the entire form, or ['firstName', 'lastName'] to watch both
    defaultValue: null, // default value before the render
  });
  React.useEffect(() => {
    register({ name: name, type: "text" });
    return () => {
      unregister(name);
    };
  }, [register, unregister, name]);
  const handleDateChange = (date) => {
    let date_result = MuiDateTimeToApi(date);
    setValue(name, date_result);
  };
  const handleDateTimeChange = (date) => {
    let date_result = MuiDateTimeToApi(date);
    setValue(name, date_result);
  };
  const handleTimeChange = (date) => {
    let date_result = MuiDateTimeToApi(date);
    setValue(name, date_result);
  };
  return {
    handleDateChange,
    handleDateTimeChange,
    handleTimeChange,
    values,
  };
}
