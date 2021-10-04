import React, { useEffect, useState,useCallback } from "react";
import FormSelect from "../../hook-controls/select";
import { GetPlanTypeList } from "../../../module/master/api";
function ComboExecutionPlanType(props) {
  const [Data, setData] = useState([]);
  const GetListcbx = useCallback(
    async () => {
      let data = await GetPlanTypeList();
      const cbo= data&&data.map(({ TYPE_TEXT: label, TYPE_ID: id }) =>({ label, id }));
      setData(cbo);
    },
    [setData],
  )
  useEffect(() => {
    GetListcbx();
  }, [GetListcbx]);
  
  return (
    <>
      <FormSelect {...props} options={Data} />
    </>
  );
}

export default ComboExecutionPlanType;
