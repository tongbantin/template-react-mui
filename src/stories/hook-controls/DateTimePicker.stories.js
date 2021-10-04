import React from "react";
import  {MaterialUIDateTimePickers}  from "./datepicker/datetimepicker";
import { TemplateTestHookForm } from "./template-hook";
export default {
  title: "Hook-Control/DateTimePicker",
  component: MaterialUIDateTimePickers,
};

const Template = (args) => {
  const {test,...otherargs} = args
  return (
    <TemplateTestHookForm {...test} {...otherargs}  >
      <MaterialUIDateTimePickers {...args} />
    </TemplateTestHookForm>
  );
};
export const Default = Template.bind({});

Default.args = {
  name: "date",
  label:"date",
  test:{value:'2021-01-20T06:24:21'}
};

