import React from "react";
import  {MaterialUIDatePickers}  from "./datepicker/datepicker";
import { TemplateTestHookForm } from "./template-hook";
export default {
  title: "Hook-Control/DatePicker",
  component: MaterialUIDatePickers,
};

const Template = (args) => {
  const {test,...otherargs} = args
  return (
    <TemplateTestHookForm {...test} {...otherargs} >
      <MaterialUIDatePickers {...otherargs} />
    </TemplateTestHookForm>
  );
};
export const Default = Template.bind({});

Default.args = {
  name: "date",
  label:"date",

  test:{value:'2021-01-20T06:24:21'}
};


