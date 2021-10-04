import React, { useEffect, useState,useCallback } from "react";
import FormSelect from "../../hook-controls/select";
import { GetJobTypeList } from "../../../module/master/api";
function ComboJobType(props) {
  const [Data, setData] = useState([]);
  const GetListcbx = useCallback(
    async () => {
      let data = await GetJobTypeList();
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

export default ComboJobType;