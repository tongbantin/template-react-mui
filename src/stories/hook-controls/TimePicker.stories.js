import React from "react";
import  {MaterialUITimePickers}  from "./datepicker/timepicker";
import { TemplateTestHookForm } from "./template-hook";
export default {
  title: "Hook-Control/TimePicker",
  component: MaterialUITimePickers,
};

const Template = (args) => {
  const {test,...otherargs} = args
  return (
    <TemplateTestHookForm {...test} {...otherargs} >
      <MaterialUITimePickers {...otherargs} />
    </TemplateTestHookForm>
  );
};
export const Default = Template.bind({});

Default.args = {
  name: "date",
  label:"date",

  test:{value:'2021-01-20T06:24:21'}
};


