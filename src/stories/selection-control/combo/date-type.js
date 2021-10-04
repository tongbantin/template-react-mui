import React, { useEffect, useState,useCallback } from "react";
import FormSelect from "../../hook-controls/select";
import { GetDataDateTypeList } from "../../../module/master/api";
function ComboDataDateType(props) {
  const [Data, setData] = useState([]);
  const GetListDataDateTypecbx = useCallback(
    async () => {
      let data = await GetDataDateTypeList();
      const cbo= data&&data.map(({ DATADATE_TYPE_NAME: label, DATADATE_TYPE_ID: id }) =>({ label, id }));
      setData(cbo);
    },
    [setData],
  )
  useEffect(() => {
    GetListDataDateTypecbx();
  }, [GetListDataDateTypecbx]);
  
  return (
    <>
      <FormSelect {...props} options={Data} />
    </>
  );
}

export default ComboDataDateType;
