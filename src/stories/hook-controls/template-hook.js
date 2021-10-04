import { useForm, FormProvider, useFormContext } from "react-hook-form";
export const TemplateTestHookForm = ({ children,...args }) => {
    const methods = useForm();
    return (
      <FormProvider {...methods}>
        {children}
        {JSON.stringify(methods.watch())}
        <button onClick={()=>methods.setValue(args.name,args.value)}>set</button>
      </FormProvider>
    );
  };